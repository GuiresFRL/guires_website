function ServiceDetailPage({ slug }) {
    const service = SERVICE_DETAILS[slug];

    if (!service) {
        return (
            <section className="pt-40 pb-24 text-center max-w-xl mx-auto px-6">
                <h1 className="text-3xl font-bold text-[var(--black)] mb-4">Service not found</h1>
                <p className="text-[var(--muted)] mb-8">This service page may have moved or the link is incorrect.</p>
                <a href="https://guiresfrl.github.io/guires_website/services/" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] text-white text-sm font-semibold px-6 py-3">
                    View All Services <div className="icon-arrow-right"></div>
                </a>
            </section>
        );
    }

    return (
        <React.Fragment>
            <ServiceDetailHero service={service} />
            <ServiceChallenge service={service} />
            <ServiceOverview service={service} />
            <ServiceCapabilities service={service} />
            <ServiceProofMetrics service={service} />
            <WhyGuiresSection service={service} />
            <ServiceCaseStudyDetail service={service} />
            <ServiceInsightsDetail service={service} />
            <ServiceFAQ service={service} />
            <ServiceDetailFinalCTA service={service} />
        </React.Fragment>
    );
}
