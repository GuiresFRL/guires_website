const WHY_WORK_CARDS = [
    { icon: 'icon-trending-up', title: 'Growth', desc: 'Structured mentorship, learning budgets and clear paths to take on more responsibility over time.' },
    { icon: 'icon-target', title: 'Impact', desc: 'Your work directly supports healthcare and life sciences organizations solving real research challenges.' },
    { icon: 'icon-users', title: 'People', desc: 'A collaborative, low-ego team that shares knowledge freely and celebrates each other’s wins.' },
    { icon: 'icon-lightbulb', title: 'Innovation', desc: 'Room to explore new tools, ideas and approaches — we back thoughtful risk-taking.' }
];

function WhyWorkWithUs() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.cw-why-card'),
            { opacity: 0, y: 28 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 78%' } }
        );
    }, []);

    return (
        <section id="why-work-with-us" ref={ref} className="py-14 lg:py-20 bg-[var(--cw-surface-2)] scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="max-w-2xl mb-14">
                    <div className="text-xs font-bold tracking-[0.2em] text-[var(--cw-accent)] uppercase mb-4">Why GUIRES</div>
                    <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--cw-text)]">Why Work With Us?</h2>
                    <div className="w-12 h-1.5 rounded-full bg-[var(--cw-accent)] mt-5"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
                    {WHY_WORK_CARDS.map((card) => (
                        <div
                            key={card.title}
                            className="cw-why-card group rounded-2xl bg-[var(--cw-surface)] border border-[var(--cw-border)] p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#0C4DA24D]"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#0C4DA21A] text-[var(--cw-accent)] flex items-center justify-center text-2xl mb-6 transition-transform duration-300 group-hover:scale-110">
                                <div className={card.icon}></div>
                            </div>
                            <h3 className="text-lg font-bold text-[var(--cw-text)] mb-2">{card.title}</h3>
                            <p className="text-sm text-[var(--cw-muted)] leading-relaxed">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
