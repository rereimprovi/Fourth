import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { GeminiStylist } from './components/GeminiStylist';
import { Product } from './types';
import { Button } from './components/Button';

// Mock Data
const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Classic Merino Wool Sweater",
    price: 89.00,
    description: "Expertly crafted from 100% merino wool for a soft touch and breathable warmth. Features a ribbed crew neck and cuffs for a timeless fit.",
    imageUrl: "https://picsum.photos/seed/fashion1/600/800",
    category: "Men",
    isNew: true
  },
  {
    id: 2,
    name: "Structured Cotton Blazer",
    price: 145.00,
    description: "A versatile blazer that bridges the gap between casual and formal. Made from premium structured cotton with a modern slim silhouette.",
    imageUrl: "https://picsum.photos/seed/fashion2/600/800",
    category: "Women"
  },
  {
    id: 3,
    name: "Everyday Relaxed Linen Shirt",
    price: 55.00,
    description: "Keep cool in our signature linen blend shirt. Designed with a relaxed fit and mother-of-pearl buttons for effortless summer style.",
    imageUrl: "https://picsum.photos/seed/fashion3/600/800",
    category: "Men"
  },
  {
    id: 4,
    name: "High-Waisted Wide Leg Trousers",
    price: 98.00,
    description: "Elegant tailoring meets comfort. These trousers feature a flattering high waist and fluid wide legs that drape beautifully.",
    imageUrl: "https://picsum.photos/seed/fashion4/600/800",
    category: "Women",
    isNew: true
  },
  {
    id: 5,
    name: "Minimalist Leather Sneakers",
    price: 120.00,
    description: "Clean lines and premium Italian leather make these sneakers a wardrobe essential. Durable rubber sole ensures all-day comfort.",
    imageUrl: "https://picsum.photos/seed/fashion5/600/800",
    category: "Accessories"
  },
  {
    id: 6,
    name: "Oversized Denim Jacket",
    price: 110.00,
    description: "A vintage-inspired denim jacket with a contemporary oversized fit. Distressed detailing adds character to any outfit.",
    imageUrl: "https://picsum.photos/seed/fashion6/600/800",
    category: "Unisex"
  },
  {
    id: 7,
    name: "Silk Satin Midi Skirt",
    price: 135.00,
    description: "Luxurious silk satin skirt cut on the bias for a flattering drape. Features an elasticated waistband for comfort without compromising style.",
    imageUrl: "https://picsum.photos/seed/fashion7/600/800",
    category: "Women"
  },
  {
    id: 8,
    name: "Waterproof Field Parka",
    price: 189.00,
    description: "Ready for any weather. This technical parka combines waterproof functionality with sleek urban design aesthetics.",
    imageUrl: "https://picsum.photos/seed/fashion8/600/800",
    category: "Men"
  }
];

const App: React.FC = () => {
  const handleAddToCart = (product: Product) => {
    // In a real app, this would update a cart context
    console.log(`Added ${product.name} to cart`);
    alert(`Added ${product.name} to your cart!`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero />
        
        {/* Featured Products Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trending This Week</h2>
                <p className="text-gray-500 max-w-xl">
                  Explore our most popular pieces, chosen by our community. Quality materials and expert craftsmanship in every stitch.
                </p>
              </div>
              <Button variant="outline">View All Products</Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {PRODUCTS.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Brand Values / Marketing Section */}
        <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
           <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
           <div className="container mx-auto px-4 max-w-7xl relative z-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold">Sustainable Fashion, <br/>Uncompromised Style.</h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                       At Lumina, we believe that looking good shouldn't cost the earth. That's why 100% of our cotton is organic, and we use recycled materials in our packaging.
                    </p>
                    <div className="grid grid-cols-2 gap-6 pt-4">
                       <div>
                          <p className="text-4xl font-bold text-rose-500 mb-1">100%</p>
                          <p className="text-sm text-gray-400">Ethical Labor</p>
                       </div>
                       <div>
                          <p className="text-4xl font-bold text-rose-500 mb-1">0%</p>
                          <p className="text-sm text-gray-400">Carbon Footprint</p>
                       </div>
                    </div>
                    <Button variant="secondary" className="mt-4">Read Our Story</Button>
                 </div>
                 <div className="relative">
                    <img 
                      src="https://picsum.photos/seed/fashionstudio/800/600" 
                      alt="Design studio" 
                      className="rounded-lg shadow-2xl opacity-90 hover:opacity-100 transition-opacity"
                    />
                 </div>
              </div>
           </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-rose-600">New Arrivals</a></li>
                <li><a href="#" className="hover:text-rose-600">Best Sellers</a></li>
                <li><a href="#" className="hover:text-rose-600">Men</a></li>
                <li><a href="#" className="hover:text-rose-600">Women</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-rose-600">Help Center</a></li>
                <li><a href="#" className="hover:text-rose-600">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-rose-600">Size Guide</a></li>
                <li><a href="#" className="hover:text-rose-600">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-rose-600">About Us</a></li>
                <li><a href="#" className="hover:text-rose-600">Careers</a></li>
                <li><a href="#" className="hover:text-rose-600">Press</a></li>
                <li><a href="#" className="hover:text-rose-600">Sustainability</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Stay Connected</h4>
              <p className="text-sm text-gray-500 mb-4">Subscribe to our newsletter for exclusive offers.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email address" className="bg-gray-50 border border-gray-200 px-3 py-2 rounded-md text-sm w-full focus:outline-none focus:border-rose-500"/>
                <Button size="sm" variant="primary">Join</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© 2025 Lumina Fashion. All rights reserved.</p>
            <div className="flex gap-4">
              <span className="w-8 h-5 bg-gray-200 rounded"></span>
              <span className="w-8 h-5 bg-gray-200 rounded"></span>
              <span className="w-8 h-5 bg-gray-200 rounded"></span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Gemini Stylist Widget */}
      <GeminiStylist />
    </div>
  );
};

export default App;