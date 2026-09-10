const INDUSTRY_TABS = [
    {
        title: 'Healthcare & Life Sciences', icon: 'icon-heart-pulse',
        desc: 'Supporting pharmaceutical, biotechnology and medical device organizations with research, regulatory and pharmacovigilance expertise that keeps pace with evolving global standards.',
        img: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=1000'
    },
    {
        title: 'Pharmaceuticals', icon: 'icon-pill',
        desc: 'Research, regulatory and pharmacovigilance support that helps pharmaceutical organizations bring safe, compliant products to market faster.',
        img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1000'
    },
    {
        title: 'Medical Devices', icon: 'icon-stethoscope',
        desc: 'Regulatory and clinical research support across the medical device lifecycle, from design validation through post-market surveillance.',
        img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000'
    },
    {
        title: 'Biotechnology', icon: 'icon-dna',
        desc: 'Data-driven research and statistical rigor supporting biotechnology organizations from discovery through clinical development.',
        img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1000'
    },
    {
        title: 'Diagnostics', icon: 'icon-microscope',
        desc: 'Advancing diagnostics R&D with rigorous study design, data analysis and regulatory support tailored to evolving standards.',
        img: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1000'
    },
    {
        title: 'Nutraceuticals', icon: 'icon-leaf',
        desc: 'Research and regulatory support helping nutraceutical organizations validate claims and bring products to market with confidence.',
        img: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=1000'
    },
    {
        title: 'Food', icon: 'icon-apple',
        desc: 'Sensory evaluation and food research & development support that helps food science organizations innovate with confidence.',
        img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1000'
    },
    {
        title: 'Retail', icon: 'icon-shopping-cart',
        desc: 'Research and data intelligence that helps retail organizations understand customers and make evidence-based decisions.',
        img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000'
    }
];

function IndustriesTeaser() {
    const [active, setActive] = React.useState(0);
    const imgRef = React.useRef(null);
    const textRef = React.useRef(null);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.industries-reveal', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: '#industries-teaser', start: 'top 70%' } });
        gsap.fromTo('.chip-reveal', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out', scrollTrigger: { trigger: '.chip-row', start: 'top 90%' } });
    }, []);

    React.useEffect(() => {
        if (imgRef.current) {
            gsap.fromTo(imgRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
        }
        if (textRef.current) {
            gsap.fromTo(textRef.current.children, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.35, stagger: 0.05 });
        }
    }, [active]);

    const current = INDUSTRY_TABS[active];

    return (
        <section id="industries-teaser" className="relative py-24 overflow-hidden" data-name="industries-teaser" data-file="components/IndustriesTeaser.js">
            <div className="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-[#081B33]/95"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="industries-reveal text-center max-w-3xl mx-auto mb-14">
                    <span className="inline-block border border-white/30 rounded-full px-5 py-2 text-xs font-bold tracking-wider text-white uppercase mb-6">Industry-Specific Solutions</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Reimagining Possibilities Across Industries</h2>
                    <p className="text-white/60">From healthcare to food science and beyond &mdash; we bring deep domain expertise and rigorous research to accelerate outcomes that matter.</p>
                </div>

                <div className="industries-reveal grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-14">
                    <div ref={textRef}>
                        <div className="w-14 h-14 rounded-xl bg-[var(--accent)] flex items-center justify-center text-white text-2xl mb-6">
                            <div className={current.icon}></div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{current.title}</h3>
                        <p className="text-white/60 mb-8 leading-relaxed">{current.desc}</p>
                        <a href="https://guiresfrl.github.io/guires_website/industries.html" className="rounded-full px-6 py-3 bg-[var(--accent)] text-white text-sm font-semibold hover:bg-blue-800 transition-colors inline-flex items-center gap-2">
                            Explore {current.title} <div className="icon-arrow-right"></div>
                        </a>
                    </div>
                    <div className="rounded-lg overflow-hidden h-80">
                        <img ref={imgRef} src={current.img} className="w-full h-full object-cover" alt={current.title} />
                    </div>
                </div>

                <div className="industries-reveal flex justify-center">
                    <div className="chip-row inline-flex items-center gap-2 bg-white rounded-full p-2 flex-wrap justify-center">
                        {INDUSTRY_TABS.map((tab, i) => (
                            <button
                                key={tab.title}
                                onClick={() => setActive(i)}
                                title={tab.title}
                                className={`chip-reveal w-11 h-11 rounded-full flex items-center justify-center text-lg transition-colors ${i === active ? 'bg-[var(--accent)] text-white' : 'text-gray-500 hover:bg-gray-100'}`}
                            >
                                <div className={tab.icon}></div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
