const DOMAIN_TILES = [
    {
        title: 'Research delivery excellence',
        desc: 'End-to-end delivery of research engagements, from study design to publication, managed by domain specialists at every stage.',
        img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600'
    },
    {
        title: 'Data & biostatistics labs',
        desc: 'Our data & biostatistics labs go beyond experimentation to embed rigor into every study — helping teams move from raw data to publication-ready results, faster.',
        img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=600'
    },
    {
        title: 'Regulatory & compliance council',
        desc: 'A dedicated council of regulatory and pharmacovigilance experts keeping submissions compliant with evolving global standards.',
        img: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&q=80&w=600'
    },
    {
        title: 'Publication & communication studio',
        desc: 'Scientific writers and communication specialists turning complex research into clear, publication-ready manuscripts and materials.',
        img: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=600'
    }
];

const DOMAIN_SURFACES = [
    { bg: 'var(--purple)', fg: '#ffffff', sub: 'rgba(255,255,255,0.82)', span: 'lg:col-span-7' },
    { bg: 'var(--accent-cyan)', fg: 'var(--ink)', sub: 'rgba(1,1,32,0.78)', span: 'lg:col-span-5' },
    { bg: 'var(--lilac)', fg: 'var(--ink)', sub: 'rgba(1,1,32,0.78)', span: 'lg:col-span-5' },
    { bg: 'var(--accent)', fg: '#ffffff', sub: 'rgba(255,255,255,0.88)', span: 'lg:col-span-7' }
];

function DomainBand() {
    React.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.domain-reveal', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out', scrollTrigger: { trigger: '#domain-band', start: 'top 75%' } });
        gsap.fromTo('.tile-reveal', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: '#domain-band .tile-grid', start: 'top 80%' } });
    }, []);

    return (
        <section id="domain-band" className="tg-on-ink py-24 lg:py-36 text-white" style={{ background: 'var(--ink-navy)' }} data-name="domain-band" data-file="components/DomainBand.js">
            <div className="tg-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24 items-end">
                    <div className="lg:col-span-8">
                        <div className="domain-reveal tg-eyebrow mb-6">Featured Solutions</div>
                        <h2 className="domain-reveal tg-h2">
                            Where deep domain expertise meets scientific excellence
                        </h2>
                    </div>
                    <p className="domain-reveal lg:col-span-4 text-white/70 leading-relaxed">
                        Our delivery model combines deep domain expertise, engineering excellence and a data-first mindset to solve complex research challenges &mdash; helping clients scale confidently and deliver outcomes that matter.
                    </p>
                </div>
                <div className="tile-grid grid grid-cols-1 lg:grid-cols-12 gap-4">
                    {DOMAIN_TILES.map((tile, i) => {
                        const s = DOMAIN_SURFACES[i % DOMAIN_SURFACES.length];
                        return (
                            <a
                                key={tile.title}
                                href="https://guiresfrl.github.io/guires_website/services.html"
                                className={`tile-reveal group relative flex flex-col justify-between min-h-[440px] p-7 lg:p-10 overflow-hidden ${s.span}`}
                                style={{ background: s.bg, color: s.fg }}
                            >
                                <div className="flex items-start justify-between gap-6">
                                    <span className="text-sm font-medium tabular-nums opacity-80">0{i + 1}</span>
                                    <span className="icon-arrow-up-right text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></span>
                                </div>
                                <div className="relative z-10 mt-16">
                                    <h3 className="text-[clamp(1.75rem,3vw,2.75rem)] font-medium tracking-[-0.03em] leading-[1.05] mb-5 max-w-md">{tile.title}</h3>
                                    <p className="max-w-md leading-relaxed" style={{ color: s.sub }}>{tile.desc}</p>
                                </div>
                                <img
                                    src={tile.img}
                                    alt=""
                                    loading="lazy"
                                    className="absolute right-0 top-0 h-[46%] w-[46%] object-cover mix-blend-multiply opacity-30 grayscale transition-all duration-500 group-hover:opacity-50 group-hover:scale-105 pointer-events-none"
                                    style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)' }}
                                />
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
