function CareersHighlights() {
    React.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('#careers-band .careers-reveal', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out', scrollTrigger: { trigger: '#careers-band', start: 'top 80%' } });
        gsap.fromTo('.careers-card', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: '.careers-card', start: 'top 85%' } });
    }, []);

    const SITE_URL = 'https://guiresfrl.github.io/guires_website';

    return (
        <section id="careers-band" className="py-24 lg:py-36 bg-white" data-name="careers-highlights" data-file="components/CareersHighlights.js">
            <div className="tg-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20 items-end">
                    <div className="careers-reveal lg:col-span-8">
                        <div className="tg-eyebrow mb-6">Careers &amp; Cultural Highlights</div>
                        <h2 className="tg-h2"><span className="text-[var(--accent-secondary)]">Grow</span> With Us</h2>
                    </div>
                    <div className="careers-reveal lg:col-span-4">
                        <p className="text-[var(--muted)] leading-relaxed mb-6">GUIRES&rsquo;s culture is rooted in continuous learning, scientific curiosity, and pushing the boundaries of what rigorous research can achieve.</p>
                        <a href={`${SITE_URL}/careers/jobs/`} className="tg-btn tg-btn--primary">See Open Roles <div className="icon-arrow-right"></div></a>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-14">
                    <article className="careers-card group">
                        <div className="aspect-[4/3] overflow-hidden mb-6 bg-[var(--ink)]">
                            <img src="https://images.unsplash.com/photo-1666886573531-48d2e3c2b684?auto=format&fit=crop&q=80&w=700" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="" loading="lazy" />
                        </div>
                        <h3 className="text-2xl font-medium tracking-[-0.02em] mb-3">GUIRES Learning Academy</h3>
                        <p className="text-[var(--muted)] leading-relaxed mb-5">A home for the curious, our learning academy blends research, regulatory and data science training to grow domain-native experts ready for real-world impact.</p>
                        <a href={`${SITE_URL}/careers/`} className="tg-link text-[var(--accent-secondary)]">Know More <span className="icon-arrow-right"></span></a>
                    </article>

                    <article className="careers-card group lg:mt-16">
                        <a href={`${SITE_URL}/insights.html`} className="relative block aspect-[4/3] overflow-hidden mb-6 bg-[var(--ink)]" aria-label="Watch: how we cut publication turnaround from 9 months to 3">
                            <img src="https://images.unsplash.com/photo-1631039302217-5a6c56371e86?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="" loading="lazy" />
                            <div className="absolute inset-0 bg-[#01012059] flex items-center justify-center">
                                <div className="w-16 h-16 bg-[var(--accent)] text-white flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110">
                                    <div className="icon-play"></div>
                                </div>
                            </div>
                        </a>
                        <h3 className="text-2xl font-medium tracking-[-0.02em] mb-3">How we cut publication turnaround from 9 months to 3</h3>
                        <a href={`${SITE_URL}/insights.html`} className="tg-link text-[var(--accent-secondary)]">Watch Now <span className="icon-arrow-right"></span></a>
                    </article>

                    <article className="careers-card group">
                        <div className="aspect-[4/3] overflow-hidden mb-6 bg-[var(--ink)]">
                            <img src="https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&q=80&w=700" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="" loading="lazy" />
                        </div>
                        <h3 className="text-2xl font-medium tracking-[-0.02em] mb-3">Global Team Connect</h3>
                        <p className="text-[var(--muted)] leading-relaxed mb-5">A day of learning, laughter and togetherness where our global team experiences the curiosity, collaboration and spirit that define GUIRES.</p>
                        <a href={`${SITE_URL}/careers/`} className="tg-link text-[var(--accent-secondary)]">Know More <span className="icon-arrow-right"></span></a>
                    </article>
                </div>
            </div>
        </section>
    );
}
