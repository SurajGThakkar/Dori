import React, { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

/**
 * PageLayout component that provides consistent padding and spacing for all pages
 * This ensures the header doesn't overlap with the content
 */
export function PageLayout({ children, className = '' }: PageLayoutProps) {
  return (
    <div className={`min-h-screen bg-white pt-24 ${className}`}>
      {/* No need for extra spacing div since we're using pt-24 */}
      {children}
    </div>
  );
}