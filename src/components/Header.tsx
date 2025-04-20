import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white bg-opacity-95 shadow-sm z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Globe className="h-8 w-8 text-[#148be3]" />
          <span className="ml-2 text-xl font-bold text-[#148be3]">IGNISIA<span className="text-[#D4AF37]">Trade</span></span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            <li><a href="#home" className="text-gray-700 hover:text-[#148be3] transition-colors duration-300">Home</a></li>
            <li><a href="#products" className="text-gray-700 hover:text-[#148be3] transition-colors duration-300">Products</a></li>
            <li><a href="#why-choose-us" className="text-gray-700 hover:text-[#148be3] transition-colors duration-300">Why Choose Us</a></li>
            <li><a href="#exporting" className="text-gray-700 hover:text-[#148be3] transition-colors duration-300">Exporting</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-[#148be3] transition-colors duration-300">Contact</a></li>
          </ul>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <ul className="flex flex-col space-y-4 p-4">
            <li><a href="#home" className="block py-2 text-gray-700 hover:text-[#148be3]" onClick={toggleMenu}>Home</a></li>
            <li><a href="#products" className="block py-2 text-gray-700 hover:text-[#148be3]" onClick={toggleMenu}>Products</a></li>
            <li><a href="#why-choose-us" className="block py-2 text-gray-700 hover:text-[#148be3]" onClick={toggleMenu}>Why Choose Us</a></li>
            <li><a href="#exporting" className="block py-2 text-gray-700 hover:text-[#148be3]" onClick={toggleMenu}>Exporting</a></li>
            <li><a href="#contact" className="block py-2 text-gray-700 hover:text-[#148be3]" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
