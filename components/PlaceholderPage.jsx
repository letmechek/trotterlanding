import PageHero from './PageHero';

export default function PlaceholderPage({ title, description }) {
  return (
    <>
      <PageHero title={title} subtitle={description} />
      <section className="placeholder-content">
        <div className="container">
          <div className="placeholder-card">
            <p>
              Detailed content for this page is coming soon. In the meantime, reach out to
              {' '}
              <a href="mailto:support@trotter.com">support@trotter.com</a>
              {' '}
              if you have any questions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
