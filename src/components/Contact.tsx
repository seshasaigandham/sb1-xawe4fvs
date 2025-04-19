import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E5631]">
            <span className="text-[#D4AF37]">📞</span> Get in Touch
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Partner with us and grow your business globally. We're ready to discuss how our products 
            can add value to your business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-[#1E5631] text-white p-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="flex items-start mb-6">
                <Mail className="h-6 w-6 mr-4 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:info@ignisiatrade.com" 
                    className="hover:underline transition-colors duration-300"
                  >
                    info@ignisiatrade.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-4 mt-1" />
                <div>
                  <p className="font-medium">Location</p>
                  <p>Hyderabad, India</p>
                </div>
              </div>
              <div className="mt-12">
                <p className="text-sm opacity-80">
                  We respond to all inquiries within 24 hours during business days. 
                  Feel free to reach out with any questions about our products or services.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <h3 className="text-xl font-semibold mb-6 text-[#1A5F7A]">Send us a message</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5631] focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5631] focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5631] focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#D4AF37] text-white py-2 px-4 rounded-md hover:bg-[#C09B20] transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;