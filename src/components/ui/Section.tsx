import React from 'react';
import { Container } from './Container';

type SectionVariant = 'default' | 'light' | 'dark';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: SectionVariant;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  withContainer?: boolean;
  id?: string;
}

export function Section({
  children,
  className = '',
  variant = 'default',
  containerSize = 'lg',
  withContainer = true,
  id,
}: SectionProps) {
  const variantClasses = {
    default: 'bg-white',
    light: 'bg-secondary-light',
    dark: 'bg-primary text-white',
  };

  const content = withContainer ? (
    <Container size={containerSize}>
      {children}
    </Container>
  ) : children;

  return (
    <section
      id={id}
      className={`py-16 ${variantClasses[variant]} ${className}`}
    >
      {content}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

Section.Header = function SectionHeader({
  title,
  description,
  centered = true,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`mb-8 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl font-serif mb-4">{title}</h2>
      {description && (
        <p className={`text-gray-600 ${centered ? 'max-w-2xl mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
};