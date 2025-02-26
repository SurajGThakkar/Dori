import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Instagram, Facebook, Twitter, ArrowRight, ShoppingBag, Calendar } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const categories = [
  { title: 'Sarees', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80' },
  { title: 'Lehengas', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80' },
  { title: 'Kurtas', image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80' },
  { title: 'Fusion Wear', image: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=800&q=80' }
];

const testimonials = [
  { name: 'Priya S.', rating: 5, text: 'The attention to detail in my custom lehenga was exceptional. Truly a masterpiece!' },
  { name: 'Meera R.', rating: 5, text: 'Perfect blend of tradition and modern design. The consultation process was so professional.' },
  { name: 'Anjali K.', rating: 5, text: 'Found the perfect matching outfits for my whole family. The quality is outstanding!' }
];

export function Home() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative h-screen">
        <img 
          src="https://images.unsplash.com/photo-1735852134868-c7986018d27d?w=1600&h=900&fit=crop&q=85" 
          alt="Traditional Indian Fashion"
          className="w-full h-full object-cover object-center brightness-90"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center px-4">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">
              Discover Elegance, Tradition, and Custom Creations
            </h2>
            <Link 
              to="/collections" 
              className="inline-block bg-accent-gold hover:bg-primary-dark text-white px-12 py-4 rounded-full transition duration-300 text-lg mt-8"
            >
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} />
                Explore Collections
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-serif text-center mb-8">Shop by Category</h2>
        <div className="container mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 }
            }}
          >
            {categories.map((category, index) => (
              <SwiperSlide key={index}>
                <Link to={`/collections?category=${category.title.toLowerCase()}`}>
                  <div className="relative rounded-lg overflow-hidden aspect-[3/4]">
                    <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-secondary-overlay flex items-end p-4">
                      <h3 className="text-white text-xl font-serif font-medium">{category.title}</h3>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Customization */}
      <section className="py-16 bg-secondary-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-4">Create Your Own Outfit</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Experience the luxury of personalized fashion. Book a consultation with our designers
            to create your dream outfit.
          </p>
          <Link 
            to="/custom" 
            className="inline-block bg-accent-gold hover:bg-primary-dark text-white px-6 py-2 rounded-full transition duration-300"
          >
            <div className="flex items-center gap-2">
              <Calendar size={20} />
              Book a Consultation
            </div>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-8">What Our Clients Say</h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex text-primary mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="mb-4">{testimonial.text}</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-secondary-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-8">Follow Us for More Inspiration</h2>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-primary hover:text-accent-gold transition-all duration-300 transform hover:scale-110"><Instagram size={24} /></a>
            <a href="#" className="text-primary hover:text-accent-gold transition-all duration-300 transform hover:scale-110"><Facebook size={24} /></a>
            <a href="#" className="text-primary hover:text-accent-gold transition-all duration-300 transform hover:scale-110"><Twitter size={24} /></a>
          </div>
        </div>
      </section>
    </div>
  );
}