import React from 'react';

function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-4">Professional Painting</h3>
            <p className="text-gray-600">High-quality interior and exterior painting services.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 text-4xl mb-4">🪟</div>
            <h3 className="text-xl font-bold mb-4">Window Installation</h3>
            <p className="text-gray-600">Energy-efficient window solutions for your home.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 text-4xl mb-4">🏡</div>
            <h3 className="text-xl font-bold mb-4">Interior Design</h3>
            <p className="text-gray-600">Custom interior design solutions to match your style.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
