import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 min-h-screen flex flex-col justify-center items-center text-center relative bg-[#E1FEE9]">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#148be3] leading-tight">
          Welcome to <span className="text-[#D4AF37]">IGNISIATrade LLP</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Your Trustful Partner in Global Trade
        </p>
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mb-12 transform transition-all duration-500 hover:scale-105">
          <p className="text-gray-600 leading-relaxed mb-4">
            At IGNISIATrade LLP, we are committed to delivering high-quality products to global markets with trust, consistency, and integrity.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From sustainable packaging solutions to authentic agricultural goods, our mission is to bridge tradition with modern demand across international markets.
          </p>
        </div>
        <button 
          onClick={scrollToProducts}
          className="mt-8 bg-[#148be3] text-white px-8 py-3 rounded-full flex items-center mx-auto hover:bg-[#164624] transition-colors duration-300 group"
        >
          Explore Our Products
          <ArrowDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
