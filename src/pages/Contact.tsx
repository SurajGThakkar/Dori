import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How long does it take to get a response?',
    answer: 'We typically respond to all inquiries within 24 hours during business hours.'
  },
  {
    question: 'Do you offer virtual consultations?',
    answer: 'Yes, we offer both virtual and in-person consultations to accommodate your preferences.'
  },
  {
    question: 'What should I prepare for the consultation?',
    answer: 'Having reference images of designs you like and a general idea of your requirements and budget will help make the consultation more productive.'
  },
  {
    question: 'Can I modify my booking time?',
    answer: 'Yes, you can modify your booking up to 24 hours before the scheduled time. Please contact us directly for any last-minute changes.'
  }
];

const businessHours = [
  { day: 'Monday - Friday', hours: '10:00 AM - 7:00 PM' },
  { day: 'Saturday', hours: '11:00 AM - 6:00 PM' },
  { day: 'Sunday', hours: 'Closed' }
];

export function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-12 bg-secondary-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Get in Touch with Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to help bring your vision to life. Book a consultation or reach out to us directly
            for any questions about our custom design services.
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-4">Book a Consultation</h2>
          <p className="mb-8 text-gray-600 max-w-2xl mx-auto">
            Choose between virtual or in-person consultations. Our expert designers will guide you through
            the customization process and help create your perfect outfit.
          </p>
          <a
            href="https://wa.me/918369464126"
            className="inline-block bg-accent-gold hover:bg-primary-dark text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
          >
            <MessageCircle size={18} />
            Schedule Now
          </a>
        </div>
      </section>

      {/* Direct Contact Options */}
      <section className="py-16 bg-secondary-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-8">Contact Us Directly</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a
              href="https://wa.me/918369464126"
              className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <MessageCircle size={32} className="text-accent-gold mb-4" />
              <h3 className="font-serif text-xl mb-2">WhatsApp</h3>
              <p className="text-gray-600 text-center">Chat with us instantly</p>
            </a>
            <a
              href="tel:+918369464126"
              className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Phone size={32} className="text-accent-gold mb-4" />
              <h3 className="font-serif text-xl mb-2">Call Us</h3>
              <p className="text-gray-600 text-center">+91 836 946 4126</p>
            </a>
            <a
              href="mailto:contact@dori.com"
              className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Mail size={32} className="text-accent-gold mb-4" />
              <h3 className="font-serif text-xl mb-2">Email</h3>
              <p className="text-gray-600 text-center">contact@dori.com</p>
            </a>
          </div>
        </div>
      </section>

      {/* Location & Availability */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-8">Visit Our Studio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Clock size={24} className="text-accent-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-xl mb-4">Business Hours</h3>
                  <div className="space-y-4">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between gap-16">
                        <span className="text-gray-600">{schedule.day}</span>
                        <span className="font-medium">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <MapPin size={24} className="text-accent-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg mb-2">Our Location</h3>
                  <p className="text-gray-600">
                    123 Fashion Street, Design District<br />
                    Mumbai, Maharashtra 400080
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[300px] md:h-full min-h-[300px] bg-gray-100 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.803752859952!2d72.8270503!3d19.0392201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce7e8c6a3f45%3A0x3c3c3c3c3c3c3c3c!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1625136423015!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-secondary-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg bg-white">
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