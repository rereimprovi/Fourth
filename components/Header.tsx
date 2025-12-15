import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'New Arrivals', href: '#' },
    { name: 'Women', href: '#' },
    { name: 'Men', href: '#' },
    { name: 'Accessories', href: '#' },
    { name: 'Sale', href: '#', className: 'text-rose-600 font-semibold' },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 border-b ${
      isScrolled ? 'bg-white/80 backdrop-blur-md border-gray-200 py-3 shadow-sm' : 'bg-transparent border-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-900 rounded-tr-xl rounded-bl-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
            </div>
            <a href="#" className="text-2xl font-bold tracking-tight text-gray-900">Lumina</a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-colors hover:text-gray-900 ${link.className || 'text-gray-600'}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
             {/* Search */}
             <button className="p-2 text-gray-500 hover:text-gray-900 transition-colors">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
             </button>

             {/* Cart */}
             <button className="p-2 text-gray-500 hover:text-gray-900 transition-colors relative">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
               </svg>
               <span className="absolute top-1 right-0.5 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
             </button>

             {/* Mobile Menu Button */}
             <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-900"
             >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   {isMobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                   ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                   )}
                </svg>
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg md:hidden p-4 flex flex-col space-y-4 animate-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-base font-medium p-2 rounded-lg hover:bg-gray-50 ${link.className || 'text-gray-600'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
        </div>
      )}
    </header>
  );
};