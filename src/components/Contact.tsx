import { Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('Name', formData.name);
      formDataToSend.append('Email', formData.email);
      formDataToSend.append('Message', formData.message);

      const response = await fetch('https://script.google.com/macros/s/AKfycbyBEy17VJK42ddKsYtZ9sLkAuXM8eW2QdOPqvxD4lGO-6IkUmhruQRf7YY2vEUSO7xMDg/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSend
      });

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2992e7]">
            <span className="text-[#D4AF37]">📞</span> Get in Touch
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Partner with us and grow your business globally. We're ready to
            discuss how our products can add value to your business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-[#2992e7] text-white p-8">
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>
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
                  We respond to all inquiries within 24 hours during business
                  days. Feel free to reach out with any questions about our
                  products or services.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <h3 className="text-2xl font-semibold text-[#2992e7] mb-4">Thank You!</h3>
                  <p className="text-gray-600 mb-6">Your message has been received. We'll get back to you shortly.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[#D4AF37] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold mb-6 text-[#1A5F7A]">
                    Send us a message
                  </h3>
                  <form onSubmit={handleSubmit} name="submit-to-google-sheet">
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2992e7] focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2992e7] focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2992e7] focus:border-transparent"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    {error && (
                      <p className="text-red-500 text-sm mb-4">{error}</p>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-[#D4AF37] text-white py-2 px-4 rounded-md hover:bg-[#C09B20] transition-colors duration-300 ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
