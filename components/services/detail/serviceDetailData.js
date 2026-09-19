const SERVICE_DETAILS = {
    'biostatistics': {
        title: 'Biostatistics',
        slug: 'biostatistics',
        category: 'Data & Analytics',
        eyebrow: 'DATA & ANALYTICS',
        heroImage: 'https://www.costellomedical.com/wp-content/uploads/2023/08/header-health-eco.jpg',
        heroHeadline: 'Turning Complex Clinical Data Into Actionable Evidence',
        heroDescription: 'GUIRES’ biostatistics practice designs and executes the statistical foundation behind clinical and non-clinical research — from protocol-stage study design through submission-ready analysis and reporting.',
        challengeEyebrow: 'THE CHALLENGE',
        challengeStatement: 'Clinical and research teams are under growing pressure to turn increasingly complex data into evidence that is statistically sound, defensible and delivered on a timeline that regulators and stakeholders will not extend.',
        challenges: [
            { num: '01', title: 'Fragmented Data', desc: 'Clinical data often lives across disconnected systems and formats, making it hard to trust or analyze without significant manual reconciliation.' },
            { num: '02', title: 'Increasing Analytical Complexity', desc: 'Modern study designs demand more sophisticated statistical methods than traditional approaches can reliably support.' },
            { num: '03', title: 'Pressure for Faster Evidence', desc: 'Regulatory and commercial timelines leave little room for statistical rework once a study is underway.' }
        ],
        overviewImage: 'https://lumanity.com/wp-content/uploads/2025/09/Person-on-mountain.jpeg',
        approachEyebrow: 'OUR APPROACH',
        approachHeading: 'We believe statistical rigor should sit at the centre of every research decision',
        approachParagraphs: [
            'It is the responsibility of every biostatistician on our team to ensure the work we deliver is methodologically sound, transparent and fit for regulatory and scientific scrutiny. We aim to be embedded in a study from the earliest planning stages through to final reporting.',
            'Our statisticians are trained to communicate complex analyses in plain, defensible language, so that sponsors, clinicians and reviewers can act on the evidence with confidence and trust in how it was produced.'
        ],
        teamHeading: 'Our biostatistics team has experience in the delivery of:',
        overviewHeading: 'A Complete Statistical Approach',
        overviewItems: [
            { title: 'Study Design', desc: 'Statistical input into protocol design, sample size and randomization strategy from the earliest planning stages.' },
            { title: 'Statistical Analysis', desc: 'Pre-specified and exploratory analysis executed with rigorous, auditable methodology.' },
            { title: 'Data Interpretation', desc: 'Translating statistical output into findings that hold up to scientific and regulatory scrutiny.' },
            { title: 'Regulatory Support', desc: 'Statistical documentation aligned to the standards regulatory review demands.' },
            { title: 'Reporting', desc: 'Clear, submission-ready tables, listings, figures and narrative reporting.' }
        ],
        capabilitiesHeading: 'Our Offerings',
        capabilities: [
            {
                icon: 'icon-message-square-more', title: 'Statistical Consulting',
                desc: 'Our statisticians partner with your project team from the earliest planning stages, translating scientific questions into a rigorous, defensible analysis strategy.',
                highlights: [
                    { icon: 'icon-file-check', label: 'Protocol input', desc: 'contributing to study design, sample size and randomization strategy' },
                    { icon: 'icon-git-branch', label: 'Methodology selection', desc: 'matching statistical methods to the study question and data structure' },
                    { icon: 'icon-shield-check', label: 'Risk review', desc: 'flagging design or analysis risks before they affect study timelines' }
                ]
            },
            {
                icon: 'icon-flask-conical', title: 'Clinical Trial Analysis',
                desc: 'Statistical analysis executed across every phase of clinical development, from first-in-human studies through confirmatory Phase III trials.',
                highlights: [
                    { icon: 'icon-activity', label: 'Interim analysis', desc: 'supporting DSMB and adaptive design decision points' },
                    { icon: 'icon-users', label: 'Subgroup analysis', desc: 'characterizing treatment effects across patient populations' },
                    { icon: 'icon-circle-check', label: 'Primary endpoint analysis', desc: 'pre-specified, audit-ready statistical evaluation' }
                ]
            },
            {
                icon: 'icon-file-code', title: 'Statistical Programming',
                desc: 'Production-grade programming for analysis datasets and outputs, built to withstand regulatory and sponsor-side quality review.',
                highlights: [
                    { icon: 'icon-database', label: 'SDTM & ADaM datasets', desc: 'standards-compliant dataset programming and validation' },
                    { icon: 'icon-table', label: 'TLFs', desc: 'tables, listings and figures built to specification' },
                    { icon: 'icon-circle-check', label: 'Independent QC', desc: 'double-programming and validation for audit-ready outputs' }
                ]
            },
            {
                icon: 'icon-file-check', title: 'Submission Support',
                desc: 'Statistical documentation and analysis packages prepared to the standard regulatory reviewers expect, on the timeline your submission demands.',
                highlights: [
                    { icon: 'icon-file-text', label: 'Statistical Analysis Plans', desc: 'clear, pre-specified and reviewer-ready' },
                    { icon: 'icon-shield-check', label: 'Regulatory response support', desc: 'statistical input for agency questions and reviews' },
                    { icon: 'icon-folder-check', label: 'Submission-ready packages', desc: 'datasets, outputs and documentation aligned end to end' }
                ]
            },
            {
                icon: 'icon-chart-line', title: 'Advanced Analytics',
                desc: 'Predictive and exploratory analysis for complex, high-dimensional datasets, surfacing signals that traditional methods can miss.',
                highlights: [
                    { icon: 'icon-brain', label: 'Predictive modelling', desc: 'identifying signals in complex, high-dimensional data' },
                    { icon: 'icon-git-merge', label: 'Data integration', desc: 'consolidating multi-source data into an analyzable structure' },
                    { icon: 'icon-chart-line', label: 'Exploratory analysis', desc: 'surfacing hypotheses for further confirmatory research' }
                ]
            }
        ],
        diagramNodes: [
            { key: 'design', label: 'Study Design', icon: 'icon-compass', desc: 'Defining endpoints, sample size and randomization strategy before a single data point is collected.' },
            { key: 'data', label: 'Data', icon: 'icon-database', desc: 'Structured, validated clinical data ready for rigorous statistical analysis.' },
            { key: 'analysis', label: 'Analysis', icon: 'icon-chart-line', desc: 'Pre-specified and exploratory statistical analysis executed with full auditability.' },
            { key: 'evidence', label: 'Evidence', icon: 'icon-shield-check', desc: 'Findings translated into evidence that withstands scientific and regulatory scrutiny.' },
            { key: 'reporting', label: 'Reporting', icon: 'icon-presentation', desc: 'Submission-ready tables, listings, figures and statistical narrative.' }
        ],
        technology: [
            { icon: 'icon-brain-circuit', title: 'AI', desc: 'Applied AI that accelerates pattern discovery across complex clinical datasets.' },
            { icon: 'icon-workflow', title: 'Automation', desc: 'Automated programming pipelines that reduce manual rework and turnaround time.' },
            { icon: 'icon-chart-column', title: 'Advanced Analytics', desc: 'Predictive and exploratory methods beyond traditional statistical approaches.' },
            { icon: 'icon-chart-area', title: 'Data Visualization', desc: 'Clear visual representations of statistical findings for technical and non-technical audiences.' },
            { icon: 'icon-network', title: 'Research Platforms', desc: 'Purpose-built platforms that scale statistical programming and delivery.' },
            { icon: 'icon-file-code', title: 'Statistical Programming', desc: 'Production-grade, validated programming for regulated analysis and reporting.' }
        ],
        proofHeadline: 'GUIRES is your partner for statistically rigorous, submission-ready evidence.',
        proofSubheading: 'Support for sponsors, research teams and regulatory submissions is driven by an experienced biostatistics practice.',
        proofParagraph: 'From protocol-stage study design to statistical programming and submission support, GUIRES combines methodological rigor with clear, defensible communication to help bring evidence to decision-makers with confidence.',
        proofCta: { label: 'Explore our approach to biostatistics', href: '#our-approach' },
        whyEyebrow: 'WHY GUIRES?',
        whyHeading: 'Discover the value of our biostatistics expertise',
        whyImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        metrics: [
            { value: 'XX+', label: 'Years of Statistical Experience' },
            { value: 'XX+', label: 'Studies Supported' },
            { value: 'XX+', label: 'Therapeutic Areas' }
        ],
        caseStudy: {
            clientIndustry: 'Biopharma · Clinical Development',
            challenge: 'A mid-size biopharma sponsor needed statistical support to consolidate and validate data from a multi-site trial ahead of a regulatory submission deadline.',
            approach: 'GUIRES deployed a dedicated biostatistics and statistical programming team to define the analysis plan, validate datasets and produce submission-ready tables, listings and figures.',
            solution: 'A fully validated, audit-ready statistical package delivered against a compressed submission timeline.',
            outcomes: [
                { value: 'XX%', label: 'Faster Turnaround' },
                { value: 'XX', label: 'Datasets Validated' },
                { value: 'XX', label: 'Markets Supported' }
            ]
        },
        relatedServices: ['statistical-programming', 'data-science-analytics', 'research-solutions'],
        insightCategories: ['Statistical Programming', 'Clinical Research', 'Data Analytics', 'Biostatistics', 'AI'],
        faqs: [
            { q: 'What is biostatistics?', a: 'Biostatistics is the application of statistical methods to biological, clinical and health-related research — from study design through analysis and reporting.' },
            { q: 'What biostatistical services does GUIRES provide?', a: 'We support statistical consulting, clinical trial analysis, statistical programming, submission support and advanced analytics across the research lifecycle.' },
            { q: 'How does GUIRES support clinical research?', a: 'Our biostatisticians work alongside clinical teams from protocol design through final reporting, ensuring studies are statistically sound and audit-ready at every stage.' },
            { q: 'What statistical programming services are available?', a: 'We produce analysis datasets, tables, listings and figures using validated, production-grade programming practices.' },
            { q: 'Which therapeutic areas do you support?', a: 'Our biostatistics team has experience across multiple therapeutic areas; specific experience is discussed during scoping for each engagement.' },
            { q: 'How does GUIRES ensure data quality?', a: 'Through structured validation, documented methodology and independent quality review at each stage of statistical analysis.' }
        ]
    }
};

function serviceUrl(slug) {
    // data-science-analytics already exists as a flat file from an earlier build;
    // every other service uses the newer clean directory URL structure.
    if (slug === 'data-science-analytics') {
        return 'https://guiresfrl.github.io/guires_website/services/data-science-analytics/';
    }
    return `https://guiresfrl.github.io/guires_website/services/${slug}/`;
}

const SERVICE_DIRECTORY = {
    'biostatistics': { title: 'Biostatistics', category: 'Data & Analytics' },
    'statistical-programming': { title: 'Statistical Programming', category: 'Data & Analytics' },
    'data-science-analytics': { title: 'Data Analytics', category: 'Data & Analytics' },
    'research-solutions': { title: 'Clinical Research Support', category: 'Healthcare & Life Sciences' },
    'market-research': { title: 'Market Research', category: 'Research & Intelligence' },
    'competitive-intelligence': { title: 'Competitive Intelligence', category: 'Research & Intelligence' },
    'scientific-medical-communication': { title: 'Medical Writing', category: 'Scientific & Medical' },
    'regulatory-support': { title: 'Regulatory Support', category: 'Scientific & Medical' },
    'ai-analytics': { title: 'AI & Advanced Analytics', category: 'Data & Analytics' }
};

const SERVICE_PROCESS_STEPS = [
    { num: '01', title: 'Discover', desc: 'Understand the problem.' },
    { num: '02', title: 'Design', desc: 'Build the appropriate methodology.' },
    { num: '03', title: 'Deliver', desc: 'Execute with scientific rigor.' },
    { num: '04', title: 'Validate', desc: 'Quality and compliance.' },
    { num: '05', title: 'Optimize', desc: 'Generate continuous value.' }
];

const WHY_GUIRES_PILLARS = [
    { icon: 'icon-flask-conical', title: 'Scientific Expertise', desc: 'Domain specialists who understand the science behind the data, not just the statistics.' },
    { icon: 'icon-chart-column', title: 'Data Driven', desc: 'Decisions grounded in rigorous, auditable evidence at every stage.' },
    { icon: 'icon-brain-circuit', title: 'Technology Enabled', desc: 'Modern platforms and applied AI that improve accuracy and turnaround.' },
    { icon: 'icon-globe', title: 'Global Delivery', desc: 'A delivery model built to support research programs across markets.' }
];

const SERVICE_INSIGHTS_POOL = [
    { category: 'Biostatistics', title: 'Designing Statistically Sound Clinical Trials', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=700' },
    { category: 'Statistical Programming', title: 'Validating Analysis Datasets at Scale', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=700' },
    { category: 'Clinical Research', title: 'What Slows Down Clinical Data Readiness', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=700' },
    { category: 'AI', title: 'Where AI Actually Helps in Statistical Analysis', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=700' }
];
