function ServiceTechnology({ service }) {
    const ref = React.useRef(null);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.svd-tech-elem'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 78%' } }
        );
    }, []);

    return (
        <section ref={ref} className="py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="max-w-2xl mb-14">
                    <h2 className="text-[clamp(1.9rem,3.6vw,2.5rem)] font-bold tracking-tight text-[var(--black)]">Technology-Enabled Expertise</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 rounded-[20px] overflow-hidden border border-black/10">
                    {service.technology.map((t) => (
                        <div key={t.title} className="svd-tech-elem group bg-white p-9 transition-colors duration-300 hover:bg-[var(--bg-soft)]">
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-xl bg-[#19D3E626] text-[#0C93A3] flex items-center justify-center text-2xl shrink-0 transition-transform duration-300 group-hover:scale-110"><div className={t.icon}></div></div>
                                <div>
                                    <h3 className="text-lg font-bold text-[var(--black)] mb-2">{t.title}</h3>
                                    <p className="text-sm text-[var(--muted)] leading-relaxed">{t.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
