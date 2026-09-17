const OPPORTUNITY_TYPES = [
    { type: 'full-time', icon: 'icon-briefcase', title: 'Full Time', desc: 'Long-term roles across engineering, design, data, business and research — build your career with us.' },
    { type: 'contract', icon: 'icon-file-pen', title: 'Contract', desc: 'Project-based engagements for specialists who want flexibility without sacrificing meaningful work.' },
    { type: 'internship', icon: 'icon-graduation-cap', title: 'Internships', desc: 'Hands-on experience on live projects, with mentorship and a real shot at a full-time offer.' }
];

function OpportunityTypes() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.cw-opp-card'),
            { opacity: 0, y: 28 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 78%' } }
        );
    }, []);

    return (
        <section ref={ref} className="py-14 lg:py-20 bg-[var(--cw-bg)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="max-w-2xl mb-14">
                    <div className="text-xs font-bold tracking-[0.2em] text-[var(--cw-accent)] uppercase mb-4">Open Roles</div>
                    <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--cw-text)]">Find Your Next Opportunity</h2>
                    <div className="w-12 h-1.5 rounded-full bg-[var(--cw-accent)] mt-5"></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {OPPORTUNITY_TYPES.map((opp) => {
                        const count = JOBS_DATA.filter((j) => j.type === opp.type).length;
                        return (
                            <a
                                key={opp.type}
                                href={`${CAREERS_BASE}/jobs/?type=${opp.type}`}
                                className="cw-opp-card group relative rounded-2xl bg-[var(--cw-surface)] border border-[var(--cw-border)] p-8 lg:p-10 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-[#0C4DA266]"
                            >
                                <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-[#0C4DA20D] transition-transform duration-500 group-hover:scale-150"></div>
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-xl bg-[#0C4DA21A] text-[var(--cw-accent)] flex items-center justify-center text-2xl mb-8 transition-transform duration-300 group-hover:scale-110">
                                        <div className={opp.icon}></div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-[var(--cw-text)] mb-3">{opp.title}</h3>
                                    <p className="text-sm text-[var(--cw-muted)] leading-relaxed mb-8">{opp.desc}</p>
                                    <div className="flex items-center justify-between pt-6 border-t border-[var(--cw-border)]">
                                        <span className="text-sm font-semibold text-[var(--cw-text)]">{count} open role{count === 1 ? '' : 's'}</span>
                                        <div className="w-9 h-9 rounded-full border border-[var(--cw-border)] flex items-center justify-center text-[var(--cw-text)] transition-all duration-300 group-hover:bg-[var(--cw-accent)] group-hover:text-white group-hover:border-[var(--cw-accent)] group-hover:translate-x-1">
                                            <div className="icon-arrow-right text-sm"></div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
