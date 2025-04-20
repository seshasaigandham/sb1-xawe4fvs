import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

const Products = () => {
  const [activeProduct, setActiveProduct] = useState<number | null>(null);

  const productsList: Product[] = [
    {
      id: 1,
      name: "Eco-Friendly Areca Leaf Plates",
      description: "100% biodegradable and export-quality plates made from natural fallen areca palm leaves. Perfect for eco-conscious businesses and consumers.",
      image: "https://api.globy.com/public/market/66027f4de0d34600d6833c6c/photos/66027f4de0d34600d6833c74/66027f4de0d34600d6833c74_lg.webp"
    },
    {
      id: 2,
      name: "Premium Indian Rice Varieties",
      description: "Expertly cultivated Basmati, Sona Masoori, and other premium rice varieties, known for their aromatic qualities and exceptional taste.",
      image: "https://www.hamiast.com/cdn/shop/files/Authentic_Jammu_R.S._Pura_Basmati_Rice_Aromatic_Bliss_-_Hamiast-51791_840x.png?v=1740487932"
    },
    {
      id: 3,
      name: "Authentic Indian Spices",
      description: "Handpicked, aromatic, and preservative-free spices that bring the true essence of Indian cuisine to kitchens worldwide.",
      image: "https://elephantrunk.in/cdn/shop/products/bundle11.jpg?v=1706763214"
    }
  ];

  const toggleProductDetails = (id: number) => {
    if (activeProduct === id) {
      setActiveProduct(null);
    } else {
      setActiveProduct(id);
    }
  };

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#148be3]">
            <span className="text-[#D4AF37]">✨</span> Our Products
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We carefully select and deliver premium quality Indian products that meet international standards and represent the rich heritage of India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsList.map((product) => (
            <div 
              key={product.id}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#1A5F7A]">{product.name}</h3>
                <p className={`text-gray-600 ${activeProduct === product.id ? '' : 'line-clamp-2'}`}>
                  {product.description}
                </p>
                <button 
                  onClick={() => toggleProductDetails(product.id)}
                  className="mt-4 text-sm text-[#D4AF37] font-medium hover:underline focus:outline-none"
                >
                  {activeProduct === product.id ? 'Show less' : 'Read more'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
