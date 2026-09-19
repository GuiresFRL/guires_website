function parseQuery() {
    const params = new URLSearchParams(window.location.search);
    return {
        search: params.get('search') || '',
        type: params.get('type') || '',
        department: params.get('department') || '',
        location: params.get('location') || '',
        experience: params.get('experience') || ''
    };
}

function buildQueryString(filters) {
    const params = new URLSearchParams();
    if (filters.search) params.set('search', filters.search);
    if (filters.type) params.set('type', filters.type);
    if (filters.department) params.set('department', filters.department);
    if (filters.location) params.set('location', filters.location);
    if (filters.experience) params.set('experience', filters.experience);
    const qs = params.toString();
    return qs ? `?${qs}` : '';
}

function uniqueOptions(field, slugField, labelValue) {
    const seen = new Map();
    JOBS_DATA.forEach((job) => {
        if (!seen.has(job[slugField])) seen.set(job[slugField], job[field]);
    });
    return Array.from(seen.entries()).map(([slug, label]) => ({ slug, label }));
}

function JobsListingPage() {
    const [filters, setFilters] = React.useState(parseQuery());
    const headerRef = React.useRef(null);

    React.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(headerRef.current.querySelectorAll('.cw-jl-elem'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
        );
    }, []);

    React.useEffect(() => {
        const qs = buildQueryString(filters);
        const newUrl = `${window.location.pathname}${qs}`;
        window.history.replaceState({}, '', newUrl);
    }, [filters]);

    const setFilter = (key, value) => setFilters((f) => ({ ...f, [key]: value }));
    const clearFilters = () => setFilters({ search: '', type: '', department: '', location: '', experience: '' });

    const options = {
        departments: uniqueOptions('department', 'departmentSlug'),
        locations: uniqueOptions('location', 'locationSlug'),
        experience: Object.entries(EXPERIENCE_LEVELS).map(([slug, label]) => ({ slug, label }))
    };

    const filteredJobs = JOBS_DATA.filter((job) => {
        if (filters.type && job.type !== filters.type) return false;
        if (filters.department && job.departmentSlug !== filters.department) return false;
        if (filters.location && job.locationSlug !== filters.location) return false;
        if (filters.experience && job.experience !== filters.experience) return false;
        if (filters.search) {
            const q = filters.search.toLowerCase();
            const haystack = `${job.title} ${job.department} ${job.summary} ${job.location}`.toLowerCase();
            if (!haystack.includes(q)) return false;
        }
        return true;
    });

    const activeCount = ['type', 'department', 'location', 'experience'].filter((k) => filters[k]).length;

    React.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.fromTo('.cw-job-card',
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out', clearProps: 'opacity,transform' }
        );
    }, [filters]);

    return (
        <React.Fragment>
            <section className="tg-on-ink relative overflow-hidden text-white pt-32 pb-16 lg:pt-44 lg:pb-24" style={{ background: 'var(--ink-navy)' }}>
                <div className="absolute inset-0 tg-grid-bg opacity-60 pointer-events-none" style={{ WebkitMaskImage: 'linear-gradient(180deg, transparent, #000 60%)', maskImage: 'linear-gradient(180deg, transparent, #000 60%)' }}></div>
                <div className="tg-container relative z-10">
                    <div ref={headerRef}>
                        <div className="cw-jl-elem tg-eyebrow mb-7">Careers</div>
                        <h1 className="cw-jl-elem tg-display !text-[clamp(2.75rem,7vw,6.5rem)] mb-8 max-w-[14ch]">Open Positions</h1>
                        <p className="cw-jl-elem tg-lead text-white/75 max-w-xl">Find an opportunity that matches your skills, experience and ambitions.</p>
                    </div>
                </div>
            </section>

            <section className="bg-white min-h-[60vh] py-14 lg:py-20">
                <div className="tg-container">
                    <FilterBar filters={filters} setFilter={setFilter} clearFilters={clearFilters} options={options} activeCount={activeCount} />

                    <div className="flex items-center justify-between mb-2">
                        <p className="tg-eyebrow !text-[var(--ink)]">
                            {filteredJobs.length} Open Position{filteredJobs.length === 1 ? '' : 's'}
                        </p>
                    </div>

                    {filteredJobs.length > 0 ? (
                        <div id="job-list">
                            {filteredJobs.map((job) => <JobCard key={job.slug} job={job} />)}
                        </div>
                    ) : (
                        <div className="py-20 max-w-xl">
                            <h3 className="text-3xl font-medium tracking-[-0.03em] mb-4">No roles match your filters.</h3>
                            <p className="text-[var(--muted)] leading-relaxed mb-8">Try adjusting your search or clearing filters to see more open positions.</p>
                            <button onClick={clearFilters} className="tg-btn tg-btn--primary">Clear Filters</button>
                        </div>
                    )}
                </div>
            </section>
        </React.Fragment>
    );
}
