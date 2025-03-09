import React from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
}

interface LinkButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
  to: string;
  className?: string;
}

interface ExternalLinkButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
  href: string;
  className?: string;
  target?: string;
  rel?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'rounded-full font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-gradient-gold hover:bg-accent-rose text-white focus:ring-accent-gold shadow-gold',
    secondary: 'bg-gradient-primary hover:bg-primary-dark text-white focus:ring-primary shadow-sm',
    outline: 'bg-transparent border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-white focus:ring-accent-gold',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2',
    lg: 'px-12 py-3 text-lg',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  to,
  className = '',
}: LinkButtonProps) {
  const baseClasses = 'rounded-full font-medium transition-all duration-300 transform hover:scale-105 inline-block text-center';
  
  const variantClasses = {
    primary: 'bg-gradient-gold hover:bg-accent-rose text-white',
    secondary: 'bg-gradient-primary hover:bg-primary-dark text-white',
    outline: 'bg-transparent border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-white',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2',
    lg: 'px-8 py-3 text-lg',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <Link
      to={to}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
    >
      {children}
    </Link>
  );
}

export function ExternalLinkButton({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  href,
  className = '',
  target = '_blank',
  rel = 'noopener noreferrer',
}: ExternalLinkButtonProps) {
  const baseClasses = 'rounded-full font-medium transition-all duration-300 transform hover:scale-105 inline-block text-center';
  
  const variantClasses = {
    primary: 'bg-gradient-gold hover:bg-accent-rose text-white shadow-gold',
    secondary: 'bg-gradient-primary hover:bg-primary-dark text-white shadow-sm',
    outline: 'bg-transparent border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-white',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2',
    lg: 'px-12 py-3 text-lg',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
    >
      {children}
    </a>
  );
}