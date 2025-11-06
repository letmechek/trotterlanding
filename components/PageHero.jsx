export default function PageHero({ title, subtitle, children, className = '' }) {
  return (
    <section className={`page-hero ${className}`.trim()}>
      <div className="container">
        <h1 className="page-title">{title}</h1>
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
