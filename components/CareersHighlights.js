function CareersHighlights() {
    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('#careers-band .careers-reveal', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out', scrollTrigger: { trigger: '#careers-band', start: 'top 80%' } });
        gsap.fromTo('.careers-card', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: '.careers-card', start: 'top 85%' } });
    }, []);

    return (
        <section id="careers-band" className="py-24 bg-white" data-name="careers-highlights" data-file="components/CareersHighlights.js">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="careers-reveal text-center max-w-2xl mx-auto mb-12">
                    <div className="text-xs font-bold tracking-wider text-gray-500 uppercase mb-4">Careers &amp; Cultural Highlights</div>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6"><span className="text-[var(--accent)]">Grow</span> With Us</h2>
                    <p className="text-gray-600 leading-relaxed mb-8">GUIRES&rsquo;s culture is rooted in continuous learning, scientific curiosity, and pushing the boundaries of what rigorous research can achieve.</p>
                    <a href="https://guiresfrl.github.io/guires_website/careers.html" className="rounded-full px-7 py-3.5 bg-[var(--accent)] text-white text-sm font-semibold uppercase tracking-wide hover:bg-blue-800 transition-colors inline-flex items-center gap-2">
                        See Open Roles <div className="icon-chevron-right"></div>
                    </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="careers-card bg-gray-50 rounded-lg overflow-hidden">
                        <div className="h-64 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1666886573531-48d2e3c2b684?auto=format&fit=crop&q=80&w=700" className="w-full h-full object-cover" alt="" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-3">GUIRES Learning Academy</h3>
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">A home for the curious, our learning academy blends research, regulatory and data science training to grow domain-native experts ready for real-world impact.</p>
                            <a href="https://guiresfrl.github.io/guires_website/careers.html" className="text-sm font-semibold text-[var(--accent)] hover:underline">Know More</a>
                        </div>
                    </div>

                    <div className="careers-card bg-gray-50 rounded-lg overflow-hidden lg:mt-10">
                        <div className="relative h-72 overflow-hidden cursor-pointer group">
                            <img src="https://images.unsplash.com/photo-1631039302217-5a6c56371e86?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="" />
                            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center text-[var(--accent)] text-2xl group-hover:scale-110 transition-transform duration-300">
                                    <div className="icon-play"></div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 flex items-start justify-between gap-4">
                            <h3 className="text-base font-semibold leading-snug">How we cut publication turnaround from 9 months to 3</h3>
                            <a href="https://guiresfrl.github.io/guires_website/insights.html" className="text-sm font-semibold text-[var(--accent)] hover:underline shrink-0 whitespace-nowrap">Watch Now</a>
                        </div>
                    </div>

                    <div className="careers-card bg-gray-50 rounded-lg overflow-hidden">
                        <div className="h-64 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&q=80&w=700" className="w-full h-full object-cover" alt="" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-3">Global Team Connect</h3>
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">A day of learning, laughter and togetherness where our global team experiences the curiosity, collaboration and spirit that define GUIRES.</p>
                            <a href="https://guiresfrl.github.io/guires_website/careers.html" className="text-sm font-semibold text-[var(--accent)] hover:underline">Know More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
