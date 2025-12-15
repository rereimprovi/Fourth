import React from 'react';
import { Product } from '../types';
import { Button } from './Button';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 text-xs font-semibold uppercase tracking-wide text-gray-900 rounded-sm">
            New Arrival
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center pb-6 bg-gradient-to-t from-black/50 to-transparent">
          <Button 
            onClick={() => onAddToCart(product)}
            variant="secondary"
            size="sm"
            className="shadow-lg backdrop-blur-sm bg-white/90 text-gray-900 hover:bg-white hover:text-rose-600 w-full max-w-[80%]"
          >
            Add to Bag
          </Button>
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 leading-tight">
            {product.name}
          </h3>
          <span className="text-lg font-medium text-gray-900">
            ${product.price}
          </span>
        </div>
        <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed mb-4 flex-1">
          {product.description}
        </p>
        <div className="pt-2 border-t border-gray-50">
             <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
               {product.category}
             </span>
        </div>
      </div>
    </div>
  );
};