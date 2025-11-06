'use client';
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const heroStats = [
  { label: 'Countries', value: '200+' },
  { label: 'Happy Travelers', value: '500K+' },
  { label: 'App Rating', value: '4.8★' },
];

const steps = [
  {
    icon: '/images/icons/download.svg',
    number: '01',
    title: 'Download the App',
    description: 'Get Trotter for free on iOS or Android.',
  },
  {
    icon: '/images/icons/select.svg',
    number: '02',
    title: 'Choose Your Plan',
    description: 'Browse plans for 200+ countries and select the perfect one.',
  },
  {
    icon: '/images/icons/connect.svg',
    number: '03',
    title: 'Connect Instantly',
    description: 'Your eSIM activates automatically when you arrive.',
  },
];

const featureCards = [
  {
    title: 'Instant Activation',
    description: 'Your eSIM activates automatically the moment you land. No setup required.',
    path: 'M12 3a9 9 0 1 0 9 9 9.01 9.01 0 0 0-9-9Zm0 16a7 7 0 1 1 7-7 7 7 0 0 1-7 7Zm3-7h-2V7h-2v6h4Zm-2 2h-2v2h2Z',
  },
  {
    title: 'No Roaming Fees',
    description: 'Save up to 90% on roaming charges with affordable local rates.',
    path: 'M12 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Zm0-18a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm1 13h-2v-2h2Zm0-4h-2V6h2Z',
  },
  {
    title: 'Global Coverage',
    description: 'Access data in 200+ countries with one app. No need for multiple SIMs.',
    path: 'M12 2a10 10 0 0 0-3.91 19.2l.56.23.19-.58a4.77 4.77 0 0 1 2.55-2.68l.19-.07.67-2-2-.67-.07.19a2.78 2.78 0 0 0 1.46 3.35l-1.09.44A8 8 0 1 1 20 12h2a10 10 0 0 0-10-10Zm-3 8h2V7h2v3h2v2h-2v3h-2v-3H9Z',
  },
  {
    title: 'Flexible Plans',
    description: 'From 1GB to unlimited data. Choose plans from 7 to 180 days.',
    path: 'M19 3H5a2 2 0 0 0-2 2v14l4-4h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm0 10H6.17L5 14.17V5h14Z',
  },
  {
    title: 'Easy Top-Up',
    description: 'Running low? Top up your data instantly from anywhere.',
    path: 'M17 1H7a2 2 0 0 0-2 2v18l7-3 7 3V3a2 2 0 0 0-2-2Zm0 15-5-2.18L7 16V3h10Z',
  },
  {
    title: '24/7 Support',
    description: 'Our support team is always here to help, wherever you are.',
    path: 'M12 2a10 10 0 0 0-3.91 19.2l.56.23.19-.58a4.77 4.77 0 0 1 2.55-2.68l.19-.07.67-2-2-.67-.07.19a2.78 2.78 0 0 0 1.46 3.35l-1.09.44A8 8 0 1 1 20 12h2a10 10 0 0 0-10-10Zm-3 8h2V7h2v3h2v2h-2v3h-2v-3H9Z',
  },
];

const destinationCards = [
  {
    image: '/images/countries/usa.jpg',
    flag: '🇺🇸',
    name: 'USA',
    info: '1GB - 50GB plans',
    price: 'From $0.54/GB',
  },
  {
    image: '/images/countries/uk.jpg',
    flag: '🇬🇧',
    name: 'London',
    info: '1GB - 50GB plans',
    price: 'From $0.72/GB',
  },
  {
    image: '/images/countries/japan.jpg',
    flag: '🇯🇵',
    name: 'Japan',
    info: '1GB - 50GB plans',
    price: 'From $0.98/GB',
  },
  {
    image: '/images/countries/australia.jpg',
    flag: '🇦🇺',
    name: 'Australia',
    info: '1GB - 30GB plans',
    price: 'From $0.64/GB',
  },
];

const screenshotSlides = [
  {
    image: '/images/screenshots/home.png',
    title: 'Browse Plans',
    description: 'Find the perfect data plan for your destination.',
  },
  {
    image: '/images/screenshots/manage.png',
    title: 'Manage eSIMs',
    description: 'Track your data usage in real-time.',
  },
  {
    image: '/images/screenshots/profile.png',
    title: 'Easy Management',
    description: 'Control everything from one place.',
  },
];

const pricingTiers = [
  {
    icon: '🎒',
    name: 'Short Trips',
    description: 'Perfect for weekend getaways',
    amount: '1GB - 5GB',
    duration: '7-15 days',
    from: 'From $4.99',
  },
  {
    icon: '✈️',
    name: 'Long Holidays',
    description: 'Ideal for extended travel',
    amount: '10GB - 30GB',
    duration: '30-60 days',
    from: 'From $24.99',
    featured: true,
  },
  {
    icon: '🌍',
    name: 'Digital Nomads',
    description: 'Unlimited connectivity',
    amount: '50GB - Unlimited',
    duration: '90-180 days',
    from: 'From $89.99',
  },
];

const testimonialCards = [
  {
    quote:
      '"Trotter saved me hundreds on roaming fees during my Europe trip. Setup was instant and connection was perfect!"',
    name: 'Sarah M.',
    location: 'New York, USA',
    avatar: '/images/avatars/user1.jpg',
  },
  {
    quote:
      '"As a digital nomad, Trotter is essential. I\'ve used it in 12 countries and never had an issue."',
    name: 'James K.',
    location: 'London, UK',
    avatar: '/images/avatars/user2.jpg',
  },
  {
    quote:
      '"Finally, an eSIM app that actually works! Simple, affordable, and reliable. Highly recommend!"',
    name: 'Maria L.',
    location: 'Toronto, Canada',
    avatar: '/images/avatars/user3.jpg',
  },
];

const appStoreRatings = [
  {
    icon: '/images/app-store-icon.svg',
    score: '4.8 out of 5',
    reviews: '12.5K reviews',
  },
  // {
  //   icon: '/images/google.png',
  //   score: '4.7 out of 5',
  //   reviews: '8.3K reviews',
  // },
];

const faqPreview = [
  {
    question: 'What is an eSIM?',
    answer:
      "An eSIM is a digital SIM card embedded in your phone. It works just like a physical SIM but doesn't require swapping cards.",
  },
  {
    question: 'How do I activate my eSIM?',
    answer: 'Your eSIM activates automatically when you arrive at your destination. Just make sure data roaming is enabled.',
  },
  {
    question: 'Can I use Trotter with my current phone number?',
    answer: 'Yes! Keep your primary SIM active for calls and texts while using Trotter for data.',
  },
  {
    question: 'Is my phone compatible with eSIM?',
    answer: 'Most modern smartphones support eSIM. Check our compatibility list or use the checker in our app.',
  },
  {
    question: 'What happens if I run out of data?',
    answer: 'You can top up instantly through the app. We also send notifications when you reach 80% usage.',
  },
];

export default function HomePage() {
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [activeFaq, setActiveFaq] = useState(0);
  const carouselTimer = useRef(null);
  const heroRef = useRef(null);
  const phoneRef = useRef(null);
  const floatingCardsRef = useRef([]);

  useEffect(() => {
    const sections = document.querySelectorAll('.scroll-reveal');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    carouselTimer.current = window.setInterval(() => {
      setActiveScreenshot((prev) => (prev + 1) % screenshotSlides.length);
    }, 5000);

    return () => {
      if (carouselTimer.current) {
        window.clearInterval(carouselTimer.current);
      }
    };
  }, []);

  const restartCarousel = () => {
    if (carouselTimer.current) {
      window.clearInterval(carouselTimer.current);
    }
    carouselTimer.current = window.setInterval(() => {
      setActiveScreenshot((prev) => (prev + 1) % screenshotSlides.length);
    }, 5000);
  };

  useEffect(() => {
    const heroEl = heroRef.current;
    const phoneEl = phoneRef.current;
    const floatingEls = floatingCardsRef.current;
    if (!heroEl || !phoneEl) return;

    const constrain = 30;
    const handleMove = (event) => {
      const rect = heroEl.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const xRot = ((y / rect.height) * 2 - 1) * constrain;
      const yRot = ((x / rect.width) * 2 - 1) * -constrain;

      phoneEl.style.transform = `rotateX(${xRot}deg) rotateY(${yRot}deg)`;
      floatingEls.forEach((card, index) => {
        if (!card) return;
        const depth = (index + 1) * 5;
        card.style.transform = `translateY(-12px) translateX(${yRot / depth}px) translateY(${xRot / depth}px)`;
      });
    };

    const reset = () => {
      phoneEl.style.transform = '';
      floatingEls.forEach((card) => {
        if (card) card.style.transform = '';
      });
    };

    heroEl.addEventListener('mousemove', handleMove);
    heroEl.addEventListener('mouseleave', reset);

    return () => {
      heroEl.removeEventListener('mousemove', handleMove);
      heroEl.removeEventListener('mouseleave', reset);
    };
  }, []);

  return (
    <>
      <section className="hero scroll-reveal" aria-labelledby="hero-title" ref={heroRef}>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title" id="hero-title">
              Stay Connected
              <br />
              <span className="gradient-text">Anywhere You Travel</span>
            </h1>
            <p className="hero-subtitle">
              Get instant eSIM data plans for 200+ countries. No SIM cards, no roaming fees, no hassle.
            </p>

            <div className="hero-cta">
              <button className="btn-primary">
                <span>Download App</span>
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h12.17l-4.58-4.59L13 6l7 7-7 7-0.41-1.41L17.17 13H5z" fill="currentColor" />
                </svg>
              </button>
              <Link className="btn-secondary" href="/#coverage">
                View Coverage
              </Link>
            </div>

            <div className="app-badges">
              <a href="#" className="app-badge" aria-label="Download on the App Store">
                <img src="/images/applestore.webp" alt="Download on App Store" />
              </a>
              <a href="#" className="app-badge" aria-label="Get it on Google Play">
                <img src="/images/google.png" alt="Get it on Google Play" />
              </a>
            </div>

            <div className="trust-indicators" aria-label="Trotter stats">
              {heroStats.map((stat) => (
                <div key={stat.label} className="trust-item">
                  <span className="trust-number">{stat.value}</span>
                  <span className="trust-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="phone-mockup" ref={phoneRef}>
              <img src="/images/hero/hero-phone.jpg" alt="Trotter App" className="phone-image" />
              <div
                className="floating-card card-1"
                ref={(el) => {
                  floatingCardsRef.current[0] = el;
                }}
              >
                <img src="/images/flags/us.svg" alt="USA flag" />
                <div>
                  <span>USA</span>
                  <span className="price">$0.54/GB</span>
                </div>
              </div>
              <div
                className="floating-card card-2"
                ref={(el) => {
                  floatingCardsRef.current[1] = el;
                }}
              >
                <img src="/images/flags/jp.svg" alt="Japan flag" />
                <div>
                  <span>Japan</span>
                  <span className="price">$0.98/GB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works scroll-reveal" id="how-it-works" aria-labelledby="how-title">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" id="how-title">
              Get Connected in 3 Simple Steps
            </h2>
            <p className="section-subtitle">Start using Trotter in minutes</p>
          </div>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div className="step-card" key={step.title}>
                <div className="step-icon">
                  <img src={step.icon} alt="" />
                </div>
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="video-demo">
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/JH5rV9SnZx8?rel=0"
              title="How to buy eSIM data bundles with Trotter"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          </div>
        </div>
      </section>

      <section className="features scroll-reveal" aria-labelledby="features-title">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" id="features-title">
              Why Choose Trotter?
            </h2>
            <p className="section-subtitle">
              Everything you need for seamless travel connectivity
            </p>
          </div>
          <div className="features-grid">
            {featureCards.map((feature) => (
              <div className="feature-card" key={feature.title}>
                <div className="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={feature.path} fill="currentColor" />
                  </svg>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="coverage scroll-reveal" id="coverage" aria-labelledby="coverage-title">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" id="coverage-title">
              Available in 200+ Countries
            </h2>
            <p className="section-subtitle">Find your destination and get connected</p>
          </div>

          <div className="coverage-search" role="search">
            <input type="text" className="search-input" placeholder="Search for a country..." aria-label="Search for a country" />
            <button className="search-btn" aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15.5 14h-.79l-.28-.27A6.5 6.5 0 1 0 14 15.5l.27.28v.79l5 5 1.5-1.5-5-5Zm-6 0a4.5 4.5 0 1 1 4.5-4.5A4.494 4.494 0 0 1 9.5 14Z" fill="currentColor" />
              </svg>
            </button>
          </div>

          <div className="destinations-grid">
            {destinationCards.map((destination) => (
              <article className="destination-card" key={destination.name}>
                <img src={destination.image} alt={destination.name} className="destination-image" />
                <div className="destination-content">
                  <span className="flag" role="img" aria-label={`${destination.name} flag`}>
                    {destination.flag}
                  </span>
                  <h3 className="destination-name">{destination.name}</h3>
                  <p className="destination-info">{destination.info}</p>
                  <p className="destination-price">{destination.price}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="coverage-cta">
            <Link href="/coverage" className="btn-outline">
              View All Countries
            </Link>
          </div>

          <div className="world-map" aria-hidden="true">
            <img src="/images/hero/world-map.jpg" alt="Global network coverage map" />
          </div>
        </div>
      </section>

      <section className="app-showcase scroll-reveal" aria-labelledby="app-showcase-title">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" id="app-showcase-title">
              Simple, Beautiful, Powerful
            </h2>
            <p className="section-subtitle">Everything you need in one elegant app</p>
          </div>

          <div className="screenshot-carousel">
            <button
              className="carousel-btn prev"
              aria-label="Previous screenshot"
              onClick={() => {
                setActiveScreenshot((prev) => (prev - 1 + screenshotSlides.length) % screenshotSlides.length);
                restartCarousel();
              }}
            >
              ‹
            </button>

            <div className="screenshot-container" onMouseEnter={() => window.clearInterval(carouselTimer.current)} onMouseLeave={restartCarousel}>
              {screenshotSlides.map((slide, index) => (
                <div key={slide.title} className={`screenshot${index === activeScreenshot ? ' active' : ''}`}>
                  <img src={slide.image} alt={`${slide.title} screen`} />
                  <div className="screenshot-label">
                    <h4>{slide.title}</h4>
                    <p>{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-btn next"
              aria-label="Next screenshot"
              onClick={() => {
                setActiveScreenshot((prev) => (prev + 1) % screenshotSlides.length);
                restartCarousel();
              }}
            >
              ›
            </button>
          </div>
        </div>
      </section>

      <section className="pricing-teaser scroll-reveal" id="pricing" aria-labelledby="pricing-teaser-title">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" id="pricing-teaser-title">
              Transparent Pricing, No Surprises
            </h2>
            <p className="section-subtitle">Pay only for what you need</p>
          </div>

          <div className="pricing-cards">
            {pricingTiers.map((tier) => (
              <div key={tier.name} className={`pricing-card${tier.featured ? ' featured' : ''}`}>
                {tier.featured && <div className="badge">Most Popular</div>}
                <div className="pricing-icon" aria-hidden="true">
                  {tier.icon}
                </div>
                <h3 className="pricing-name">{tier.name}</h3>
                <p className="pricing-description">{tier.description}</p>
                <div className="pricing-example">
                  <span className="pricing-amount">{tier.amount}</span>
                  <span className="pricing-duration">{tier.duration}</span>
                </div>
                <p className="pricing-from">{tier.from}</p>
              </div>
            ))}
          </div>

          <div className="pricing-cta">
            <Link href="/pricing" className="btn-primary">
              View All Plans
            </Link>
          </div>
        </div>
      </section>

      <section className="testimonials scroll-reveal" aria-labelledby="testimonials-title">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" id="testimonials-title">
              Loved by Travelers Worldwide
            </h2>
            <p className="section-subtitle">See what our users have to say</p>
          </div>

          <div className="testimonials-grid">
            {testimonialCards.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <div className="testimonial-rating" aria-hidden="true">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="testimonial-text">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <img src={testimonial.avatar} alt={`Portrait of ${testimonial.name}`} />
                  <div>
                    <p className="author-name">{testimonial.name}</p>
                    <p className="author-location">{testimonial.location}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="app-ratings">
            {appStoreRatings.map((rating) => (
              <div className="rating-box" key={rating.score}>
                <img src={rating.icon} alt="Store rating" />
                <div className="rating-stars" aria-hidden="true">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="rating-score">{rating.score}</p>
                <p className="rating-reviews">{rating.reviews}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-preview scroll-reveal" aria-labelledby="faq-preview-title">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" id="faq-preview-title">
              Frequently Asked Questions
            </h2>
            <p className="section-subtitle">Quick answers to common questions</p>
          </div>

          <div className="faq-list">
            {faqPreview.map((faq, index) => (
              <div key={faq.question} className={`faq-item${index === activeFaq ? ' active' : ''}`}>
                <button className="faq-question" onClick={() => setActiveFaq(index === activeFaq ? -1 : index)}>
                  <span>{faq.question}</span>
                  <svg className="faq-icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6Z" fill="currentColor" />
                  </svg>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-cta">
            <Link href="/faq" className="btn-outline">
              View All FAQs
            </Link>
          </div>
        </div>
      </section>

      <section className="download-cta scroll-reveal" aria-labelledby="download-title">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title" id="download-title">
              Ready to Travel Smarter?
            </h2>
            <p className="cta-subtitle">Join 500,000+ travelers using Trotter worldwide.</p>

            <div className="download-buttons">
              <a href="#" className="download-btn app-store">
                <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16.365 1c-.974.057-2.137.664-2.82 1.451-.615.702-1.154 1.838-.951 2.914 1.107.087 2.254-.566 2.952-1.373.671-.778 1.194-1.907.819-2.992Zm-2.2 4.983c-1.59 0-3.592.908-4.78 2.085-1.064 1.046-2.013 2.821-1.647 4.487.207.962.75 1.935 1.32 2.65.62.785 1.087 1.33 1.99 1.875.763.454 1.276.73 2.188.73.853 0 1.351-.275 2.12-.703.814-.45 1.233-.913 1.938-1.585-.512-.567-.73-.83-1.154-1.472-.743-1.14-1.063-2.081-1.063-3.276 0-1.176.36-2.212 1.063-3.271-.387-.082-.775-.12-1.175-.12Z" fill="currentColor" />
                </svg>
                <div>
                  <span className="download-text">Download on the</span>
                  <span>   </span>
                  <span className="download-store">App Store</span>
                </div>
              </a>

              <a href="#" className="download-btn google-play">
                <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3.6 2.4 13.9 12 3.6 21.6Zm10.9 9.6L5.1 2.2c.2-.1.5-.2.8-.2.4 0 .9.1 1.3.4l11.9 6.9c.8.5 1.3 1.1 1.3 1.7s-.5 1.2-1.3 1.7l-11.9 6.9c-.4.2-.9.4-1.3.4-.3 0-.6-.1-.8-.2Z" fill="currentColor" />
                </svg>
                <div>
                  <span className="download-text">Get it on </span>
                  <span className="download-store"> Google Play</span>
                </div>
              </a>
            </div>

            <div className="qr-code-section">
              <div className="qr-code">
                <img src="/images/qr-code.png" alt="Trotter app download QR code" />
              </div>
              <p className="qr-text">Scan to download</p>
            </div>
          </div>

          <div className="cta-visual" aria-hidden="true">
            <img src="/images/download-phones.jpg" alt="Trotter App" className="cta-image" />
          </div>
        </div>
      </section>
    </>
  );
}
