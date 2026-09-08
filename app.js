function App() {
  try {
    return (
      <div className="min-h-screen bg-white text-black selection:bg-[var(--accent-secondary)] selection:text-white font-sans" data-name="app" data-file="app.js">
        <Header />
        <main>
          <Hero />
          <WhoWeAre />
          <WhatWeDo />
          <IndustriesTeaser />
          <WhyGuires />
          <OurWork />
          <InsightsSlider />
          <BrandsMarquee />
          <Impact />
          <CultureSlider />
          <ContactCTA />
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
