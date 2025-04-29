import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import ExportingMadeEasy from './components/ExportingMadeEasy';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Dynamic title for better SEO
    document.title = 'IGNISIATrade LLP - Your Trustful Partner in Global Trade';
    // Schema.org structured data for better search engine understanding
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'IGNISIATrade LLP',
      'description': 'Your Trustful Partner in Global Trade, specializing in Indian exports',
      'url': 'https://ignisiatrade.com',
      'logo': 'https://ignisiatrade.com/logo.png',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Hyderabad',
        'addressRegion': 'Telangana',
        'addressCountry': 'IN'
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'contactType': 'customer service',
        'email': 'info@ignisiatrade.com'
      }
    };

    // Add schema.org structured data
    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.text = JSON.stringify(schema);
    document.head.appendChild(scriptTag);
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function(e) {
          e.preventDefault();
        });
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <Products />
        <WhyChooseUs />
        <ExportingMadeEasy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
