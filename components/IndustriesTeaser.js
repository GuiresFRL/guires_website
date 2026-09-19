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
        img: 'https://images.unsplash.com/photo-1624362772755-4d5843e67047?auto=format&fit=crop&q=80&w=1000'
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
    const firstRender = React.useRef(true);

    React.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.industries-reveal', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out', scrollTrigger: { trigger: '#industries-teaser', start: 'top 70%' } });
    }, []);

    React.useEffect(() => {
        if (firstRender.current) { firstRender.current = false; return; }
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        if (imgRef.current) gsap.fromTo(imgRef.current, { opacity: 0, scale: 1.03 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' });
        if (textRef.current) gsap.fromTo(textRef.current.children, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.35, stagger: 0.05 });
    }, [active]);

    const current = INDUSTRY_TABS[active];

    return (
        <section id="industries-teaser" className="py-24 lg:py-36" style={{ background: 'var(--lilac)' }} data-name="industries-teaser" data-file="components/IndustriesTeaser.js">
            <div className="tg-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20 items-end">
                    <div className="industries-reveal lg:col-span-8">
                        <div className="tg-eyebrow !text-[var(--ink)] mb-6">Industry-Specific Solutions</div>
                        <h2 className="tg-h2">Reimagining Possibilities Across Industries</h2>
                    </div>
                    <p className="industries-reveal lg:col-span-4 leading-relaxed text-[#010120CC]">From healthcare to food science and beyond &mdash; we bring deep domain expertise and rigorous research to accelerate outcomes that matter.</p>
                </div>

                <div className="industries-reveal grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                    <div className="lg:col-span-5" role="tablist" aria-label="Industries">
                        {INDUSTRY_TABS.map((tab, i) => (
                            <button
                                key={tab.title}
                                role="tab"
                                id={`industry-tab-${i}`}
                                aria-selected={i === active}
                                aria-controls="industry-panel"
                                onClick={() => setActive(i)}
                                onMouseEnter={() => window.matchMedia('(hover: hover)').matches && setActive(i)}
                                className={`group w-full flex items-baseline gap-5 text-left py-4 border-t border-[#01012040] last:border-b transition-colors ${i === active ? 'text-[var(--ink)]' : 'text-[#01012099] hover:text-[var(--ink)]'}`}
                            >
                                <span className="text-sm font-medium tabular-nums">0{i + 1}</span>
                                <span className="flex-1 text-[clamp(1.25rem,2.2vw,1.875rem)] font-medium tracking-[-0.02em] leading-tight">{tab.title}</span>
                                <span className={`icon-arrow-right transition-all duration-300 ${i === active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}></span>
                            </button>
                        ))}
                    </div>

                    <div id="industry-panel" role="tabpanel" aria-labelledby={`industry-tab-${active}`} className="lg:col-span-7">
                        <div className="overflow-hidden mb-8 aspect-[16/10] bg-[var(--ink)]">
                            <img ref={imgRef} src={current.img} className="w-full h-full object-cover" alt={current.title} />
                        </div>
                        <div ref={textRef} className="max-w-xl">
                            <h3 className="text-3xl font-medium tracking-[-0.03em] mb-4">{current.title}</h3>
                            <p className="mb-8 leading-relaxed text-[#010120CC]">{current.desc}</p>
                            <a href="https://guiresfrl.github.io/guires_website/industries.html" className="tg-btn" style={{ background: 'var(--ink)', color: '#fff' }}>
                                Explore {current.title} <div className="icon-arrow-right"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
