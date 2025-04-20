import { PackageOpen, TruckIcon, Users, BadgeCheck } from 'lucide-react';

const ExportingMadeEasy = () => {
  const exportServices = [
    {
      id: 1,
      icon: <PackageOpen className="h-8 w-8 text-[#D4AF37]" />,
      title: "Product Sourcing",
      description: "We identify and source the best products that meet your specific requirements and quality standards."
    },
    {
      id: 2,
      icon: <BadgeCheck className="h-8 w-8 text-[#D4AF37]" />,
      title: "Quality Assurance",
      description: "Every product undergoes rigorous quality checks to ensure it meets international standards."
    },
    {
      id: 3,
      icon: <TruckIcon className="h-8 w-8 text-[#D4AF37]" />,
      title: "Global Logistics",
      description: "We handle all shipping, documentation, and customs requirements for smooth international delivery."
    },
    {
      id: 4,
      icon: <Users className="h-8 w-8 text-[#D4AF37]" />,
      title: "Ongoing Support",
      description: "Our team provides continuous support to address any queries or concerns throughout our partnership."
    }
  ];

  return (
    <section id="exporting" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#148be3]">
            <span className="text-[#D4AF37]">📦</span> Exporting Made Easy
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Whether you're a small business or a large distributor, we provide complete export solutions 
            tailored to your needs — from sourcing to doorstep delivery, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {exportServices.map((service) => (
            <div 
              key={service.id} 
              className="bg-gray-50 p-6 rounded-lg text-center transition-all duration-300 hover:shadow-lg hover:bg-gray-100"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-[#1A5F7A]">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-[#1A5F7A] text-white px-8 py-3 rounded-full hover:bg-[#14475A] transition-colors duration-300"
          >
            Start Your Export Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExportingMadeEasy;
