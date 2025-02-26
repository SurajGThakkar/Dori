import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Upload, ChevronDown, ChevronUp } from 'lucide-react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const customCreations = [
  {
    id: 1,
    title: 'Custom Bridal Lehenga',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80'
  },
  {
    id: 2,
    title: 'Personalized Saree',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80'
  },
  {
    id: 3,
    title: 'Custom Fusion Wear',
    image: 'https://images.unsplash.com/photo-1583391733956-6c77a55f56c9?w=800&q=80'
  }
];

const testimonials = [
  {
    name: 'Riya M.',
    text: 'The customization process was seamless. My wedding lehenga was exactly how I envisioned it!',
    rating: 5
  },
  {
    name: 'Sneha P.',
    text: 'Incredible attention to detail. The team understood my requirements perfectly.',
    rating: 5
  },
  {
    name: 'Aisha K.',
    text: 'The consultation was thorough and professional. My outfit exceeded expectations!',
    rating: 5
  }
];

const faqs = [
  {
    question: 'How long does the customization process take?',
    answer: 'The typical timeline is 4-6 weeks from consultation to delivery, depending on the complexity of the design and current order volume.'
  },
  {
    question: 'What happens during the consultation call?',
    answer: 'During the call, we discuss your style preferences, occasion, budget, measurements, and any specific design elements you want. We also address any questions you may have about the process.'
  },
  {
    question: 'Can I make changes after the design is approved?',
    answer: 'Minor adjustments can be made during the initial stages of production. Significant changes may affect the timeline and cost.'
  },
  {
    question: 'How do you ensure the perfect fit?',
    answer: 'We provide detailed measurement guidelines and work closely with you to ensure accuracy. Virtual fitting sessions are also available if needed.'
  }
];

export function Custom() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFiles(event.target.files);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      <section className="py-12 bg-secondary-light">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Create Your Own Outfit</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the luxury of personalized fashion. Our expert designers will bring your vision to life
            with meticulous attention to detail and craftsmanship.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-accent-gold text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={32} />
              </div>
              <h3 className="text-xl font-serif mb-2">Consultation Call</h3>
              <p className="text-gray-600">
                Discuss your preferences, fabrics, and measurements with our expert designers.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-accent-gold text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={32} />
              </div>
              <h3 className="text-xl font-serif mb-2">Design Approval</h3>
              <p className="text-gray-600">
                Receive sketches and design references based on our discussion.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-accent-gold text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle size={32} />
              </div>
              <h3 className="text-xl font-serif mb-2">Production & Delivery</h3>
              <p className="text-gray-600">
                Your custom outfit is crafted with care and delivered to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-8">Ready to Start Your Custom Journey?</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 max-w-2xl mx-auto">
            <a href="tel:+1234567890" className="bg-white text-primary px-10 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Call Now
            </a>
            <a href="https://wa.me/1234567890" className="bg-white text-primary px-10 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              WhatsApp
            </a>
            <a href="mailto:contact@dori.com" className="bg-white text-primary px-10 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Upload Inspiration */}
      <section className="py-16 bg-secondary-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-4">Have an Inspiration?</h2>
          <p className="mb-8 text-gray-600 max-w-2xl mx-auto">
            Upload images for reference before your consultation. Our designers will use these
            to better understand your vision.
          </p>
          <label className="inline-block">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <div className="bg-white px-8 py-3 rounded-full cursor-pointer hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
              <Upload size={20} />
              Upload Reference Images
            </div>
          </label>
          {selectedFiles && (
            <div className="mt-4 text-left">
              <p className="text-sm text-gray-600">Selected files:</p>
              {Array.from(selectedFiles).map((file, index) => (
                <p key={index} className="text-sm">{file.name}</p>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Previous Custom Creations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-8">See Our Past Custom Designs</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {customCreations.map((creation) => (
              <SwiperSlide key={creation.id}>
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  <img
                    src={creation.image}
                    alt={creation.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-secondary-overlay flex items-end">
                    <div className="w-full p-4 bg-gradient-to-t from-black to-transparent">
                      <h3 className="text-white text-xl font-serif font-medium">{creation.title}</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-8">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex text-primary mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="mb-4">{testimonial.text}</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}