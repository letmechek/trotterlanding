'use client';
/* eslint-disable @next/next/no-img-element */

import { useMemo, useState } from 'react';
import PageHero from '@/components/PageHero';

const planExamples = [
  { country: '🇺🇸 USA', data: '3GB', validity: '15 days', price: '$8.99' },
  { country: '🇯🇵 Japan', data: '5GB', validity: '15 days', price: '$12.99' },
  { country: '🇪🇺 Europe', data: '10GB', validity: '30 days', price: '$24.99' },
  { country: '🌍 Global', data: '20GB', validity: '60 days', price: '$54.99' },
];

const pricingMatrix = [
  { keywords: ['USA', 'usa', 'america'], pricePerGb: 2.99, activationFee: 3.0 },
  { keywords: ['japan'], pricePerGb: 2.6, activationFee: 3.5 },
  { keywords: ['france', 'germany', 'spain', 'italy', 'europe'], pricePerGb: 2.4, activationFee: 3.0 },
  { keywords: ['London', 'uk'], pricePerGb: 2.7, activationFee: 3.0 },
  { keywords: ['australia'], pricePerGb: 2.8, activationFee: 3.25 },
  { keywords: ['thailand', 'singapore', 'asia'], pricePerGb: 2.5, activationFee: 3.1 },
  { keywords: ['global', 'world'], pricePerGb: 3.4, activationFee: 4.0 },
];

const formatCurrency = (value) => `$${value.toFixed(2)}`;

export default function PricingPage() {
  const [country, setCountry] = useState('');
  const [duration, setDuration] = useState(15);
  const [dataAmount, setDataAmount] = useState(5);

  const result = useMemo(() => {
    if (!country) {
      return {
        price: '$12.99',
        details: '5GB for 15 days in Japan',
        note: 'Based on average local pricing. Actual price may vary by provider.',
      };
    }

    const normalized = country.trim().toLowerCase();
    const pricingRule =
      pricingMatrix.find((rule) => rule.keywords.some((keyword) => normalized.includes(keyword))) ??
      { pricePerGb: 3.1, activationFee: 3.5 };

    const basePrice = pricingRule.activationFee;
    const usagePrice = dataAmount * pricingRule.pricePerGb;
    const total = Math.max(basePrice + usagePrice, 4.99);
    const displayCountry = country.replace(/\b\w/g, (char) => char.toUpperCase());
    const averagePerDay = total / Number(duration);

    return {
      price: formatCurrency(total),
      details: `${dataAmount}GB for ${duration} days in ${displayCountry}`,
      note: `Approx. ${formatCurrency(averagePerDay)} per day based on local rates.`,
    };
  }, [country, dataAmount, duration]);

  return (
    <>
      <PageHero
        title="Simple, Transparent Pricing"
        subtitle="No hidden fees. Pay only for what you need."
      >
        <div className="pricing-hero-cta">
          <a href="#calculator" className="btn-primary">
            Find Your Plan
          </a>
          <a href="/coverage" className="btn-secondary">
            Browse Coverage
          </a>
        </div>
      </PageHero>

      <section className="pricing-calculator" id="calculator">
        <div className="container">
          <div className="calculator-card">
            <div className="calculator-content">
              <h3>Find Your Perfect Plan</h3>
              <p>Tell us where you&apos;re headed, how long you&apos;ll stay, and how much data you need.</p>

              <form
                className="calculator-form"
                onSubmit={(event) => {
                  event.preventDefault();
                }}
              >
                <div className="form-group">
                  <label htmlFor="calculatorCountry">Where are you traveling?</label>
                  <input
                    id="calculatorCountry"
                    type="text"
                    placeholder="Search country..."
                    value={country}
                    onChange={(event) => setCountry(event.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="calculatorDuration">How long will you stay?</label>
                  <select
                    id="calculatorDuration"
                    value={duration}
                    onChange={(event) => setDuration(Number(event.target.value))}
                  >
                    <option value={7}>7 days</option>
                    <option value={15}>15 days</option>
                    <option value={30}>30 days</option>
                    <option value={60}>60 days</option>
                    <option value={90}>90 days</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="dataRange">How much data do you need?</label>
                  <div className="data-slider">
                    <input
                      id="dataRange"
                      type="range"
                      min="1"
                      max="50"
                      value={dataAmount}
                      onChange={(event) => setDataAmount(Number(event.target.value))}
                    />
                    <span className="data-value">{dataAmount} GB</span>
                  </div>
                </div>

                <button className="btn-primary" type="submit">
                  Calculate Price
                </button>
              </form>
            </div>

            <aside className="calculator-result">
              <p className="result-price">{result.price}</p>
              <p className="result-details">{result.details}</p>
              <p className="result-note">{result.note}</p>
              <a href="/coverage" className="btn-secondary">
                Compare Country Rates
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className="sample-pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Popular Plan Examples</h2>
            <p className="section-subtitle">Pick the data size that fits your travel plans</p>
          </div>

          <div className="pricing-table">
            <table>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Data</th>
                  <th>Validity</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {planExamples.map((row) => (
                  <tr key={row.country}>
                    <td>{row.country}</td>
                    <td>{row.data}</td>
                    <td>{row.validity}</td>
                    <td>{row.price}</td>
                    <td>
                      <button className="btn-small" type="button">
                        Get Plan
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="pricing-faq">
        <div className="container">
          <div className="pricing-faq-grid">
            <div>
              <h2 className="section-title">Pricing Questions</h2>
              <p className="section-subtitle">Straightforward answers so you can book with confidence</p>
              <a href="/faq" className="btn-outline">
                Visit Full FAQ
              </a>
            </div>

            <div className="pricing-faq-list">
              {[`Are there any hidden roaming fees?`, 'Can I top up my plan?', 'Do plans expire?'].map((question, index) => {
                const answers = [
                  'No. All Trotter plans are prepaid with transparent pricing. You pay exactly what is shown when you purchase.',
                  'Yes. You can add more data instantly through the app at any time, even while abroad.',
                  'Each plan has a validity period (7-180 days). Unused data expires at the end of the period, but you can schedule activations ahead of time.',
                ];
                return (
                  <div key={question} className="faq-item active">
                    <button className="faq-question">
                      <span>{question}</span>
                      <svg className="faq-icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6Z" fill="currentColor" />
                      </svg>
                    </button>
                    <div className="faq-answer" style={{ maxHeight: 'none' }}>
                      <p>{answers[index]}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
