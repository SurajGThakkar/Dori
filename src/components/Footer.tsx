import React from 'react';
import { Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-playfair mb-6 text-primary-light">Quick Links</h3>
            <ul className="space-y-4 font-poppins">
              <li>
                <Link 
                  to="/" 
                  className="text-primary-light hover:text-accent-gold transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-primary-light hover:text-accent-gold transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/custom" 
                  className="text-primary-light hover:text-accent-gold transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Customization
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-primary-light hover:text-accent-gold transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-playfair mb-6 text-primary-light">Contact Us</h3>
            <div className="space-y-4 font-poppins">
              <p className="flex items-center text-primary-light hover:text-accent-gold transition-all duration-300 cursor-pointer">
                <Phone size={16} className="mr-3" /> +91 8369464126
              </p>
              <p className="flex items-center text-primary-light hover:text-accent-gold transition-all duration-300 cursor-pointer">
                <Mail size={16} className="mr-3" /> contact@dori.com
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-playfair mb-6 text-primary-light">Newsletter</h3>
            <div className="flex font-poppins">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-l-full bg-secondary text-primary-light w-full focus:outline-none focus:ring-2 focus:ring-accent-gold transition-all duration-300 placeholder:text-primary-light/60"
              />
              <button 
                className="bg-accent-gold hover:bg-accent-rose text-white px-8 rounded-r-full transition-all duration-500 transform hover:scale-105 focus:ring-2 focus:ring-accent-gold focus:ring-offset-2"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-12 border-t border-primary-light/20 text-center">
          <div className="flex justify-center space-x-8 mb-6">
            <a 
              href="#" 
              className="text-primary-light hover:text-accent-gold transition-all duration-300 transform hover:scale-110"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="#" 
              className="text-primary-light hover:text-accent-gold transition-all duration-300 transform hover:scale-110"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="#" 
              className="text-primary-light hover:text-accent-gold transition-all duration-300 transform hover:scale-110"
            >
              <Twitter size={24} />
            </a>
          </div>
          <p className="font-poppins text-sm text-primary-light">© 2025 Dori Fashion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}