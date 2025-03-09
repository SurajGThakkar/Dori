import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Show CTA when scrolling up or near the top of the page
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const getCtaLink = () => {
    switch (location.pathname) {
      case '/custom':
        return '/contact';
      case '/contact':
        return 'https://wa.me/918369464126';
      case '/collections':
        return '/custom';
      default:
        return '/custom';
    }
  };

  const getCtaText = () => {
    switch (location.pathname) {
      case '/custom':
        return 'Book Consultation';
      case '/contact':
        return 'Chat Now';
      case '/collections':
        return 'Customize Now';
      default:
        return 'Get Started';
    }
  };

  const ctaLink = getCtaLink();
  const isExternalLink = ctaLink.startsWith('http');
  const commonClassNames = `
    fixed bottom-6 left-1/2 -translate-x-1/2 z-40
    md:bottom-8 md:left-auto md:right-8 md:translate-x-0
    bg-gradient-gold hover:bg-accent-rose text-white
    px-4 sm:px-6 md:px-12 py-3 rounded-full shadow-gold
    transition-all duration-500 transform
    hover:scale-105 hover:shadow-xl
    backdrop-blur-sm bg-opacity-90 font-medium
    focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2
    whitespace-nowrap overflow-hidden text-ellipsis max-w-[90vw] md:max-w-none
    text-sm sm:text-base md:text-base
    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'}
  `;

  return isExternalLink ? (
    <a
      href={ctaLink}
      target="_blank"
      rel="noopener noreferrer"
      className={commonClassNames}
      aria-label={getCtaText()}
    >
      {getCtaText()}
    </a>
  ) : (
    <Link
      to={ctaLink}
      className={commonClassNames}
      aria-label={getCtaText()}
    >
      {getCtaText()}
    </Link>
  );
}