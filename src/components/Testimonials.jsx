import React from 'react';

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">"ColorSay did an amazing job painting our house. Professional and courteous service!"</p>
            <div className="font-bold">- John Smith</div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">"Their window installation service was top-notch. Highly recommended!"</p>
            <div className="font-bold">- Sarah Johnson</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
