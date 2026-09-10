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

function DomainBand() {
    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.domain-reveal', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out', scrollTrigger: { trigger: '#domain-band', start: 'top 75%' } });
        gsap.fromTo('.tile-reveal', { opacity: 0, y: 40, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: '#domain-band', start: 'top 55%' } });
    }, []);

    return (
        <section id="domain-band" className="py-24 bg-[#0A0A0A]" data-name="domain-band" data-file="components/DomainBand.js">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-14">
                    <h2 className="domain-reveal text-3xl lg:text-4xl font-bold text-white leading-tight">
                        Where deep domain expertise meets scientific excellence
                    </h2>
                    <p className="domain-reveal text-gray-400 leading-relaxed">
                        Our delivery model combines deep domain expertise, engineering excellence and a data-first mindset to solve complex research challenges &mdash; helping clients scale confidently and deliver outcomes that matter.
                    </p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {DOMAIN_TILES.map((tile) => (
                        <div key={tile.title} className="tile-reveal relative h-72 rounded-lg overflow-hidden group cursor-pointer bg-black">
                            <img src={tile.img} className="w-full h-full object-cover opacity-40 group-hover:opacity-25 group-hover:scale-105 transition-all duration-500" alt="" />
                            <div className="absolute inset-0 bg-black/65"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-5">
                                <div className="text-white font-semibold text-lg mb-3">{tile.title}</div>
                                <p className="text-gray-300 text-sm leading-relaxed max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 overflow-hidden transition-all duration-400 ease-out">
                                    {tile.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
