import React from 'react';

function Hero() {
  return (
    <section id="home" className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Transform Your Space with ColorSay
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Professional painting, window installation, and interior design services.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Get a Free Quote
            </button>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                 alt="Painting Services" 
                 className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
