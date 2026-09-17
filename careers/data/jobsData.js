const CAREERS_SITE = 'https://guiresfrl.github.io/guires_website';
const CAREERS_BASE = `${CAREERS_SITE}/careers`;

const EXPERIENCE_LEVELS = {
    internship: 'Internship',
    entry: 'Entry Level (0-2 yrs)',
    mid: 'Mid Level (2-4 yrs)',
    senior: 'Senior (5+ yrs)'
};

const EMPLOYMENT_TYPES = {
    'full-time': 'Full Time',
    'contract': 'Contract',
    'internship': 'Internship'
};

const DEPARTMENT_BANNER_IMAGES = {
    'Engineering': 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=1600',
    'Design': 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1600',
    'Business': 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1600',
    'Marketing': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1600',
    'Data & Analytics': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600',
    'Research': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600'
};

const JOBS_DATA = [
    {
        slug: 'senior-software-engineer',
        title: 'Senior Software Engineer',
        department: 'Engineering',
        departmentSlug: 'engineering',
        location: 'Chennai, India',
        locationSlug: 'chennai',
        type: 'full-time',
        experience: 'senior',
        posted: '2026-08-18',
        summary: 'Lead the design and development of research data platforms that power GUIRES’ analytics and reporting tools.',
        aboutRole: 'As a Senior Software Engineer at GUIRES, you will lead the architecture and delivery of the platforms our research, data science and regulatory teams rely on every day. You’ll work closely with product, data and domain experts to turn complex research workflows into reliable, scalable software.',
        whatYoullDo: [
            'Design and build scalable services for research data ingestion, processing and reporting',
            'Set technical direction and review architecture decisions across the engineering team',
            'Mentor mid-level and junior engineers through code review and pairing',
            'Partner with data science and product teams to translate research workflows into software',
            'Own reliability, performance and security for the systems you build'
        ],
        requirements: [
            '5+ years of professional software engineering experience',
            'Strong proficiency in JavaScript/TypeScript and a modern backend language (Node.js, Python or Java)',
            'Experience designing REST or GraphQL APIs and relational data models',
            'Comfortable owning systems end-to-end, from design through production support',
            'Clear written and verbal communication with both technical and non-technical stakeholders'
        ],
        goodToHave: [
            'Experience in healthcare, life sciences or regulated data environments',
            'Familiarity with cloud infrastructure (AWS/GCP/Azure) and CI/CD pipelines',
            'Exposure to data pipelines or analytics platforms'
        ],
        whatWeOffer: [
            'Competitive compensation with performance-based growth',
            'Health insurance for you and your family',
            'Flexible working hours and hybrid work options',
            'Learning & development budget for courses, certifications and conferences',
            'A collaborative team solving meaningful problems in healthcare research'
        ]
    },
    {
        slug: 'frontend-developer',
        title: 'Frontend Developer',
        department: 'Engineering',
        departmentSlug: 'engineering',
        location: 'Bengaluru, India',
        locationSlug: 'bengaluru',
        type: 'full-time',
        experience: 'mid',
        posted: '2026-08-22',
        summary: 'Build clean, accessible interfaces for the dashboards and tools our research and regulatory teams use daily.',
        aboutRole: 'You’ll join our product engineering team to build fast, accessible and visually polished interfaces for internal tools and client-facing platforms, working closely with designers and backend engineers.',
        whatYoullDo: [
            'Build responsive, accessible user interfaces using modern JavaScript frameworks',
            'Collaborate with designers to translate mockups into pixel-accurate, performant UI',
            'Write clean, well-tested, reusable component code',
            'Optimize applications for speed, accessibility and cross-browser compatibility',
            'Participate in code reviews and contribute to our shared component library'
        ],
        requirements: [
            '2-4 years of experience building production web applications',
            'Strong command of HTML, CSS and modern JavaScript (ES6+)',
            'Experience with React or a comparable component-based framework',
            'An eye for detail, spacing, typography and interaction design',
            'Comfortable working with REST APIs and asynchronous data'
        ],
        goodToHave: [
            'Experience with animation libraries (GSAP, Framer Motion)',
            'Familiarity with design systems and Figma handoff',
            'Exposure to accessibility (WCAG) standards'
        ],
        whatWeOffer: [
            'Competitive compensation with performance-based growth',
            'Health insurance for you and your family',
            'Flexible working hours and hybrid work options',
            'Learning & development budget for courses, certifications and conferences',
            'A design-conscious team that cares about craft'
        ]
    },
    {
        slug: 'backend-developer',
        title: 'Backend Developer',
        department: 'Engineering',
        departmentSlug: 'engineering',
        location: 'Remote',
        locationSlug: 'remote',
        type: 'full-time',
        experience: 'mid',
        posted: '2026-08-25',
        summary: 'Design robust APIs and data pipelines that keep research and regulatory data accurate, secure and fast.',
        aboutRole: 'You’ll design and maintain the services and data pipelines behind our research and analytics platforms, with a strong focus on data integrity, security and performance.',
        whatYoullDo: [
            'Design, build and maintain scalable backend services and APIs',
            'Model and optimize relational and document databases for research data',
            'Implement data validation, quality checks and audit trails for regulated workflows',
            'Collaborate with frontend and data teams to ship end-to-end features',
            'Monitor, debug and improve system performance and reliability'
        ],
        requirements: [
            '2-4 years of backend development experience',
            'Strong proficiency in Node.js, Python or Java',
            'Solid understanding of relational databases and API design',
            'Experience with version control, testing and CI/CD workflows',
            'Ability to work independently in a remote, async-friendly team'
        ],
        goodToHave: [
            'Experience with healthcare or research data standards',
            'Familiarity with containerization (Docker) and cloud deployment',
            'Exposure to message queues or event-driven architectures'
        ],
        whatWeOffer: [
            'Fully remote role with flexible hours',
            'Health insurance for you and your family',
            'Home-office and internet allowance',
            'Learning & development budget for courses, certifications and conferences',
            'A collaborative team solving meaningful problems in healthcare research'
        ]
    },
    {
        slug: 'ui-ux-designer',
        title: 'UI/UX Designer',
        department: 'Design',
        departmentSlug: 'design',
        location: 'Chennai, India',
        locationSlug: 'chennai',
        type: 'full-time',
        experience: 'mid',
        posted: '2026-08-20',
        summary: 'Shape intuitive, research-grade experiences for scientists, analysts and regulatory teams.',
        aboutRole: 'As our UI/UX Designer, you’ll shape how researchers, analysts and regulatory professionals interact with complex data and workflows — turning dense information into clear, usable experiences.',
        whatYoullDo: [
            'Design end-to-end user flows, wireframes and high-fidelity interfaces',
            'Conduct lightweight user research and usability reviews with internal teams',
            'Maintain and evolve our shared design system and component library',
            'Partner closely with engineering to ensure design intent survives into production',
            'Present design rationale clearly to stakeholders across research and product'
        ],
        requirements: [
            '2-4 years of experience in product or UX/UI design',
            'A strong portfolio demonstrating end-to-end design thinking',
            'Proficiency in Figma or a comparable design tool',
            'Understanding of accessibility and responsive design principles',
            'Ability to simplify complex, data-heavy workflows into clear interfaces'
        ],
        goodToHave: [
            'Experience designing for dashboards, analytics or enterprise software',
            'Basic understanding of HTML/CSS to collaborate closely with engineers',
            'Interest in healthcare or scientific domains'
        ],
        whatWeOffer: [
            'Competitive compensation with performance-based growth',
            'Health insurance for you and your family',
            'Flexible working hours and hybrid work options',
            'Learning & development budget for courses, certifications and conferences',
            'Real ownership over the products you design'
        ]
    },
    {
        slug: 'business-development-executive',
        title: 'Business Development Executive',
        department: 'Business',
        departmentSlug: 'business',
        location: 'Mumbai, India',
        locationSlug: 'mumbai',
        type: 'full-time',
        experience: 'entry',
        posted: '2026-08-28',
        summary: 'Build relationships with healthcare and life sciences organizations and help grow GUIRES’ client base.',
        aboutRole: 'You’ll be part of the team that introduces GUIRES’ research, regulatory and data services to healthcare and life sciences organizations — building relationships and identifying opportunities from first conversation to signed engagement.',
        whatYoullDo: [
            'Identify and qualify new business opportunities across target industries',
            'Build and nurture relationships with prospective clients and partners',
            'Support proposal development alongside subject-matter experts',
            'Track pipeline activity and report on outreach performance',
            'Represent GUIRES at industry events, webinars and conferences'
        ],
        requirements: [
            '0-2 years of experience in business development, sales or client-facing roles',
            'Strong verbal and written communication skills',
            'Comfortable with outbound outreach and relationship building',
            'Organized, self-motivated and coachable',
            'Interest in healthcare, life sciences or research services'
        ],
        goodToHave: [
            'Prior internship or experience in B2B sales',
            'Familiarity with CRM tools (HubSpot, Salesforce)',
            'A background or coursework in life sciences, business or communications'
        ],
        whatWeOffer: [
            'Competitive base with performance incentives',
            'Health insurance for you and your family',
            'Structured onboarding and sales mentorship',
            'Learning & development budget',
            'Clear growth path into senior business development roles'
        ]
    },
    {
        slug: 'content-writer',
        title: 'Content Writer',
        department: 'Marketing',
        departmentSlug: 'marketing',
        location: 'Remote',
        locationSlug: 'remote',
        type: 'contract',
        experience: 'entry',
        posted: '2026-08-30',
        summary: 'Write clear, credible content that communicates complex research and regulatory topics to a broad audience.',
        aboutRole: 'You’ll create articles, case studies and web content that make GUIRES’ research, regulatory and data science work understandable and compelling to healthcare and life sciences audiences.',
        whatYoullDo: [
            'Write blog posts, insights articles, case studies and web copy',
            'Collaborate with subject-matter experts to translate technical work into clear writing',
            'Edit and proofread content for clarity, tone and accuracy',
            'Support SEO best practices across published content',
            'Maintain a consistent voice across GUIRES’ digital channels'
        ],
        requirements: [
            '0-2 years of professional writing or content experience',
            'Excellent written English with strong attention to detail',
            'Ability to simplify technical or scientific topics for a general audience',
            'Comfortable working independently against deadlines',
            'A portfolio or writing samples to share'
        ],
        goodToHave: [
            'Experience writing about healthcare, life sciences or B2B technology',
            'Basic understanding of SEO and content strategy',
            'Familiarity with CMS tools'
        ],
        whatWeOffer: [
            'Flexible, remote contract engagement',
            'Opportunity to convert to a full-time role based on performance',
            'Direct mentorship from senior communications team members',
            'Byline credit on published work',
            'A steady pipeline of interesting, research-driven topics'
        ]
    },
    {
        slug: 'data-analyst',
        title: 'Data Analyst',
        department: 'Data & Analytics',
        departmentSlug: 'data',
        location: 'Bengaluru, India',
        locationSlug: 'bengaluru',
        type: 'full-time',
        experience: 'mid',
        posted: '2026-09-01',
        summary: 'Turn research and operational data into clear, decision-ready insight for our clients and internal teams.',
        aboutRole: 'You’ll work with research and regulatory data to build reports, dashboards and analyses that help clients and internal teams make confident, evidence-based decisions.',
        whatYoullDo: [
            'Clean, validate and analyze research and operational datasets',
            'Build dashboards and reports using modern BI tools',
            'Partner with domain experts to define metrics and analysis approaches',
            'Identify trends, anomalies and opportunities in complex datasets',
            'Present findings clearly to both technical and non-technical stakeholders'
        ],
        requirements: [
            '2-4 years of experience in data analysis or a related analytical role',
            'Strong SQL skills and experience with a BI tool (Power BI, Tableau or similar)',
            'Comfortable working with large, sometimes messy datasets',
            'Solid statistical fundamentals',
            'Clear communication of insights to non-technical audiences'
        ],
        goodToHave: [
            'Experience with Python or R for analysis',
            'Exposure to healthcare, clinical or research datasets',
            'Familiarity with data governance and quality frameworks'
        ],
        whatWeOffer: [
            'Competitive compensation with performance-based growth',
            'Health insurance for you and your family',
            'Flexible working hours and hybrid work options',
            'Learning & development budget for courses, certifications and conferences',
            'Meaningful, decision-ready work that clients rely on'
        ]
    },
    {
        slug: 'marketing-intern',
        title: 'Marketing Intern',
        department: 'Marketing',
        departmentSlug: 'marketing',
        location: 'Chennai, India',
        locationSlug: 'chennai',
        type: 'internship',
        experience: 'internship',
        posted: '2026-09-03',
        summary: 'Support campaigns, content and social media as part of a hands-on marketing internship.',
        aboutRole: 'You’ll work alongside our marketing and communications team to support campaigns, content creation and social media — gaining hands-on experience across B2B marketing in a research-driven organization.',
        whatYoullDo: [
            'Assist in planning and executing marketing campaigns',
            'Support content creation for social media, email and web',
            'Help track and report on campaign performance metrics',
            'Coordinate logistics for webinars and industry events',
            'Research industry trends and competitor activity'
        ],
        requirements: [
            'Currently pursuing or recently completed a degree in marketing, communications or a related field',
            'Strong written communication skills',
            'Comfortable using social media platforms professionally',
            'Organized, proactive and eager to learn',
            'Basic familiarity with design or analytics tools is a plus'
        ],
        goodToHave: [
            'Prior coursework or projects in digital marketing',
            'Familiarity with tools like Canva, Mailchimp or Google Analytics',
            'Interest in healthcare or life sciences marketing'
        ],
        whatWeOffer: [
            'A structured internship with real ownership over projects',
            'Mentorship from senior marketing team members',
            'Certificate of completion and letter of recommendation',
            'Potential for a full-time offer based on performance',
            'Monthly stipend'
        ]
    },
    {
        slug: 'research-intern',
        title: 'Research Intern',
        department: 'Research',
        departmentSlug: 'research',
        location: 'Chennai, India',
        locationSlug: 'chennai',
        type: 'internship',
        experience: 'internship',
        posted: '2026-09-05',
        summary: 'Support literature review, data collection and study coordination on live research projects.',
        aboutRole: 'You’ll support GUIRES’ research team on live academic, clinical and market research projects — gaining direct exposure to how research is designed, conducted and reported in a professional setting.',
        whatYoullDo: [
            'Support literature reviews and background research',
            'Assist with data collection, entry and basic cleaning',
            'Help prepare summaries, reports and presentation materials',
            'Coordinate documentation for ongoing study activities',
            'Participate in team discussions on study design and findings'
        ],
        requirements: [
            'Currently pursuing or recently completed a degree in life sciences, public health, statistics or a related field',
            'Strong attention to detail and organizational skills',
            'Comfortable working with spreadsheets and basic data tools',
            'Good written and verbal communication',
            'Genuine interest in research methodology and healthcare'
        ],
        goodToHave: [
            'Prior exposure to academic or clinical research projects',
            'Basic familiarity with statistical software (SPSS, R or similar)',
            'Coursework in research methods or biostatistics'
        ],
        whatWeOffer: [
            'A structured internship with exposure to real research projects',
            'Mentorship from experienced researchers',
            'Certificate of completion and letter of recommendation',
            'Potential for a full-time offer based on performance',
            'Monthly stipend'
        ]
    }
];

const JOB_APPLICATION_PROCESS = [
    { step: '1', title: 'Apply Online', desc: 'Submit your application and resume through this page — it only takes a few minutes.' },
    { step: '2', title: 'Initial Screening', desc: 'Our talent team reviews your application and reaches out to discuss fit and next steps.' },
    { step: '3', title: 'Interviews', desc: 'Meet the team through one or more conversations focused on skills, experience and working style.' },
    { step: '4', title: 'Offer & Onboarding', desc: 'We extend an offer and support you through a structured onboarding into the team.' }
];
