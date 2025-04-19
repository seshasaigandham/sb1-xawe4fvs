import { Check } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      id: 1,
      title: "Government-registered LLP",
      description: "We are a legal entity recognized by the Indian government, ensuring reliable and legitimate business operations."
    },
    {
      id: 2,
      title: "Ethical sourcing & quality assurance",
      description: "We maintain strict quality control processes and ethically source all our products from verified suppliers."
    },
    {
      id: 3,
      title: "Custom packaging & global shipping support",
      description: "We offer tailored packaging solutions and comprehensive global logistics assistance for seamless delivery."
    },
    {
      id: 4,
      title: "Strong supply chain network across India",
      description: "Our extensive network of suppliers and partners across India ensures consistent availability and quality."
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E5631]">
            <span className="text-[#D4AF37]">🌱</span> Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We stand apart in the global trading landscape through our commitment to quality, 
            reliability, and sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className="bg-white p-6 rounded-lg shadow-md flex transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex-shrink-0 mr-4">
                <div className="h-10 w-10 rounded-full bg-[#1E5631] flex items-center justify-center">
                  <Check className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-[#1A5F7A]">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;