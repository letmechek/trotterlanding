'use client';
/* eslint-disable @next/next/no-img-element */

import { useMemo, useState } from 'react';
import PageHero from '@/components/PageHero';

const regionalPlans = [
  { icon: '🇪🇺', title: 'Europe', countries: '33 Countries', price: 'From $8.99' },
  { icon: '🌏', title: 'Asia', countries: '18 Countries', price: 'From $11.99' },
  { icon: '🌍', title: 'Global', countries: '113 Countries', price: 'From $34.99' },
];

const countries = [
  {
    name: 'United States',
    region: 'americas',
    price: 0.54,
    details: '1GB - 50GB • 7-180 days',
    network: '5G • T-Mobile, AT&T, Verizon',
    flag: '🇺🇸',
    image: '/images/countries/usa.jpg',
    popular: true,
  },
  {
    name: 'London',
    region: 'europe',
    price: 0.72,
    details: '1GB - 50GB • 7-180 days',
    network: '5G • EE, Vodafone, O2',
    flag: '🇬🇧',
    image: '/images/countries/uk.jpg',
    popular: true,
  },
  {
    name: 'Japan',
    region: 'asia',
    price: 0.98,
    details: '1GB - 50GB • 7-90 days',
    network: '5G • NTT Docomo, SoftBank',
    flag: '🇯🇵',
    image: '/images/countries/japan.jpg',
    popular: false,
  },
  {
    name: 'Australia',
    region: 'oceania',
    price: 0.64,
    details: '1GB - 30GB • 7-60 days',
    network: '5G • Telstra, Optus',
    flag: '🇦🇺',
    image: '/images/countries/australia.jpg',
    popular: false,
  },
  {
    name: 'Canada',
    region: 'americas',
    price: 0.78,
    details: '1GB - 20GB • 7-30 days',
    network: '5G • Rogers, Bell',
    flag: '🇨🇦',
    image: '/images/countries/canada.jpg',
    popular: false,
  },
  {
    name: 'France',
    region: 'europe',
    price: 0.68,
    details: '1GB - 30GB • 7-45 days',
    network: '5G • Orange, SFR',
    flag: '🇫🇷',
    image: '/images/countries/france.jpg',
    popular: false,
  },
  {
    name: 'Singapore',
    region: 'asia',
    price: 0.82,
    details: '1GB - 20GB • 7-30 days',
    network: '5G • Singtel, StarHub',
    flag: '🇸🇬',
    image: '/images/countries/singapore.jpg',
    popular: false,
  },
  {
    name: 'South Africa',
    region: 'africa',
    price: 1.15,
    details: '1GB - 15GB • 7-30 days',
    network: '4G • MTN, Vodacom',
    flag: '🇿🇦',
    image: '/images/countries/south-africa.jpg',
    popular: false,
  },
  {
    name: 'Mexico',
    region: 'americas',
    price: 0.89,
    details: '1GB - 20GB • 7-30 days',
    network: '4G/5G • Telcel, AT&T',
    flag: '🇲🇽',
    image: '/images/countries/mexico.jpg',
    popular: false,
  },
  {
    name: 'Spain',
    region: 'europe',
    price: 0.74,
    details: '1GB - 30GB • 7-45 days',
    network: '5G • Movistar, Orange',
    flag: '🇪🇸',
    image: '/images/countries/spain.jpg',
    popular: false,
  },
  {
    name: 'Thailand',
    region: 'asia',
    price: 0.91,
    details: '1GB - 15GB • 7-30 days',
    network: '4G/5G • AIS, TrueMove',
    flag: '🇹🇭',
    image: '/images/countries/thailand.jpg',
    popular: false,
  },
  {
    name: 'New Zealand',
    region: 'oceania',
    price: 0.87,
    details: '1GB - 20GB • 7-30 days',
    network: '4G/5G • Spark, Vodafone',
    flag: '🇳🇿',
    image: '/images/countries/new-zealand.jpg',
    popular: false,
  },
];

const stats = [
  { label: 'Countries & Territories', value: '200+' },
  { label: 'Network Providers', value: '500+' },
  { label: 'Uptime Reliability', value: '99.9%' },
  { label: 'High-Speed Networks', value: '5G' },
];

export default function CoveragePage() {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');
  const [sort, setSort] = useState('popular');
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredCountries = useMemo(() => {
    const lowerSearch = search.trim().toLowerCase();
    const matches = countries.filter((country) => {
      const matchesRegion = region ? country.region === region : true;
      const matchesSearch = lowerSearch ? country.name.toLowerCase().includes(lowerSearch) : true;
      return matchesRegion && matchesSearch;
    });

    const sorted = [...matches].sort((a, b) => {
      switch (sort) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'popular':
        default:
          if (a.popular !== b.popular) {
            return a.popular ? -1 : 1;
          }
          return a.name.localeCompare(b.name);
      }
    });

    return sorted;
  }, [region, search, sort]);

  const visibleCountries = filteredCountries.slice(0, visibleCount);
  const showLoadMore = visibleCount < filteredCountries.length;

  return (
    <>
      <PageHero
        title="Available in 200+ Countries"
        subtitle="Find your destination and get the best rates"
      >
        <div className="coverage-filters">
          <input
            type="text"
            placeholder="Search countries..."
            className="filter-search"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              setVisibleCount(8);
            }}
          />

          <select
            className="filter-select"
            value={region}
            onChange={(event) => {
              setRegion(event.target.value);
              setVisibleCount(8);
            }}
          >
            <option value="">All Regions</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="americas">Americas</option>
            <option value="africa">Africa</option>
            <option value="oceania">Oceania</option>
          </select>

          <select
            className="filter-select"
            value={sort}
            onChange={(event) => {
              setSort(event.target.value);
              setVisibleCount(8);
            }}
          >
            <option value="popular">Most Popular</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Country A-Z</option>
          </select>
        </div>
      </PageHero>

      <section className="countries-section">
        <div className="container">
          <div className="regional-banner">
            <h3>Save More with Regional Plans</h3>
            <p>Get data in multiple countries with one eSIM</p>
            <div className="regional-plans">
              {regionalPlans.map((plan) => (
                <div key={plan.title} className="regional-card mb-2">
                  <span className="regional-icon" role="img" aria-label={plan.title}>
                    {plan.icon}
                  </span>
                  <h4>{plan.title}</h4>
                  <p>{plan.countries}</p>
                  <span className="regional-price">{plan.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="countries-grid">
            {visibleCountries.map((country) => (
              <article
                key={country.name}
                className="country-card"
                data-region={country.region}
                data-price={country.price}
              >
                <div className="country-image">
                  <img src={country.image} alt={country.name} />
                  {country.popular && <div className="country-badge">Popular</div>}
                </div>
                <div className="country-info">
                  <div className="country-header">
                    <span className="country-flag" role="img" aria-label={`${country.name} flag`}>
                      {country.flag}
                    </span>
                    <h3 className="country-name">{country.name}</h3>
                  </div>
                  <p className="country-details">{country.details}</p>
                  <p className="country-network">{country.network}</p>
                  <div className="country-footer">
                    <span className="country-price">From ${country.price.toFixed(2)}/GB</span>
                    <button className="btn-small" type="button">
                      View Plans
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {showLoadMore && (
            <div className="load-more">
              <button className="btn-outline" type="button" onClick={() => setVisibleCount((value) => value + 4)}>
                Load More Countries
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="coverage-stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <span className="stat-number">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
