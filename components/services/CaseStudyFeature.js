const SMALL_CASE_STUDIES = [
    { industry: 'Biopharma', title: 'Streamlining Statistical Programming for a Multi-Site Trial', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=700' },
    { industry: 'Medical Devices', title: 'Competitive Intelligence Ahead of a Product Launch', img: 'https://images.unsplash.com/photo-1581093458791-9f3113e6b3e3?auto=format&fit=crop&q=80&w=700' },
    { industry: 'Diagnostics', title: 'Building a Real-World Evidence Framework', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=700' }
];

function CaseStudyFeature() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.svc-case-elem'),
            { opacity: 0, y: 26 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 78%' } }
        );
    }, []);

    return (
        <section ref={ref} className="py-24 lg:py-36 bg-[var(--bg-soft)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="max-w-2xl mb-14">
                    <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-tight text-[var(--black)]">Research That Creates Measurable Impact</h2>
                </div>

                <div className="svc-case-elem grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[20px] overflow-hidden border border-black/10 bg-white mb-8">
                    <div className="relative h-72 lg:h-auto">
                        <img src="https://lumanity.com/wp-content/uploads/2025/09/Person-on-mountain.jpeg" alt="" className="w-full h-full object-cover" />
                        <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--muted)]">Placeholder Case Study</div>
                    </div>
                    <div className="p-8 lg:p-12">
                        <div className="text-xs font-bold tracking-wider text-[var(--accent)] uppercase mb-5">Biopharma &middot; Data &amp; Analytics</div>
                        <dl className="space-y-5 mb-8">
                            <div><dt className="text-sm font-bold text-[var(--black)] mb-1">The Challenge</dt><dd className="text-sm text-[var(--muted)] leading-relaxed">A global biopharma client needed to consolidate fragmented clinical datasets ahead of a regulatory submission deadline.</dd></div>
                            <div><dt className="text-sm font-bold text-[var(--black)] mb-1">The Approach</dt><dd className="text-sm text-[var(--muted)] leading-relaxed">GUIRES deployed a dedicated statistical programming and data management team to standardize and validate datasets end-to-end.</dd></div>
                            <div><dt className="text-sm font-bold text-[var(--black)] mb-1">The Impact</dt><dd className="text-sm text-[var(--muted)] leading-relaxed">Submission-ready datasets delivered ahead of schedule, with full audit-trail documentation.</dd></div>
                        </dl>
                        <a href="https://guiresfrl.github.io/guires_website/case-studies.html" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                            Read Case Study <div className="icon-arrow-right text-xs"></div>
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {SMALL_CASE_STUDIES.map((cs) => (
                        <a key={cs.title} href="https://guiresfrl.github.io/guires_website/case-studies.html" className="svc-case-elem group rounded-2xl overflow-hidden border border-black/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                            <div className="relative h-36 overflow-hidden">
                                <img src={cs.img} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            </div>
                            <div className="p-5">
                                <div className="text-[11px] font-bold tracking-wider text-[var(--accent)] uppercase mb-2">{cs.industry}</div>
                                <h3 className="text-sm font-bold text-[var(--black)] leading-snug">{cs.title}</h3>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
