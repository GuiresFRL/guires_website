const OPPORTUNITY_TYPES = [
    { type: 'full-time', title: 'Full Time', desc: 'Long-term roles across engineering, design, data, business and research — build your career with us.' },
    { type: 'contract', title: 'Contract', desc: 'Project-based engagements for specialists who want flexibility without sacrificing meaningful work.' },
    { type: 'internship', title: 'Internships', desc: 'Hands-on experience on live projects, with mentorship and a real shot at a full-time offer.' }
];

function OpportunityTypes() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.cw-opp-card, .cw-opp-head'),
            { opacity: 0, y: 28 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } }
        );
    }, []);

    return (
        <section ref={ref} className="py-20 lg:py-32 bg-white">
            <div className="tg-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20 items-end">
                    <div className="lg:col-span-8">
                        <div className="cw-opp-head tg-eyebrow mb-6">Open Roles</div>
                        <h2 className="cw-opp-head tg-h2">Find Your Next Opportunity</h2>
                    </div>
                    <div className="cw-opp-head lg:col-span-4 lg:text-right">
                        <a href={`${CAREERS_BASE}/jobs/`} className="tg-btn tg-btn--primary">View all jobs <div className="icon-arrow-right"></div></a>
                    </div>
                </div>

                <div>
                    {OPPORTUNITY_TYPES.map((opp, i) => {
                        const count = JOBS_DATA.filter((j) => j.type === opp.type).length;
                        return (
                            <a
                                key={opp.type}
                                href={`${CAREERS_BASE}/jobs/?type=${opp.type}`}
                                className="cw-opp-card tg-index-row group grid grid-cols-12 gap-x-4 items-baseline py-8 lg:py-10"
                            >
                                <span className="col-span-2 lg:col-span-1 text-sm font-medium text-[var(--muted)] tabular-nums">0{i + 1}</span>
                                <h3 className="tg-index-title col-span-10 lg:col-span-4 text-[clamp(1.75rem,3.6vw,3.25rem)] font-medium tracking-[-0.035em] leading-none">{opp.title}</h3>
                                <p className="col-span-10 col-start-3 lg:col-start-auto lg:col-span-4 text-[var(--muted)] leading-relaxed mt-3 lg:mt-0">{opp.desc}</p>
                                <div className="col-span-10 col-start-3 lg:col-start-auto lg:col-span-3 flex items-center lg:justify-end gap-4 mt-4 lg:mt-0">
                                    <span className="text-sm font-semibold">{count} open role{count === 1 ? '' : 's'}</span>
                                    <span className="tg-index-arrow icon-arrow-right text-xl"></span>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
