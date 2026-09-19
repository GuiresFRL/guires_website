function ServicesFinalCTA() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.svc-cta-elem'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } }
        );
    }, []);

    return (
        <section ref={ref} className="fs-band fs-band--accent relative py-28 lg:py-44 overflow-hidden" >
            <div className="relative z-10 tg-container">
                <h2 className="svc-cta-elem tg-display max-w-[15ch] mb-12 !text-[clamp(3rem,8vw,8rem)]">Have a Research or Data Challenge?</h2>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                    <p className="svc-cta-elem lg:col-span-6 tg-lead max-w-xl">Tell us what you&rsquo;re trying to solve and our experts will help identify the right approach.</p>
                    <div className="svc-cta-elem lg:col-span-6 flex flex-wrap gap-3 lg:justify-end">
                        <a href="https://guiresfrl.github.io/guires_website/contact-us.html" className="tg-btn tg-btn--light !py-5 !px-8">
                            Talk to Our Experts <div className="icon-arrow-right"></div>
                        </a>
                        <a href="#service-ecosystem" className="tg-btn tg-btn--ghost-light !py-5 !px-8">
                            Explore Our Services
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
