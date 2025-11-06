'use client';
/* eslint-disable @next/next/no-img-element */

import { useMemo, useState } from 'react';
import PageHero from '@/components/PageHero';

const detailedSteps = [
  {
    label: 'Step 1',
    title: 'Download Trotter',
    description:
      'Get the free app from the App Store or Google Play. Available for iPhone (XS and newer) and most Android devices.',
    image: '/images/steps/step1-large.jpg',
    checklist: ['Free to download', 'No subscription required', 'Works on dual-SIM devices'],
  },
  {
    label: 'Step 2',
    title: 'Choose Your Plan',
    description:
      'Browse curated plans for 200+ countries or pick a regional bundle that keeps you covered across borders.',
    image: '/images/steps/step2-large.jpg',
    checklist: ['Transparent pricing', 'Regional & global bundles', 'Instant QR or in-app installation'],
  },
  {
    label: 'Step 3',
    title: 'Activate & Stay Connected',
    description:
      'Your eSIM activates automatically on arrival. Track data usage in real time and top up instantly if you need more.',
    image: '/images/steps/step3-large.jpg',
    checklist: ['Automatic activation', 'Real-time usage alerts', '24/7 in-app support'],
  },
];

const devices = {
  Apple: [
    { model: 'iPhone 15', compatible: true },
    { model: 'iPhone 14', compatible: true },
    { model: 'iPhone 13', compatible: true },
    { model: 'iPhone 12', compatible: true },
    { model: 'iPhone 11', compatible: true },
    { model: 'iPhone XS / XR', compatible: true },
    { model: 'iPhone X or older', compatible: false },
  ],
  Samsung: [
    { model: 'Galaxy S24', compatible: true },
    { model: 'Galaxy S23', compatible: true },
    { model: 'Galaxy S22', compatible: true },
    { model: 'Galaxy Note 20', compatible: true },
    { model: 'Galaxy A54', compatible: true },
    { model: 'Galaxy A32', compatible: false },
  ],
  Google: [
    { model: 'Pixel 8', compatible: true },
    { model: 'Pixel 7', compatible: true },
    { model: 'Pixel 6', compatible: true },
    { model: 'Pixel 5', compatible: true },
    { model: 'Pixel 4', compatible: true },
    { model: 'Pixel 3', compatible: false },
  ],
  Huawei: [
    { model: 'P50 Pro', compatible: true },
    { model: 'Mate 40 Pro', compatible: true },
    { model: 'P40', compatible: true },
    { model: 'Mate 30', compatible: false },
  ],
};

export default function HowItWorksPage() {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const models = useMemo(() => (brand ? devices[brand] ?? [] : []), [brand]);

  const handleCheck = () => {
    if (!brand || !model) {
      setMessage('Please select both a brand and model to continue.');
      setStatus('warning');
      return;
    }

    const device = models.find((entry) => entry.model === model);
    if (!device) {
      setMessage('We could not find compatibility information for that model. Please contact support.');
      setStatus('warning');
      return;
    }

    if (device.compatible) {
      setMessage(`${model} is fully compatible with Trotter eSIM.`);
      setStatus('success');
    } else {
      setMessage(`${model} does not support eSIM. Please check with your carrier or choose another device.`);
      setStatus('error');
    }
  };

  return (
    <>
      <PageHero
        title="How Trotter Works"
        subtitle="Step-by-step guidance from download to activation"
      />

      <section className="detailed-steps">
        <div className="container">
          {detailedSteps.map((step) => (
            <article className="step-detail" key={step.title}>
              <div className="step-visual">
                <img src={step.image} alt={step.title} />
              </div>
              <div className="step-content">
                <span className="step-label">{step.label}</span>
                <h2>{step.title}</h2>
                <p>{step.description}</p>
                <ul className="feature-list">
                  {step.checklist.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="video-tutorial">
        <div className="container">
          <h2>Watch How It Works</h2>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/JH5rV9SnZx8?rel=0"
              title="How to purchase eSIM data bundles with Trotter"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="compatibility">
        <div className="container">
          <div className="compatibility-header">
            <h2>Check If Your Device Is Compatible</h2>
            <p>Most recent smartphones support eSIM. Use our quick checker below.</p>
          </div>

          <div className="device-checker">
            <select
              value={brand}
              onChange={(event) => {
                setBrand(event.target.value);
                setModel('');
                setMessage('');
                setStatus('');
              }}
              aria-label="Select device brand"
            >
              <option value="">Select Brand</option>
              {Object.keys(devices).map((deviceBrand) => (
                <option key={deviceBrand} value={deviceBrand}>
                  {deviceBrand}
                </option>
              ))}
            </select>

            <select
              value={model}
              onChange={(event) => {
                setModel(event.target.value);
                setMessage('');
                setStatus('');
              }}
              aria-label="Select device model"
              disabled={!brand}
            >
              <option value="">Select Model</option>
              {models.map((entry) => (
                <option key={entry.model} value={entry.model}>
                  {entry.model}
                </option>
              ))}
            </select>

            <button type="button" className="btn-primary" onClick={handleCheck}>
              Check Compatibility
            </button>
          </div>

          {message && (
            <div className={`compatibility-result${status ? ` compatibility-${status}` : ''}`} role="status" aria-live="polite">
              {message}
            </div>
          )}
        </div>
      </section>

      <section className="helper-cta">
        <div className="container">
          <div className="helper-card">
            <h3>Need Help Getting Started?</h3>
            <p>
              Our support team is available around the clock to walk you through installation, plan selection, or
              troubleshooting.
            </p>
            <div className="helper-actions">
              <a href="/faq" className="btn-outline">
                Browse FAQs
              </a>
              <a href="/contact" className="btn-primary">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
