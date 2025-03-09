import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Section, Card } from '../components/ui';

const teamMembers = [
  {
    name: 'Riya Doshi',
    role: 'Founder & Creative Director',
    bio: 'With over 15 years of experience in fashion design, Priya brings her vision of blending traditional craftsmanship with modern aesthetics.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop'
  },
  {
    name: 'Suraj Thakkar',
    role: 'Head of Design',
    bio: 'A graduate from NIFT with a passion for sustainable fashion and innovative design solutions.',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop'
  },
  {
    name: 'Anita Dongre',
    role: 'Master Artisan',
    bio: 'With decades of experience in traditional embroidery and textile work, Anita leads our skilled artisan team.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop'
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
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <Section variant="light" className="py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">About Dori</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Crafting timeless elegance through traditional artistry and modern design.
            We believe in preserving heritage while embracing contemporary fashion.
          </p>
        </div>
      </Section>

      {/* Our Story */}
      <Section>
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
                src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=800&q=80"
                alt="Behind the scenes at Dori"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
      </Section>

      {/* Ethos & Sustainability */}
      <Section variant="light">
        <Section.Header title="What We Stand For" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-serif mb-3">Craftsmanship</h3>
            <p className="text-gray-600">
              Every piece is crafted with meticulous attention to detail, preserving traditional
              techniques passed down through generations.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-serif mb-3">Sustainability</h3>
            <p className="text-gray-600">
              We use eco-friendly materials and processes, minimizing our environmental impact
              while creating beautiful, lasting pieces.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-serif mb-3">Ethical Sourcing</h3>
            <p className="text-gray-600">
              We ensure fair wages and safe working conditions for all our artisans,
              maintaining transparent supply chains.
            </p>
          </Card>
        </div>
      </Section>

      {/* Meet the Team */}
      <Section>
        <Section.Header title="Our Team" />
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
      </Section>

      {/* Legal Information */}
      <Section variant="light">
        <Section.Header title="Legal Information" />
        <div className="max-w-2xl mx-auto space-y-4">
          {legalSections.map((section, index) => (
            <Card key={index}>
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenLegal(openLegal === index ? null : index)}
              >
                <span className="font-semibold">{section.title}</span>
                {openLegal === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openLegal === index && (
                <div className="px-6 pb-4 animate-fadeIn">
                  <p className="text-gray-600 whitespace-pre-line">{section.content}</p>
                </div>
              )}
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