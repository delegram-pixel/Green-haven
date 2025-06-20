import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const services = [
  {
    title: 'Fresh Vegetable',
    description: 'Extend maintainable e-commerce for resource maximizing functionalities. Interactively customize adaptive niches whereas granular benefits.',
    image: '/fresh-veg-sal.png',
    alt: 'Fresh vegetables'
  },
  {
    title: 'Agriculture Product',
    description: 'Extend maintainable e-commerce for resource maximizing functionalities. Interactively customize adaptive niches whereas granular benefits.',
    image: '/agric-prod.png',
    alt: 'Agriculture product'
  },
  {
    title: 'Fresh Fruit',
    description: 'Extend maintainable e-commerce for resource maximizing functionalities. Interactively customize adaptive niches whereas granular benefits.',
    image: '/fresh-fruits.png',
    alt: 'Fresh fruits'
  }
];

export default function Services() {
  return (
    <section className="relative bg-white pb-32">
      <div className="max-w-7xl mx-auto">
        {/* Main Card Section */}
        <div className="relative flex flex-col lg:flex-row rounded-2xl shadow-lg overflow-visible min-h-[360px]" style={{height:'360px'}}> 
          {/* Left (Green) */}
          <div className="bg-[#2c5f4e] text-white flex-1 p-8 md:p-12 flex flex-col justify-center rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none">
            <h2 className="text-base md:text-lg tracking-widest mb-2">Green Haven Farm</h2>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">We Provide More Fresh Agro Products</h1>
          </div>
          {/* Right (White) */}
          <div className="bg-white flex-1 p-8 md:p-12 flex flex-col justify-center rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none border-t lg:border-t-0 lg:border-l border-gray-200">
            <p className="text-gray-700 text-base md:text-lg mb-4">
              Extend maintainable e-commerce for resource maximizing functionalities. Interactively customize adaptive niches whereas granular benefits.
            </p>
            <a href="#" className="text-[#2c5f4e] font-medium flex items-center gap-1 hover:underline w-fit">Explore More <FaArrowRight className="inline-block text-xs" /></a>
          </div>
        </div>

        {/* Overlapping Cards - perfectly overlap bottom edge of main card */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4 md:px-0 z-20" style={{top:'300px'}}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col items-center"
                style={{minHeight:'240px'}}
              >
                <div className="h-36 w-full bg-gray-100 relative flex items-center justify-center">
                  <Image 
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-4"
                    priority
                  />
                </div>
                <div className="p-6 w-full flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-2 flex-1">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}