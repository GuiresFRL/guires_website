function JobCard({ job }) {
    const href = `${CAREERS_BASE}/jobs/${job.slug}/`;
    const image = DEPARTMENT_BANNER_IMAGES[job.department] || DEPARTMENT_BANNER_IMAGES.Engineering;
    return (
        <a
            href={href}
            className="cw-job-card group block rounded-2xl overflow-hidden bg-[var(--cw-surface)] border border-[var(--cw-border)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#0C4DA266]"
        >
            <div className="relative h-32 overflow-hidden">
                <img
                    src={image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120E6] via-[#0B112066] to-transparent"></div>
                <div className="absolute bottom-3 left-5 text-xs font-bold tracking-wider text-white uppercase">{job.department}</div>
            </div>

            <div className="p-6 lg:p-7">
                <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-bold text-[var(--cw-text)] leading-snug">{job.title}</h3>
                    <div className="shrink-0 w-10 h-10 rounded-full border border-[var(--cw-border)] flex items-center justify-center text-[var(--cw-text)] transition-all duration-300 group-hover:bg-[var(--cw-accent)] group-hover:text-white group-hover:border-[var(--cw-accent)] group-hover:translate-x-1">
                        <div className="icon-arrow-right text-sm"></div>
                    </div>
                </div>

                <p className="text-sm text-[var(--cw-muted)] leading-relaxed mb-5">{job.summary}</p>

                <div className="flex flex-wrap items-center gap-2 mb-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--cw-surface-2)] px-3 py-1.5 text-xs font-semibold text-[var(--cw-text)]">
                        <div className="icon-map-pin text-[11px]"></div> {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--cw-surface-2)] px-3 py-1.5 text-xs font-semibold text-[var(--cw-text)]">
                        <div className="icon-briefcase text-[11px]"></div> {EMPLOYMENT_TYPES[job.type]}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--cw-surface-2)] px-3 py-1.5 text-xs font-semibold text-[var(--cw-text)]">
                        <div className="icon-layers text-[11px]"></div> {EXPERIENCE_LEVELS[job.experience]}
                    </span>
                </div>

                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--cw-accent)]">
                    View Role <div className="icon-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1"></div>
                </div>
            </div>
        </a>
    );
}
