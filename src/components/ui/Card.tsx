import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({ children, className = '', hoverable = false }: CardProps) {
  return (
    <div 
      className={`
        bg-white rounded-lg shadow-soft overflow-hidden
        ${hoverable ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

Card.Header = function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

Card.Body = function CardBody({ children, className = '' }: CardBodyProps) {
  return (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

Card.Footer = function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`px-6 py-4 bg-secondary-light/50 ${className}`}>
      {children}
    </div>
  );
};

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'wide';
  overlay?: boolean;
}

Card.Image = function CardImage({ 
  src, 
  alt, 
  className = '', 
  aspectRatio = 'video',
  overlay = false 
}: CardImageProps) {
  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[16/9]',
  };
  
  return (
    <div className={`relative ${aspectRatioClasses[aspectRatio]} ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover" 
      />
      {overlay && (
        <div className="absolute inset-0 bg-secondary-overlay flex items-end">
          <div className="w-full p-4 bg-gradient-to-t from-black to-transparent">
            {/* Overlay content can be passed as children */}
          </div>
        </div>
      )}
    </div>
  );
};