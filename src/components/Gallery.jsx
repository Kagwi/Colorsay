import React from 'react';

function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Work</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
               alt="Painting" className="w-full h-64 object-cover rounded-lg" />
          <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
               alt="Windows" className="w-full h-64 object-cover rounded-lg" />
          <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
               alt="Interior" className="w-full h-64 object-cover rounded-lg" />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
