function ServiceCaseStudyDetail({ service }) {
    const ref = React.useRef(null);
    const cs = service.caseStudy;

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.svd-cs-elem'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 78%' } }
        );
    }, []);

    return (
        <section ref={ref} className="py-14 lg:py-16 bg-white">
            <div className="max-w-5xl mx-auto px-6 lg:px-12">
                <div className="svd-cs-elem rounded-[20px] border border-black/10 bg-[var(--bg-soft)] p-9 lg:p-14">
                    <div className="flex items-center justify-between gap-4 mb-8">
                        <div className="text-xs font-bold tracking-[0.2em] text-[var(--accent)] uppercase">{cs.clientIndustry}</div>
                        <div className="rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--muted)] border border-black/10">Placeholder Case Study</div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                        <div>
                            <h3 className="text-sm font-bold text-[var(--black)] mb-2">The Challenge</h3>
                            <p className="text-[var(--muted)] leading-relaxed">{cs.challenge}</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-[var(--black)] mb-2">The Approach</h3>
                            <p className="text-[var(--muted)] leading-relaxed">{cs.approach}</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-[var(--black)] mb-2">The Solution</h3>
                            <p className="text-[var(--muted)] leading-relaxed">{cs.solution}</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-[var(--black)] mb-2">The Outcome</h3>
                            <p className="text-[var(--muted)] leading-relaxed">Measurable outcomes below, to be confirmed with verified figures.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6 pt-8 border-t border-black/10">
                        {cs.outcomes.map((o) => (
                            <div key={o.label} className="text-center">
                                <div className="text-3xl lg:text-4xl font-bold text-[var(--accent)] mb-1">{o.value}</div>
                                <div className="text-xs text-[var(--muted)] font-medium">{o.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
