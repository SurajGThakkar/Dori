import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const showBackButton = location.pathname !== '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

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
              className="text-primary-dark hover:text-accent-gold transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-opacity-50 rounded-full p-1"
              aria-label="Go back"
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

        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 font-poppins">
            <Link 
              to="/" 
              className={`text-primary-dark hover:text-accent-gold transition-all duration-300 ${location.pathname === '/' ? 'text-accent-gold font-medium' : ''}`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Home
            </Link>
            <Link 
              to="/collections" 
              className={`text-primary-dark hover:text-accent-gold transition-all duration-300 ${location.pathname === '/collections' ? 'text-accent-gold font-medium' : ''}`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Collections
            </Link>
            <Link 
              to="/custom" 
              className={`text-primary-dark hover:text-accent-gold transition-all duration-300 ${location.pathname === '/custom' ? 'text-accent-gold font-medium' : ''}`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Customization
            </Link>
            <Link 
              to="/about" 
              className={`text-primary-dark hover:text-accent-gold transition-all duration-300 ${location.pathname === '/about' ? 'text-accent-gold font-medium' : ''}`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={`text-primary-dark hover:text-accent-gold transition-all duration-300 ${location.pathname === '/contact' ? 'text-accent-gold font-medium' : ''}`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Contact
            </Link>
          </div>
          
          <Link
            to={location.pathname === '/custom' ? '/contact' : '/custom'}
            className="hidden md:block bg-accent-gold hover:bg-accent-rose text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-opacity-50"
          >
            {getCtaText()}
          </Link>
          <button 
            ref={buttonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-primary-dark hover:text-accent-gold transition-all duration-300 transform hover:rotate-180 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-opacity-50 rounded-full p-1 md:hidden"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu - Only visible on small screens */}
      {isMenuOpen && (
        <div 
          ref={menuRef}
          className="absolute top-full left-0 right-0 backdrop-blur-lg bg-white/90 shadow-lg animate-fadeIn md:hidden"
        >
          <ul className="container mx-auto px-4 py-6 space-y-4 font-poppins text-right">
            <li>
              <Link 
                to="/" 
                className={`block text-base text-primary-dark hover:text-accent-gold transition-all duration-300 hover:translate-x-2 focus:outline-none focus:text-accent-gold ${location.pathname === '/' ? 'text-accent-gold font-medium' : ''}`}
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/collections" 
                className={`block text-base text-primary-dark hover:text-accent-gold transition-all duration-300 hover:translate-x-2 focus:outline-none focus:text-accent-gold ${location.pathname === '/collections' ? 'text-accent-gold font-medium' : ''}`}
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Collections
              </Link>
            </li>
            <li>
              <Link 
                to="/custom" 
                className={`block text-base text-primary-dark hover:text-accent-gold transition-all duration-300 hover:translate-x-2 focus:outline-none focus:text-accent-gold ${location.pathname === '/custom' ? 'text-accent-gold font-medium' : ''}`}
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Customization
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`block text-base text-primary-dark hover:text-accent-gold transition-all duration-300 hover:translate-x-2 focus:outline-none focus:text-accent-gold ${location.pathname === '/about' ? 'text-accent-gold font-medium' : ''}`}
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`block text-base text-primary-dark hover:text-accent-gold transition-all duration-300 hover:translate-x-2 focus:outline-none focus:text-accent-gold ${location.pathname === '/contact' ? 'text-accent-gold font-medium' : ''}`}
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}