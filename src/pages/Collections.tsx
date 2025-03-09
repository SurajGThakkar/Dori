import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';

const categories = ['All', 'Sarees', 'Lehengas', 'Kurtas', 'Fusion Wear', 'Wedding & Festive Wear'];

const products = [
  {
    id: 1,
    title: 'Embroidered Silk Saree',
    category: 'Sarees',
    image: '/images/products/saree1.webp',
    description: 'Handcrafted silk saree with intricate embroidery work, perfect for special occasions.'
  },
  {
    id: 2,
    title: 'Bridal Lehenga',
    category: 'Lehengas',
    image: '/images/products/lehenga1.webp',
    description: 'Stunning bridal lehenga with detailed zari work and contemporary design elements.'
  },
  {
    id: 3,
    title: 'Designer Kurta Set',
    category: 'Kurtas',
    image: '/images/products/kurta1.webp',
    description: 'Modern kurta set with traditional embellishments, suitable for festive occasions.'
  },
  {
    id: 4,
    title: 'Contemporary Fusion Dress',
    category: 'Fusion Wear',
    image: '/images/products/fusion1.webp',
    description: 'Indo-western fusion dress combining traditional elements with modern silhouettes.'
  },
  {
    id: 5,
    title: 'Bridal Fusion Ensemble',
    category: 'Wedding & Festive Wear',
    image: '/images/products/wedding1.webp',
    description: 'Elegant bridal ensemble with contemporary design elements perfect for modern brides.'
  }// Add more products as needed
];

export function Collections() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSearchParams(category === 'All' ? {} : { category: category.toLowerCase() });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <section className="py-12 bg-secondary-light">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Explore Our Collections</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of traditional and contemporary designs,
            each piece crafted with attention to detail and timeless elegance.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="sticky top-24 bg-white z-40 shadow-sm">
        <div className="container mx-auto px-6 py-4 overflow-x-auto">
          <div className="flex space-x-4 min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="cursor-pointer group"
              >
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="w-full p-4 bg-gradient-to-t from-black to-transparent">
                      <h3 className="text-white text-sm md:text-base font-serif">{product.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full aspect-[3/4] object-cover rounded-t-lg"
              />
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-serif mb-2">{selectedProduct.title}</h2>
              <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
              <p className="text-sm text-primary mb-4">Available for Custom Orders via Call</p>
              <button className="w-full bg-primary text-white py-3 rounded-full hover:bg-primary-dark transition-colors">
                Request Customization
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}