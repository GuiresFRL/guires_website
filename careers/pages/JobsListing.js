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
        gsap.fromTo('.cw-job-card',
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out' }
        );
    }, [filters]);

    return (
        <section className="bg-[var(--cw-bg)] min-h-screen">
            <div className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#0B1120CC]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--cw-bg)] via-transparent to-transparent"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                    <div ref={headerRef} className="max-w-2xl">
                        <div className="cw-jl-elem text-xs font-bold tracking-[0.2em] text-[var(--cw-accent-light)] uppercase mb-4">Careers</div>
                        <h1 className="cw-jl-elem text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">Open Positions</h1>
                        <div className="cw-jl-elem w-12 h-1.5 rounded-full bg-[var(--cw-accent)] mb-5"></div>
                        <p className="cw-jl-elem text-lg text-white/70 leading-relaxed">Find an opportunity that matches your skills, experience and ambitions.</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 lg:pb-32">
                <div className="-mt-8 lg:-mt-10 relative z-10">
                    <FilterBar filters={filters} setFilter={setFilter} clearFilters={clearFilters} options={options} activeCount={activeCount} />
                </div>

                <div className="flex items-center justify-between mb-6">
                    <p className="text-sm font-semibold text-[var(--cw-text)]">
                        {filteredJobs.length} Open Position{filteredJobs.length === 1 ? '' : 's'}
                    </p>
                </div>

                {filteredJobs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {filteredJobs.map((job) => <JobCard key={job.slug} job={job} />)}
                    </div>
                ) : (
                    <div className="text-center py-20 rounded-2xl border border-dashed border-[var(--cw-border)]">
                        <div className="w-14 h-14 rounded-full bg-[var(--cw-surface-2)] text-[var(--cw-muted)] flex items-center justify-center text-2xl mx-auto mb-5">
                            <div className="icon-search"></div>
                        </div>
                        <h3 className="text-lg font-semibold text-[var(--cw-text)] mb-2">No roles match your filters</h3>
                        <p className="text-sm text-[var(--cw-muted)] mb-6">Try adjusting your search or clearing filters to see more open positions.</p>
                        <button onClick={clearFilters} className="inline-flex items-center gap-2 rounded-full bg-[var(--cw-accent)] text-white text-sm font-semibold px-6 py-3 hover:bg-[var(--cw-accent-dark)] transition-colors">
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
