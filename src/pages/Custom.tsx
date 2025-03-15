import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Upload, ChevronDown, ChevronUp } from 'lucide-react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Section, Card, Button, ExternalLinkButton } from '../components/ui';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const customCreations = [
  {
    id: 1,
    title: 'Custom Bridal Lehenga',
    image: '/images/products/lehenga1.webp'
  },
  {
    id: 2,
    title: 'Personalized Saree',
    image: '/images/products/saree1.webp'
  },
  {
    id: 3,
    title: 'Custom Fusion Wear',
    image: '/images/products/fusion1.webp'
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
    <div className="min-h-screen bg-white pt-24">
      <Section variant="light" className="py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Create Your Own Outfit</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the luxury of personalized fashion. Our expert designers will bring your vision to life
            with meticulous attention to detail and craftsmanship.
          </p>
        </div>
      </Section>

      {/* Process Steps */}
      <Section>
        <Section.Header 
          title="Our Process" 
          description="How we bring your vision to life in three simple steps"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card hoverable className="text-center p-6">
            <div className="w-16 h-16 bg-accent-gold text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone size={32} />
            </div>
            <h3 className="text-xl font-serif mb-2">Consultation Call</h3>
            <p className="text-gray-600">
              Discuss your preferences, fabrics, and measurements with our expert designers.
            </p>
          </Card>
          <Card hoverable className="text-center p-6">
            <div className="w-16 h-16 bg-accent-gold text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail size={32} />
            </div>
            <h3 className="text-xl font-serif mb-2">Design Approval</h3>
            <p className="text-gray-600">
              Receive sketches and design references based on our discussion.
            </p>
          </Card>
          <Card hoverable className="text-center p-6">
            <div className="w-16 h-16 bg-accent-gold text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle size={32} />
            </div>
            <h3 className="text-xl font-serif mb-2">Production & Delivery</h3>
            <p className="text-gray-600">
              Your custom outfit is crafted with care and delivered to your doorstep.
            </p>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="dark">
        <div className="text-center">
          <h2 className="text-3xl font-serif mb-8">Ready to Start Your Custom Journey?</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 max-w-2xl mx-auto">
            <ExternalLinkButton href="tel:+918369464126" variant="outline" size="lg">
              Call Now
            </ExternalLinkButton>
            <ExternalLinkButton href="https://wa.me/8369464126?text=Dear%20Dori%20Design%20Team%2C%0A%0AI'm%20interested%20in%20scheduling%20a%20consultation%20for%20a%20custom%20outfit.%20I%20would%20appreciate%20your%20guidance%20on%20the%20customization%20process%20and%20would%20like%20to%20discuss%20my%20requirements%20in%20detail.%0A%0ALooking%20forward%20to%20your%20response.%0A%0AThank%20you%2C%0AA%20Potential%20Customer" variant="outline" size="lg">
              WhatsApp
            </ExternalLinkButton>
            <ExternalLinkButton href="mailto:contact@dori.com" variant="outline" size="lg">
              Email Us
            </ExternalLinkButton>
          </div>
        </div>
      </Section>

      {/* Upload Inspiration */}
      <Section variant="light">
        <div className="text-center">
          <Section.Header 
            title="Have an Inspiration?" 
            description="Upload images for reference before your consultation. Our designers will use these to better understand your vision."
          />
          <label className="inline-block">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <div className="cursor-pointer inline-flex items-center gap-2">
              <Button variant="secondary">
              <Upload size={20} />
              Upload Reference Images
            </Button>
          </label>
          {selectedFiles && (
            <Card className="mt-6 max-w-md mx-auto animate-fadeIn">
              <Card.Body>
                <p className="text-sm font-medium mb-2">Selected files:</p>
                <div className="space-y-1 max-h-40 overflow-y-auto"> {/* Added max height and scroll */}
                  {Array.from(selectedFiles).map((file, index) => (
                    <p key={index} className="text-sm text-gray-600">{file.name}</p>
                  ))}
                </div>
              </Card.Body>
            </Card>
          )}
        </div>
      </Section>

      {/* Previous Custom Creations */}
      <Section>
        <Section.Header title="See Our Past Custom Designs" />
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
              <Card>
                <Card.Image 
                  src={creation.image}
                  alt={creation.title}
                  aspectRatio="portrait"
                  overlay
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-white text-xl font-serif font-medium">{creation.title}</h3>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>

      {/* Testimonials */}
      <Section variant="light">
        <Section.Header title="Client Testimonials" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} hoverable className="p-6">
              <div className="flex text-accent-gold mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="mb-4 text-gray-600">{testimonial.text}</p>
              <p className="font-semibold">{testimonial.name}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQs */}
      <Section>
        <Section.Header title="Frequently Asked Questions" />
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="hover:border-accent-gold transition-colors duration-300 shadow-sm hover:shadow-md">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-opacity-50 rounded-lg"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold">{faq.question}</span>
                <span className="text-accent-gold transition-transform duration-300 transform">
                  {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              {openFaq === index && (
                <div 
                  id={`faq-answer-${index}`}
                  className="px-6 pb-4 animate-fadeIn"
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}