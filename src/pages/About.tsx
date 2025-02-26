import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const teamMembers = [
  {
    name: 'Riya Doshi',
    role: 'Founder & Creative Director',
    bio: 'With over 15 years of experience in fashion design, Priya brings her vision of blending traditional craftsmanship with modern aesthetics.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop'
  },
  {
    name: 'Suraj Thakkar',
    role: 'Head of Design',
    bio: 'A graduate from NIFT with a passion for sustainable fashion and innovative design solutions.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop'
  },
  {
    name: 'Anita Dongre',
    role: 'Master Artisan',
    bio: 'With decades of experience in traditional embroidery and textile work, Anita leads our skilled artisan team.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop'
  }
];

const faqs = [
  {
    question: 'What makes Dori different from other fashion brands?',
    answer: 'We combine traditional craftsmanship with modern design, offering personalized service and sustainable fashion solutions.'
  },
  {
    question: 'How do you ensure ethical manufacturing?',
    answer: 'We work directly with artisans, ensure fair wages, and maintain transparent supply chains while using sustainable materials.'
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for unused items in original condition. Custom orders are final sale.'
  }
];

const legalSections = [
  {
    title: 'Privacy Policy',
    content: `At Dori, we take your privacy seriously. We collect and process your personal data only for specific purposes:

• To process your orders and provide customer service
• To send you updates about your orders and our services
• To improve our products and services

We never share your personal information with third parties without your consent.`
  },
  {
    title: 'Terms & Conditions',
    content: `By using our services, you agree to:

• Provide accurate information when placing orders
• Use our platform for lawful purposes only
• Respect intellectual property rights
• Accept our pricing and payment terms

We reserve the right to modify these terms at any time.`
  },
  {
    title: 'Accessibility',
    content: 'We are committed to making our website accessible to everyone. Our platform follows WCAG 2.1 guidelines and we continuously work to improve our accessibility features.'
  },
  {
    title: 'GDPR Compliance',
    content: 'For our European customers, we comply with GDPR regulations. You have the right to access, modify, or delete your personal data. Contact us for any data-related requests.'
  }
];

export function About() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openLegal, setOpenLegal] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-12 bg-secondary-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">About Dori</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Crafting timeless elegance through traditional artistry and modern design.
            We believe in preserving heritage while embracing contemporary fashion.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-serif mb-4">Our Journey</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020, Dori emerged from a passion for preserving India's rich textile heritage
                while making it relevant for the modern world. Our journey began in the bustling streets
                of Mumbai, where traditional craftsmanship meets contemporary fashion.
              </p>
              <p className="text-gray-600">
                Today, we work with over 100 skilled artisans across India, bringing their exceptional
                craftsmanship to a global audience while ensuring fair trade practices and sustainable
                production methods.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80"
                alt="Behind the scenes at Dori"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ethos & Sustainability */}
      <section className="py-16 bg-secondary-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-8">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-serif mb-3">Craftsmanship</h3>
              <p className="text-gray-600">
                Every piece is crafted with meticulous attention to detail, preserving traditional
                techniques passed down through generations.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-serif mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We use eco-friendly materials and processes, minimizing our environmental impact
                while creating beautiful, lasting pieces.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-serif mb-3">Ethical Sourcing</h3>
              <p className="text-gray-600">
                We ensure fair wages and safe working conditions for all our artisans,
                maintaining transparent supply chains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif mb-2">{member.name}</h3>
                <p className="text-accent-gold mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="py-16 bg-secondary-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-8">Legal Information</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {legalSections.map((section, index) => (
              <div key={index} className="border rounded-lg bg-white">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setOpenLegal(openLegal === index ? null : index)}
                >
                  <span className="font-semibold">{section.title}</span>
                  {openLegal === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openLegal === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 whitespace-pre-line">{section.content}</p>
                  </div>
                )}
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