function SplitFeature() {
    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.split-img', { opacity: 0, scale: 0.94 }, { opacity: 1, scale: 1, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '#split-feature', start: 'top 70%' } });
        gsap.fromTo('.split-reveal', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: '#split-feature', start: 'top 65%' } });
    }, []);

    return (
        <section id="split-feature" className="py-24 bg-white overflow-hidden" data-name="split-feature" data-file="components/SplitFeature.js">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="split-img relative h-[420px]">
                    <div className="absolute left-0 top-0 w-[92%] h-[42%] bg-gray-100 overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 78% 100%, 0% 100%)' }}>
                        <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-70" alt="" />
                    </div>
                    <div className="absolute left-[8%] top-[14%] w-[62%] h-[78%] rounded-lg overflow-hidden shadow-xl">
                        <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Research specialist" />
                    </div>
                </div>
                <div>
                    <h2 className="split-reveal text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                        Powering last-mile delivery with domain-specific research solutions
                    </h2>
                    <p className="split-reveal text-gray-600 text-lg mb-10 leading-relaxed">
                        At GUIRES, we bridge the gap between research design and real-world outcomes by enabling fast, compliant delivery across research, regulatory and scientific communication disciplines.
                    </p>
                    <h3 className="split-reveal text-2xl font-bold mb-8">What makes us unique</h3>
                    <div className="grid grid-cols-3 gap-6 mb-10">
                        <div className="split-reveal text-center">
                            <div className="icon-target text-4xl text-[var(--accent)] mb-4"></div>
                            <div className="text-sm text-gray-600 leading-snug">Speed to insight through research</div>
                        </div>
                        <div className="split-reveal text-center">
                            <div className="icon-badge-check text-4xl text-[var(--accent)] mb-4"></div>
                            <div className="text-sm text-gray-600 leading-snug">Speed to compliance through expertise</div>
                        </div>
                        <div className="split-reveal text-center">
                            <div className="icon-handshake text-4xl text-[var(--accent)] mb-4"></div>
                            <div className="text-sm text-gray-600 leading-snug">Speed to scale through global partnerships</div>
                        </div>
                    </div>
                    <a href="https://guiresfrl.github.io/guires_website/case-studies.html" className="split-reveal rounded-full px-8 py-4 bg-[var(--accent)] text-white text-sm font-semibold hover:bg-blue-800 transition-colors inline-flex items-center gap-2">
                        Explore Our Success Stories
                    </a>
                </div>
            </div>
        </section>
    );
}
