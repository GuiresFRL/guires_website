const TYPE_PILLS = [
    { value: '', label: 'All Jobs' },
    { value: 'full-time', label: 'Full Time' },
    { value: 'contract', label: 'Contract' },
    { value: 'internship', label: 'Internship' }
];

function FilterBar({ filters, setFilter, clearFilters, options, activeCount }) {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    React.useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const selectClass = 'w-full appearance-none rounded-xl border border-[var(--cw-border)] bg-[var(--cw-surface)] px-4 py-3 text-sm font-medium text-[var(--cw-text)] focus:outline-none focus:ring-2 focus:ring-[#0C4DA24D] focus:border-[var(--cw-accent)] transition-colors';

    const TypePills = ({ className }) => (
        <div className={`flex flex-wrap gap-2 ${className || ''}`}>
            {TYPE_PILLS.map((p) => (
                <button
                    key={p.value || 'all'}
                    onClick={() => setFilter('type', p.value)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors duration-200 ${filters.type === p.value ? 'bg-[var(--cw-accent)] text-white border-[var(--cw-accent)]' : 'bg-[var(--cw-surface)] text-[var(--cw-text)] border-[var(--cw-border)] hover:border-[#0C4DA280]'}`}
                >
                    {p.label}
                </button>
            ))}
        </div>
    );

    const SelectGroup = ({ className }) => (
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 ${className || ''}`}>
            <div className="relative">
                <select aria-label="Filter by department" className={selectClass} value={filters.department} onChange={(e) => setFilter('department', e.target.value)}>
                    <option value="">All Departments</option>
                    {options.departments.map((d) => <option key={d.slug} value={d.slug}>{d.label}</option>)}
                </select>
                <div className="icon-chevron-down pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[var(--cw-muted)]"></div>
            </div>
            <div className="relative">
                <select aria-label="Filter by location" className={selectClass} value={filters.location} onChange={(e) => setFilter('location', e.target.value)}>
                    <option value="">All Locations</option>
                    {options.locations.map((l) => <option key={l.slug} value={l.slug}>{l.label}</option>)}
                </select>
                <div className="icon-chevron-down pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[var(--cw-muted)]"></div>
            </div>
            <div className="relative">
                <select aria-label="Filter by experience level" className={selectClass} value={filters.experience} onChange={(e) => setFilter('experience', e.target.value)}>
                    <option value="">All Experience Levels</option>
                    {options.experience.map((x) => <option key={x.slug} value={x.slug}>{x.label}</option>)}
                </select>
                <div className="icon-chevron-down pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[var(--cw-muted)]"></div>
            </div>
        </div>
    );

    return (
        <div className="mb-10">
            <div className="relative mb-5">
                <div className="icon-search absolute left-5 top-1/2 -translate-y-1/2 text-[var(--cw-muted)]"></div>
                <input
                    type="text"
                    value={filters.search}
                    onChange={(e) => setFilter('search', e.target.value)}
                    placeholder="Search jobs by title, keyword or skill"
                    aria-label="Search jobs by title, keyword or skill"
                    className="w-full rounded-2xl border border-[var(--cw-border)] bg-[var(--cw-surface)] pl-12 pr-4 py-4 text-base text-[var(--cw-text)] placeholder:text-[var(--cw-muted)] focus:outline-none focus:ring-2 focus:ring-[#0C4DA24D] focus:border-[var(--cw-accent)] transition-colors shadow-sm"
                />
            </div>

            {/* Desktop filter bar */}
            <div className="hidden lg:flex lg:items-center lg:justify-between gap-4">
                <TypePills />
                <div className="flex items-center gap-3 flex-1 justify-end">
                    <SelectGroup className="w-full max-w-xl" />
                    {activeCount > 0 && (
                        <button onClick={clearFilters} className="shrink-0 text-sm font-semibold text-[var(--cw-accent)] hover:underline whitespace-nowrap">
                            Clear filters
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile trigger */}
            <div className="lg:hidden flex items-center justify-between gap-3">
                <TypePills className="flex-1" />
                <button
                    onClick={() => setMobileOpen(true)}
                    className="shrink-0 inline-flex items-center gap-2 rounded-full border border-[var(--cw-border)] bg-[var(--cw-surface)] px-4 py-2.5 text-sm font-semibold text-[var(--cw-text)]"
                    aria-haspopup="dialog"
                    aria-expanded={mobileOpen}
                >
                    <div className="icon-sliders-horizontal text-sm"></div>
                    Filters{activeCount > 0 ? ` (${activeCount})` : ''}
                </button>
            </div>

            {/* Mobile slide-over panel */}
            <div
                className={`lg:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                role="dialog"
                aria-modal="true"
                aria-label="Job filters"
            >
                <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)}></div>
                <div className={`absolute right-0 top-0 h-full w-[88%] max-w-sm bg-[var(--cw-surface)] shadow-2xl transition-transform duration-300 ease-out flex flex-col ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--cw-border)]">
                        <h3 className="text-lg font-bold text-[var(--cw-text)]">Filters</h3>
                        <button onClick={() => setMobileOpen(false)} aria-label="Close filters" className="w-9 h-9 rounded-full flex items-center justify-center text-[var(--cw-text)] hover:bg-[var(--cw-surface-2)]">
                            <div className="icon-x"></div>
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                        <div>
                            <div className="text-xs font-bold tracking-wider text-[var(--cw-muted)] uppercase mb-3">Employment Type</div>
                            <TypePills />
                        </div>
                        <div>
                            <div className="text-xs font-bold tracking-wider text-[var(--cw-muted)] uppercase mb-3">Department</div>
                            <div className="relative">
                                <select aria-label="Filter by department" className={selectClass} value={filters.department} onChange={(e) => setFilter('department', e.target.value)}>
                                    <option value="">All Departments</option>
                                    {options.departments.map((d) => <option key={d.slug} value={d.slug}>{d.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div>
                            <div className="text-xs font-bold tracking-wider text-[var(--cw-muted)] uppercase mb-3">Location</div>
                            <div className="relative">
                                <select aria-label="Filter by location" className={selectClass} value={filters.location} onChange={(e) => setFilter('location', e.target.value)}>
                                    <option value="">All Locations</option>
                                    {options.locations.map((l) => <option key={l.slug} value={l.slug}>{l.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div>
                            <div className="text-xs font-bold tracking-wider text-[var(--cw-muted)] uppercase mb-3">Experience Level</div>
                            <div className="relative">
                                <select aria-label="Filter by experience level" className={selectClass} value={filters.experience} onChange={(e) => setFilter('experience', e.target.value)}>
                                    <option value="">All Experience Levels</option>
                                    {options.experience.map((x) => <option key={x.slug} value={x.slug}>{x.label}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 py-5 border-t border-[var(--cw-border)] flex items-center gap-3">
                        <button onClick={() => { clearFilters(); }} className="flex-1 rounded-full border border-[var(--cw-border)] py-3 text-sm font-semibold text-[var(--cw-text)]">Clear All</button>
                        <button onClick={() => setMobileOpen(false)} className="flex-1 rounded-full bg-[var(--cw-accent)] py-3 text-sm font-semibold text-white">Show Results</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
