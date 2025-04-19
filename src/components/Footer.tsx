import { Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1A5F7A] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Globe className="h-6 w-6" />
            <span className="ml-2 text-lg font-bold">IGNISIA<span className="text-[#D4AF37]">Trade</span></span>
          </div>
          <div className="text-sm text-gray-200">
            <nav className="flex flex-wrap justify-center md:justify-end mb-4">
              <a href="#home" className="mx-3 mb-2 hover:text-[#D4AF37] transition-colors duration-300">Home</a>
              <a href="#products" className="mx-3 mb-2 hover:text-[#D4AF37] transition-colors duration-300">Products</a>
              <a href="#why-choose-us" className="mx-3 mb-2 hover:text-[#D4AF37] transition-colors duration-300">Why Choose Us</a>
              <a href="#exporting" className="mx-3 mb-2 hover:text-[#D4AF37] transition-colors duration-300">Exporting</a>
              <a href="#contact" className="mx-3 mb-2 hover:text-[#D4AF37] transition-colors duration-300">Contact</a>
            </nav>
          </div>
        </div>
        <div className="border-t border-gray-500 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {currentYear} IGNISIATrade LLP. All rights reserved.</p>
          <p className="mt-2">Your Trustful Partner in Global Trade</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;