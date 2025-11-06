'use client';
/* eslint-disable @next/next/no-img-element */

import { useMemo, useState } from 'react';
import PageHero from '@/components/PageHero';

const categories = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    faqs: [
      {
        question: 'What is Trotter?',
        answer:
          'Trotter is an eSIM marketplace that provides instant mobile data plans for travelers in over 200 countries worldwide. We make it easy to stay connected without expensive roaming fees or the hassle of buying local SIM cards.',
      },
      {
        question: 'How does Trotter work?',
        answer: '1. Download the Trotter app\n2. Browse plans for your destination\n3. Purchase and install your eSIM\n4. Your eSIM activates automatically when you arrive',
      },
      {
        question: 'Which devices are supported?',
        answer: 'Most recent devices from Apple, Samsung, Google, and Huawei support eSIM. Use our compatibility checker to confirm your device.',
      },
    ],
  },
  {
    id: 'esim',
    title: 'About eSIM',
    faqs: [
      {
        question: 'What is an eSIM?',
        answer:
          "An eSIM (embedded SIM) is a digital SIM card built into your phone. Unlike physical SIM cards, you don't need to insert or swap anything. You can download and activate mobile plans digitally.",
      },
      {
        question: 'Can I keep my regular phone number?',
        answer: 'Yes. You can keep your primary SIM active for calls and texts while using Trotter for data.',
      },
    ],
  },
  {
    id: 'plans',
    title: 'Plans & Pricing',
    faqs: [
      {
        question: 'How are prices determined?',
        answer: 'Prices are based on wholesale rates from local carriers. We pass those savings directly to you with no roaming markup.',
      },
      {
        question: 'Do you offer unlimited plans?',
        answer: 'Yes. Select destinations include unlimited or high-cap data plans ideal for digital nomads or long stays.',
      },
    ],
  },
  {
    id: 'installation',
    title: 'Installation',
    faqs: [
      {
        question: 'How do I install my eSIM?',
        answer: 'Follow the in-app instructions or scan the QR code provided after purchase. Installation takes less than two minutes.',
      },
      {
        question: 'When should I install my eSIM?',
        answer: 'You can install it before you travel. Activation occurs automatically once you arrive and enable data roaming.',
      },
    ],
  },
  {
    id: 'usage',
    title: 'Usage & Top-Up',
    faqs: [
      {
        question: 'What happens if I run out of data?',
        answer: "You can top up instantly from the app. We'll send alerts when you hit 80% and 95% usage.",
      },
    ],
  },
  {
    id: 'billing',
    title: 'Billing & Payments',
    faqs: [
      {
        question: 'Which payment methods are accepted?',
        answer: 'We accept major credit cards, Apple Pay, Google Pay, and PayPal.',
      },
      {
        question: 'Can I get a refund?',
        answer: 'Unused plans are eligible for a refund within 14 days of purchase. Activated plans are non-refundable.',
      },
    ],
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    faqs: [
      {
        question: "My eSIM didn't activate. What should I do?",
        answer:
          "Ensure data roaming is enabled and restart your device. If you're still offline, contact support via chat for immediate assistance.",
      },
    ],
  },
];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeQuestion, setActiveQuestion] = useState({ category: null, index: null });
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      return categories.map((category) => ({ ...category }));
    }

    return categories
      .map((category) => {
        const filteredFaqs = category.faqs.filter((faq) =>
          faq.question.toLowerCase().includes(term) || faq.answer.toLowerCase().includes(term)
        );
        return { ...category, faqs: filteredFaqs };
      })
      .filter((category) => category.faqs.length > 0);
  }, [searchTerm]);

  const visibleCategories = useMemo(() => {
    if (searchTerm.trim()) {
      return filteredCategories;
    }
    if (activeCategory === 'all') {
      return categories;
    }
    return categories.filter((category) => category.id === activeCategory);
  }, [activeCategory, filteredCategories, searchTerm]);

  const handleToggle = (categoryId, index) => {
    if (activeQuestion.category === categoryId && activeQuestion.index === index) {
      setActiveQuestion({ category: null, index: null });
    } else {
      setActiveQuestion({ category: categoryId, index });
    }
  };

  return (
    <>
      <PageHero title="Frequently Asked Questions" subtitle="Everything you need to know about Trotter">
        <div className="faq-search">
          <input
            type="text"
            placeholder="Search for answers..."
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
              setActiveCategory('all');
              setActiveQuestion({ category: null, index: null });
            }}
          />
          <button type="button" id="faqSearchBtn" onClick={() => {}}>
            Search
          </button>
        </div>
      </PageHero>

      <section className="faq-categories-section">
        <div className="container">
          <div className="faq-layout">
            <aside className="faq-sidebar">
              <button
                type="button"
                className={`category-btn${activeCategory === 'all' ? ' active' : ''}`}
                data-category="all"
                onClick={() => {
                  setActiveCategory('all');
                  setSearchTerm('');
                  setActiveQuestion({ category: null, index: null });
                }}
              >
                All Questions
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  className={`category-btn${activeCategory === category.id ? ' active' : ''}`}
                  data-category={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setSearchTerm('');
                    setActiveQuestion({ category: null, index: null });
                  }}
                >
                  {category.title}
                </button>
              ))}
            </aside>

            <div className="faq-content" id="faqContent">
              {visibleCategories.length === 0 ? (
                <p>No answers found. Try another keyword.</p>
              ) : (
                visibleCategories.map((category) => (
                  <section key={category.id} className="faq-category" data-category={category.id}>
                    <h2>{category.title}</h2>
                    {category.faqs.map((faq, index) => {
                      const isActive = activeQuestion.category === category.id && activeQuestion.index === index;
                      return (
                        <div key={faq.question} className={`faq-item${isActive ? ' active' : ''}`}>
                          <button className="faq-question" onClick={() => handleToggle(category.id, index)}>
                            <span>{faq.question}</span>
                            <svg className="faq-icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6Z" fill="currentColor" />
                            </svg>
                          </button>
                          <div className="faq-answer">
                            {faq.answer.split('\n').map((text, i) => (
                              <p key={i}>{text}</p>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </section>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="faq-cta">
        <div className="container">
          <h2>Still Have Questions?</h2>
          <p>Our support team is here to help 24/7</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn-primary">
              Contact Support
            </a>
            <a href="mailto:support@trotter.com" className="btn-outline">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
