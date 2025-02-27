import React, { useState } from 'react';
import { Phone, Mail, Instagram, Facebook, Twitter, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<null | 'success' | 'error'>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setSubscriptionStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubscriptionStatus('success');
      setEmail('');
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubscriptionStatus(null);
      }, 3000);
    }, 1500);
  };

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
              <a href="tel:+918369464126" className="flex items-center text-primary-light hover:text-accent-gold transition-all duration-300">
                <Phone size={16} className="mr-3" /> +91 8369464126
              </a>
              <a href="mailto:contact@dori.com" className="flex items-center text-primary-light hover:text-accent-gold transition-all duration-300">
                <Mail size={16} className="mr-3" /> contact@dori.com
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-playfair mb-6 text-primary-light">Newsletter</h3>
            <form onSubmit={handleSubscribe} className="font-poppins">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={`px-6 py-3 rounded-l-full bg-secondary text-primary-light w-full focus:outline-none focus:ring-2 transition-all duration-300 placeholder:text-primary-light/60 ${subscriptionStatus === 'error' ? 'focus:ring-red-400 border-red-400' : 'focus:ring-accent-gold'}`}
                  disabled={isSubmitting}
                />
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-accent-gold hover:bg-accent-rose text-white px-8 rounded-r-full transition-all duration-500 transform hover:scale-105 focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]"
                >
                  {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : 'Subscribe'}
                </button>
              </div>
              {subscriptionStatus === 'success' && (
                <p className="mt-2 text-sm text-green-300 animate-fadeIn">Thank you for subscribing!</p>
              )}
              {subscriptionStatus === 'error' && (
                <p className="mt-2 text-sm text-red-300 animate-fadeIn">Please enter a valid email address.</p>
              )}
            </form>
          </div>
        </div>
        <div className="mt-12 pt-12 border-t border-primary-light/20 text-center">
          <div className="flex justify-center space-x-8 mb-6">
            <a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light hover:text-accent-gold transition-all duration-300 transform hover:scale-110"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light hover:text-accent-gold transition-all duration-300 transform hover:scale-110"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank"
              rel="noopener noreferrer"
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