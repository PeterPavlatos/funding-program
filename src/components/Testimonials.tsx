import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "FundingFinder helped us secure a $250,000 grant that transformed our business. The platform made it easy to find opportunities we would have never discovered on our own.",
      author: "Sarah Johnson",
      role: "CEO, GreenTech Solutions",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      content: "The business plan builder tool saved us countless hours and helped us create a professional plan that impressed investors. We raised $1.2M in seed funding as a result.",
      author: "Michael Chen",
      role: "Founder, DataSync",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      content: "As a rural business owner, I struggled to find funding opportunities. FundingFinder connected us with a USDA grant program that was perfect for our expansion needs.",
      author: "Emily Rodriguez",
      role: "Owner, Heartland Manufacturing",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Success stories from our clients
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Hear from businesses that have secured funding through our platform.
          </p>
        </div>
        
        <div className="mt-10 grid gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <img 
                    className="h-12 w-12 rounded-full mr-4" 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{testimonial.author}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;