const WHY_WORK_CARDS = [
    { num: '01', title: 'Growth', desc: 'Structured mentorship, learning budgets and clear paths to take on more responsibility over time.' },
    { num: '02', title: 'Impact', desc: 'Your work directly supports healthcare and life sciences organizations solving real research challenges.' },
    { num: '03', title: 'People', desc: 'A collaborative, low-ego team that shares knowledge freely and celebrates each other’s wins.' },
    { num: '04', title: 'Innovation', desc: 'Room to explore new tools, ideas and approaches — we back thoughtful risk-taking.' }
];

function WhyWorkWithUs() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.cw-why-card, .cw-why-head'),
            { opacity: 0, y: 28 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } }
        );
    }, []);

    return (
        <section id="why-work-with-us" ref={ref} className="py-20 lg:py-32 bg-[var(--cw-surface-2)] scroll-mt-20">
            <div className="tg-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24 items-end">
                    <div className="lg:col-span-8">
                        <div className="cw-why-head tg-eyebrow mb-6">Why GUIRES</div>
                        <h2 className="cw-why-head tg-h2">Why Work With Us?</h2>
                    </div>
                    <p className="cw-why-head lg:col-span-4 text-[var(--muted)] leading-relaxed">Four things we hold ourselves to, and expect to be held to.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {WHY_WORK_CARDS.map((card, i) => (
                        <div key={card.title} className={`cw-why-card border-t-2 border-[var(--ink)] pt-6 pb-12 ${i > 0 ? 'lg:pl-8' : ''} lg:pr-8`}>
                            <div className="tg-num !text-[clamp(2.5rem,4vw,3.75rem)] mb-12" style={{ color: i === 0 ? 'var(--accent)' : 'var(--ink)' }}>{card.num}</div>
                            <h3 className="text-2xl font-medium tracking-[-0.02em] mb-3">{card.title}</h3>
                            <p className="text-[var(--muted)] leading-relaxed">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
