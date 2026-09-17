function CareersHomePage() {
    return (
        <React.Fragment>
            <CareersHero />
            <SpiritBand />
            <WellbeingBand />
            <WhyWorkWithUs />
            <OpportunityTypes />
            <CultureGallery />
            <StatsBand />
            <CareersCTA
                eyebrow="Join Us"
                heading="Ready to Make an Impact?"
                subtext="Explore open roles across engineering, data, design, business and research — and find where you fit."
                buttonLabel="View All Jobs"
                buttonHref={`${CAREERS_BASE}/jobs/`}
            />
        </React.Fragment>
    );
}
