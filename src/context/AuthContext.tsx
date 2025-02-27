import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '../lib/supabase';
import { AuthUser } from '../types';
import { Session, User as SupabaseUser } from '@supabase/supabase-js';

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string, isPremium?: boolean) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

// Helper function to transform Supabase user to our AuthUser type
const transformUser = async (supabaseUser: SupabaseUser | null): Promise<AuthUser | null> => {
  if (!supabaseUser) return null;

  // Fetch user profile from the profiles table
  const { data, error } = await supabase
    .from('profiles')
    .select('name, is_premium')
    .eq('id', supabaseUser.id)
    .single();

  if (error) {
    console.error('Error fetching user profile:', error);
    return {
      id: supabaseUser.id,
      email: supabaseUser.email || '',
      isPremium: false
    };
  }

  return {
    id: supabaseUser.id,
    email: supabaseUser.email || '',
    name: data?.name,
    isPremium: data?.is_premium || false
  };
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    // Get initial session
    const initializeAuth = async () => {
      setLoading(true);
      
      // Get current session
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      
      if (session?.user) {
        const authUser = await transformUser(session.user);
        setUser(authUser);
      }
      
      setLoading(false);
      
      // Listen for auth changes
      const { data: { subscription } } = await supabase.auth.onAuthStateChange(
        async (_event, session) => {
          setSession(session);
          
          if (session?.user) {
            const authUser = await transformUser(session.user);
            setUser(authUser);
          } else {
            setUser(null);
          }
        }
      );
      
      // Cleanup subscription
      return () => {
        subscription.unsubscribe();
      };
    };
    
    initializeAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) throw error;
      
      // User will be set by the auth state change listener
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (email: string, password: string, name: string, isPremium = false) => {
    setLoading(true);
    
    try {
      // Register the user
      const { data: { user: newUser }, error: signUpError } = await supabase.auth.signUp({
        email,
        password
      });
      
      if (signUpError) throw signUpError;
      if (!newUser) throw new Error('User registration failed');
      
      // Create a profile for the user
      const { error: profileError } = await supabase
        .from('profiles')
        .insert([
          { 
            id: newUser.id, 
            name, 
            email,
            is_premium: isPremium
          }
        ]);
      
      if (profileError) throw profileError;
      
      // User will be set by the auth state change listener
    } catch (error) {
      console.error('Error registering:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      // User will be set to null by the auth state change listener
    } catch (error) {
      console.error('Error logging out:', error);
      throw error;
    }
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};