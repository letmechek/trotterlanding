import Link from 'next/link';

const productLinks = [
  { href: '/coverage', label: 'Coverage' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/compatibility', label: 'Compatibility' },
];

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/careers', label: 'Careers' },
  { href: '/press', label: 'Press' },
];

const supportLinks = [
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/help', label: 'Help Center' },
  { href: '/installation', label: 'Installation Guide' },
];

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/refund', label: 'Refund Policy' },
  { href: '/cookies', label: 'Cookie Policy' },
];

const socialIcons = [
  { href: '#', label: 'Trotter on Facebook', icon: 'facebook' },
  { href: '#', label: 'Trotter on X', icon: 'twitter' },
  { href: '#', label: 'Trotter on Instagram', icon: 'instagram' },
  { href: '#', label: 'Trotter on LinkedIn', icon: 'linkedin' },
];

const iconPaths = {
  facebook:
    'M22 12a10 10 0 1 0-11.56 9.88v-6.99h-2.48V12h2.48V9.71c0-2.45 1.45-3.81 3.67-3.81 1.06 0 2.17.19 2.17.19v2.38h-1.22c-1.2 0-1.58.74-1.58 1.5V12h2.69l-.43 2.89h-2.26v6.99A10 10 0 0 0 22 12Z',
  twitter:
    'M22 4.01 14.02 12l8 7.99h-2.01L12 13.99 6 20H2l8-7.99-8-7.99h2.01L12 10l6-5.99h4Zm-3 1h-1.99l-5 5-2 1.99 7.99 8H20l-6-6.01Z',
  instagram:
    'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5.5-2.75a.75.75 0 1 1-.75.75.75.75 0 0 1 .75-.75Z',
  linkedin:
    'M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM8.34 18.34H6V10.67h2.34Zm-1.17-8.67a1.34 1.34 0 1 1 1.33-1.34 1.34 1.34 0 0 1-1.33 1.34ZM18.34 18.34H16V14c0-1.12-.4-1.88-1.4-1.88a1.51 1.51 0 0 0-1.42 1.01 1.88 1.88 0 0 0-.09.68v4.53H11.7s.03-7.35 0-8.11h2.34v1.15a2.32 2.32 0 0 1 2.11-1.16c1.54 0 2.69 1 2.69 3.19Z',
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-column">
            <img src="/images/trotter-logo-white.png" alt="Trotter logo" className="footer-logo" />
            <p className="footer-description">
              Travel anywhere, connect instantly. The world&apos;s simplest eSIM solution.
            </p>
            <div className="social-links">
              {socialIcons.map((item) => (
                <a key={item.icon} href={item.href} className="social-icon" aria-label={item.label}>
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={iconPaths[item.icon]} fill="currentColor" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Product</h4>
            <ul className="footer-links">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Support</h4>
            <ul className="footer-links">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© 2025 Trotter. All rights reserved.</p>
          <div className="footer-badges">
            <img src="/images/badge-ssl.svg" alt="SSL Secure" />
            <img src="/images/badge-pci.svg" alt="PCI Compliant" />
          </div>
        </div>
      </div>
    </footer>
  );
}
