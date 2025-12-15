import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-24 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          <div className="flex-1 text-center lg:text-left space-y-8 animate-in slide-in-from-bottom-10 fade-in duration-700">
            <span className="inline-block px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-sm font-semibold tracking-wide uppercase">
              Spring Collection 2025
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              Elevate Your <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">Everyday Look</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Discover a curated selection of contemporary apparel designed for the modern individual. Comfort meets effortless style in our latest arrivals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="shadow-lg shadow-gray-900/20">Shop Collection</Button>
              <Button size="lg" variant="outline">View Lookbook</Button>
            </div>
            
            <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                 <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                <span>Premium Quality</span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-1000">
               <img 
                 src="https://picsum.photos/seed/fashionhero1/800/1000" 
                 alt="Model wearing latest collection" 
                 className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-200 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
          </div>

        </div>
      </div>
    </div>
  );
};