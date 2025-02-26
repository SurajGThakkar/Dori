import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft, Home, ShoppingBag, Palette, Info, Phone, ArrowRight } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const showBackButton = location.pathname !== '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackClick = () => {
    setIsMenuOpen(false);
    navigate(-1);
  };

  const getCtaText = () => {
    switch (location.pathname) {
      case '/custom':
        return 'Customize Now';
      case '/contact':
        return 'Book Now';
      case '/collections':
        return 'Shop Now';
      default:
        return 'Get Started';
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 shadow-sm transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          {showBackButton && (
            <button 
              onClick={handleBackClick} 
              className="text-primary-dark hover:text-accent-gold transition-all duration-300 transform hover:scale-110"
            >
              <ArrowLeft size={20} />
            </button>
          )}
          <Link 
            to="/" 
            className="text-xl font-playfair font-bold text-primary-dark hover:text-accent-gold transition-all duration-300 transform hover:scale-105"
          >
            Dori
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to={location.pathname === '/custom' ? '/contact' : '/custom'}
            className="hidden md:block bg-accent-gold hover:bg-accent-rose text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <div className="flex items-center gap-2">
              {getCtaText()}
              <ArrowRight size={18} />
            </div>
          </Link>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-primary-dark hover:text-accent-gold transition-all duration-300 transform hover:rotate-180"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 backdrop-blur-lg bg-white/90 shadow-lg">
          <ul className="container mx-auto px-4 py-6 space-y-4 font-poppins">
            <li>
              <Link 
                to="/" 
                className="block text-base text-primary-dark hover:text-accent-rose transition-all duration-300 hover:translate-x-2"
              >
                <div className="flex items-center gap-2">
                  <Home size={18} />
                  Home
                </div>
              </Link>
            </li>
            <li>
              <Link 
                to="/collections" 
                className="block text-base text-primary-dark hover:text-accent-rose transition-all duration-300 hover:translate-x-2"
              >
                <div className="flex items-center gap-2">
                  <ShoppingBag size={18} />
                  Collections
                </div>
              </Link>
            </li>
            <li>
              <Link 
                to="/custom" 
                className="block text-base text-primary-dark hover:text-accent-rose transition-all duration-300 hover:translate-x-2"
              >
                <div className="flex items-center gap-2">
                  <Palette size={18} />
                  Customization
                </div>
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="block text-base text-primary-dark hover:text-accent-rose transition-all duration-300 hover:translate-x-2"
              >
                <div className="flex items-center gap-2">
                  <Info size={18} />
                  About Us
                </div>
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="block text-base text-primary-dark hover:text-accent-rose transition-all duration-300 hover:translate-x-2"
              >
                <div className="flex items-center gap-2">
                  <Phone size={18} />
                  Contact
                </div>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}