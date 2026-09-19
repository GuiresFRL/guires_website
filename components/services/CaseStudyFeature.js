const SMALL_CASE_STUDIES = [
    { industry: 'Biopharma', title: 'Streamlining Statistical Programming for a Multi-Site Trial', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=700' },
    { industry: 'Medical Devices', title: 'Competitive Intelligence Ahead of a Product Launch', img: 'https://images.unsplash.com/photo-1581093458791-9f3113e6b3e3?auto=format&fit=crop&q=80&w=700' },
    { industry: 'Diagnostics', title: 'Building a Real-World Evidence Framework', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=700' }
];

function CaseStudyFeature() {
    const ref = React.useRef(null);
    const href = 'https://guiresfrl.github.io/guires_website/case-studies.html';

    React.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.svc-case-elem'),
            { opacity: 0, y: 26 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 75%' } }
        );
    }, []);

    return (
        <section ref={ref} className="fs-band fs-band--paper py-24 lg:py-36">
            <div className="tg-container">
                <div className="svc-case-elem grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 lg:mb-20 items-end">
                    <h2 className="tg-h2 lg:col-span-8">Research That Creates Measurable Impact</h2>
                    <a href={href} className="tg-btn tg-btn--ghost lg:col-span-4 lg:justify-self-end self-start">All case studies <div className="icon-arrow-right"></div></a>
                </div>

                <div className="svc-case-elem grid grid-cols-1 lg:grid-cols-12 mb-16 bg-white">
                    <div className="relative lg:col-span-6 min-h-[18rem]">
                        <img src="https://lumanity.com/wp-content/uploads/2025/09/Person-on-mountain.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute top-4 left-4 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[var(--ink)]">Placeholder Case Study</div>
                    </div>
                    <div className="lg:col-span-6 p-8 lg:p-14">
                        <div className="tg-eyebrow mb-8">Biopharma &middot; Data &amp; Analytics</div>
                        <dl className="mb-10">
                            <div className="tg-hairline py-5"><dt className="text-sm font-semibold mb-2">The Challenge</dt><dd className="text-[var(--muted)] leading-relaxed">A global biopharma client needed to consolidate fragmented clinical datasets ahead of a regulatory submission.</dd></div>
                            <div className="tg-hairline py-5"><dt className="text-sm font-semibold mb-2">The Approach</dt><dd className="text-[var(--muted)] leading-relaxed">GUIRES deployed a dedicated statistical programming and data management team to standardize and validate datasets.</dd></div>
                            <div className="tg-hairline py-5"><dt className="text-sm font-semibold mb-2">The Impact</dt><dd className="text-[var(--muted)] leading-relaxed">Submission-ready datasets delivered ahead of schedule, with full audit-trail documentation.</dd></div>
                        </dl>
                        <a href={href} className="tg-btn tg-btn--primary">Read Case Study <div className="icon-arrow-right"></div></a>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-10">
                    {SMALL_CASE_STUDIES.map((cs) => (
                        <a key={cs.title} href={href} className="svc-case-elem group block">
                            <div className="overflow-hidden mb-5 aspect-[4/3] bg-[var(--ink)]">
                                <img src={cs.img} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <div className="tg-eyebrow mb-3">{cs.industry}</div>
                            <h3 className="text-xl tracking-[-0.02em] leading-snug transition-colors group-hover:text-[var(--accent-secondary)]">{cs.title}</h3>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
