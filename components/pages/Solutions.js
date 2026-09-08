function SolutionsPage() {
    const solutions = [
        { num: '01', title: 'Research Solutions', desc: 'Custom research design and execution for academic, clinical and market research needs.' },
        { num: '02', title: 'Analytics Solutions', desc: 'Data engineering, statistical analysis and visualization built around your questions.' },
        { num: '03', title: 'Healthcare Solutions', desc: 'Evidence generation and research support across the healthcare continuum.' },
        { num: '04', title: 'Life Sciences Solutions', desc: 'Research, regulatory and scientific support for pharma, biotech and medtech.' },
        { num: '05', title: 'Regulatory Solutions', desc: 'Submission-ready documentation and pharmacovigilance support for global markets.' },
        { num: '06', title: 'Digital Solutions', desc: 'Digital tools and platforms that make research and reporting more efficient.' },
        { num: '07', title: 'Customized Solutions', desc: 'Tailored engagements combining our capabilities around a specific challenge.' }
    ];

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.solution-item',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: '#solutions-grid', start: 'top 75%' } }
        );
    }, []);

    return (
        <section className="py-24">
            <div id="solutions-grid" className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
                {solutions.map((s) => (
                    <div key={s.num} className="solution-item border-t border-black/10 pt-6">
                        <div className="text-gray-500 text-sm mb-4 font-mono">{s.num}</div>
                        <h3 className="text-2xl font-medium text-gray-800 mb-3">{s.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
