function SplitFeature() {
    React.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.split-img', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '#split-feature', start: 'top 70%' } });
        gsap.fromTo('.split-reveal', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: '#split-feature', start: 'top 65%' } });
    }, []);

    const pillars = [
        'Speed to insight through research',
        'Speed to compliance through expertise',
        'Speed to scale through global partnerships'
    ];

    return (
        <section id="split-feature" className="py-24 lg:py-36 bg-[var(--bg-soft)] overflow-hidden" data-name="split-feature" data-file="components/SplitFeature.js">
            <div className="tg-container grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
                <div className="split-img relative h-[380px] sm:h-[460px] lg:h-[560px] lg:col-span-5">
                    <div className="absolute left-0 top-0 w-[92%] h-[42%] bg-[var(--lilac)] overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 78% 100%, 0% 100%)' }}>
                        <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover mix-blend-multiply opacity-80" alt="" loading="lazy" />
                    </div>
                    <div className="absolute left-[8%] top-[14%] w-[68%] h-[80%] overflow-hidden border-8 border-[var(--bg-soft)]">
                        <img src="https://images.unsplash.com/photo-1618053448492-2b629c2c912c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Research specialist" loading="lazy" />
                    </div>
                    <div className="absolute right-[4%] bottom-0 w-16 h-16 bg-[var(--accent)]"></div>
                </div>

                <div className="lg:col-span-7 lg:pl-10">
                    <div className="split-reveal tg-eyebrow mb-6">Why GUIRES</div>
                    <h2 className="split-reveal tg-h2 !text-[clamp(2rem,4.2vw,3.75rem)] mb-8">
                        Powering last-mile delivery with domain-specific research solutions
                    </h2>
                    <p className="split-reveal tg-lead text-[var(--muted)] mb-12 max-w-2xl">
                        At GUIRES, we bridge the gap between research design and real-world outcomes by enabling fast, compliant delivery across research, regulatory and scientific communication disciplines.
                    </p>

                    <div className="split-reveal text-sm font-semibold uppercase tracking-[0.14em] mb-2">What makes us unique</div>
                    <ol className="split-reveal mb-12">
                        {pillars.map((text, i) => (
                            <li key={text} className="tg-hairline flex items-baseline gap-6 py-5">
                                <span className="text-sm font-medium text-[var(--accent-secondary)] tabular-nums">0{i + 1}</span>
                                <span className="text-xl lg:text-2xl font-medium tracking-tight">{text}</span>
                            </li>
                        ))}
                    </ol>

                    <a href="https://guiresfrl.github.io/guires_website/case-studies.html" className="split-reveal tg-btn tg-btn--primary">
                        Explore Our Success Stories <div className="icon-arrow-right"></div>
                    </a>
                </div>
            </div>
        </section>
    );
}
