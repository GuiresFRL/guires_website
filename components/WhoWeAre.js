function WhoWeAre() {
    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        gsap.utils.toArray('.wwa-reveal').forEach((elem) => {
            gsap.fromTo(elem, 
                { opacity: 0, y: 40 },
                {
                    opacity: 1, 
                    y: 0,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: elem,
                        start: 'top 80%',
                    }
                }
            );
        });
    }, []);

    const values = ['Curiosity', 'Integrity', 'Innovation', 'Collaboration', 'Impact'];

    return (
        <section id="who-we-are" className="relative py-32 bg-[#EEF3FA] border-t border-black/5 overflow-hidden" data-name="who-we-are" data-file="components/WhoWeAre.js">
            <svg className="absolute -right-28 -top-28 w-[420px] h-[420px] text-[#0C4DA2]/10 pointer-events-none" viewBox="0 0 400 400" fill="none">
                <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="90" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <h2 className="wwa-reveal text-[clamp(3rem,6vw,5rem)] font-bold mb-24">We are GUIRES.</h2>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-16">
                    <div className="md:col-span-4">
                        <h3 className="wwa-reveal text-sm font-bold tracking-wider text-gray-500 mb-6 uppercase">Our Purpose</h3>
                        <p className="wwa-reveal text-2xl font-medium leading-relaxed">
                            To advance research, regulatory and scientific excellence for healthcare and life sciences organizations worldwide.
                        </p>
                    </div>

                    <div className="md:col-span-4">
                        <h3 className="wwa-reveal text-sm font-bold tracking-wider text-gray-500 mb-6 uppercase">Our Vision</h3>
                        <p className="wwa-reveal text-2xl font-medium leading-relaxed">
                            A world where rigorous research and human expertise combine to accelerate better health and scientific outcomes.
                        </p>
                    </div>

                    <div className="md:col-span-4">
                        <h3 className="wwa-reveal text-sm font-bold tracking-wider text-gray-500 mb-6 uppercase">Our Values</h3>
                        <ul className="wwa-reveal flex flex-col gap-4">
                            {values.map((val, i) => (
                                <li key={i} className="text-2xl font-medium text-gray-700 flex items-center gap-4">
                                    <span className="text-[var(--accent)] text-sm">{`0${i+1}`}</span> {val}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <a href="https://guiresfrl.github.io/guires_website/about-us.html" className="wwa-reveal inline-flex items-center gap-2 text-lg font-medium text-[var(--accent)] hover:gap-4 transition-all duration-300">
                    Learn more about GUIRES <div className="icon-arrow-right"></div>
                </a>
            </div>
        </section>
    );
}