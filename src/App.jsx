import infrixLogo from './assets/infrix-logo.png'

const services = [
  'Artificial Intelligence',
  'Agentic AI Solutions',
  'Generative AI Development',
  'Machine Learning',
  'Deep Learning',
  'Data Engineering',
  'Data Analytics',
  'Business Intelligence',
  'Data Warehousing',
  'Cloud Engineering',
  'Python Development',
  'Web Development',
  'Custom Software Development',
  'API Development',
  'Automation Solutions',
]

const technologies = {
  AI: ['OpenAI', 'Claude', 'Gemini', 'Llama', 'LangChain', 'CrewAI', 'AutoGen', 'Semantic Kernel'],
  Data: ['Databricks', 'Snowflake', 'Azure Synapse', 'BigQuery', 'Redshift', 'Apache Spark', 'Kafka', 'Delta Lake'],
  Cloud: ['Azure', 'AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
  Development: ['Python', 'React', 'Next.js', 'FastAPI', 'Node.js', 'Django', 'Flask', '.NET', 'Java'],
  Databases: ['SQL Server', 'PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Cosmos DB', 'Oracle'],
}

const trustedStack = [
  'OpenAI',
  'Microsoft Azure',
  'AWS',
  'Google Cloud',
  'Databricks',
  'Snowflake',
  'Python',
  'TensorFlow',
  'PyTorch',
  'Apache Spark',
  'Docker',
  'Kubernetes',
  'Power BI',
  'Tableau',
  'React',
  'Next.js',
  'FastAPI',
]

const stats = [
  { value: '40+', label: 'AI Solutions Delivered' },
  { value: '120+', label: 'Data Pipelines Built' },
  { value: '25+', label: 'Cloud Migrations' },
  { value: '60+', label: 'ML Models Deployed' },
  { value: '8+', label: 'Countries Served' },
  { value: '90+', label: 'Enterprise Projects' },
]

const reasons = [
  'Enterprise Architecture',
  'Cloud Native Development',
  'AI First Approach',
  'Secure by Design',
  'Agile Delivery',
  'Certified Engineers',
  'Global Standards',
  '24x7 Support',
]

const industries = [
  'Healthcare',
  'Finance',
  'Insurance',
  'Retail',
  'Education',
  'Manufacturing',
  'Supply Chain',
  'Government',
]

const process = ['Discovery', 'Planning', 'Architecture', 'Development', 'Testing', 'Deployment', 'Maintenance']

const solutions = [
  'Enterprise AI Solutions',
  'AI Agents',
  'Document AI',
  'Computer Vision',
  'Predictive Analytics',
  'Recommendation Systems',
  'Fraud Detection',
  'Healthcare AI',
  'Enterprise Automation',
  'Customer Support AI',
  'Knowledge Assistant',
  'Voice AI',
]

const portfolio = [
  {
    title: 'Retail Intelligence Platform',
    problem: 'Disparate sales data blocked forecasting and merchandising decisions.',
    solution: 'Unified lakehouse, demand forecasting, and executive dashboards.',
    outcome: 'Sharper planning cycles with faster access to revenue and inventory signals.',
  },
  {
    title: 'Enterprise Agent Workspace',
    problem: 'Internal teams spent too much time on repetitive research and support tasks.',
    solution: 'Built secure AI agents with retrieval, workflow automation, and approvals.',
    outcome: 'Higher operational efficiency with human-in-the-loop governance.',
  },
  {
    title: 'Cloud Data Modernization',
    problem: 'Legacy ETL and siloed reporting slowed decision-making.',
    solution: 'Migrated pipelines, warehouse workloads, and semantic reporting models.',
    outcome: 'Modern analytics foundation ready for AI use cases and scale.',
  },
]

const caseStudies = [
  {
    title: 'Insurance Claims Automation',
    businessProblem: 'Manual claims review created delays, cost overruns, and inconsistent decisions.',
    implementation: 'Combined document AI, classification models, and workflow automation for triage.',
    value: 'Reduced review friction while improving visibility and response consistency.',
  },
  {
    title: 'Manufacturing Predictive Operations',
    businessProblem: 'Plant teams lacked early warning signals for downtime and maintenance risk.',
    implementation: 'Built sensor data pipelines, predictive models, and operator dashboards.',
    value: 'Improved reliability planning with data-driven maintenance decisions.',
  },
]

const blogTopics = [
  'Artificial Intelligence',
  'Data Engineering',
  'Machine Learning',
  'Cloud',
  'Python',
  'Agentic AI',
  'LLMs',
  'Data Analytics',
  'Technology Trends',
]

const careerItems = ['Open Positions', 'Internships', 'Benefits', 'Life at Infrix', 'Culture', 'Apply Now']

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p className="section-copy">{text}</p> : null}
    </div>
  )
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="hero" id="home">
        <nav className="topbar">
          <div className="brand">
            <img className="brand-logo" src={infrixLogo} alt="Infrix Technologies logo" />
          </div>

          <div className="nav-links">
            <div className="nav-link-list">
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#solutions">Solutions</a>
              <a href="#industries">Industries</a>
              <a href="#technologies">Technologies</a>
            </div>
            <a href="#contact" className="nav-cta">
              Request Consultation
            </a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">IT Services and IT Consulting</p>
            <h1>Engineering Intelligent Solutions for the AI Era</h1>
            <p className="lead">
              Infrix Technologies empowers businesses through Artificial
              Intelligence, Agentic AI, Data Engineering, Cloud Technologies, and
              Modern Software Development.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="primary-btn">
                Schedule Consultation
              </a>
              <a href="#services" className="secondary-btn">
                Our Services
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="signal-card">
              <div className="particle-grid" aria-hidden="true">
                {Array.from({ length: 20 }).map((_, index) => (
                  <span key={index} />
                ))}
              </div>
              <div className="signal-line signal-line-a" />
              <div className="signal-line signal-line-b" />
              <div className="card-chip">AI | Data | Cloud | Software</div>
              <h2>Premium digital systems for ambitious organizations.</h2>
              <p>
                We build enterprise-grade platforms, AI products, and scalable
                software ecosystems shaped for measurable business outcomes.
              </p>
            </div>
            <div className="floating-stat">
              <strong>Enterprise-Ready Delivery</strong>
              <span>Modern architecture, secure implementation, and outcome-driven consulting</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="marquee-section">
          <div className="marquee-track">
            {[...trustedStack, ...trustedStack].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </section>

        <section className="section about-section" id="about">
          <SectionHeading
            eyebrow="About Infrix"
            title="AI-first consulting built to modernize operations, unlock intelligence, and scale digital products."
            text="Infrix Technologies is an AI-first technology company specializing in Artificial Intelligence, Agentic AI, Data Engineering, Data Analytics, Cloud Solutions, and Custom Software Development."
          />
          <div className="about-grid">
            <p>
              We combine expertise in Artificial Intelligence, Data Engineering,
              Cloud Technologies, and Modern Software Development to solve
              complex business challenges and deliver measurable outcomes.
            </p>
            <p>
              From startups to enterprises, we build intelligent automation,
              scalable software systems, and enterprise-grade data platforms that
              help teams move faster with confidence.
            </p>
          </div>
        </section>

        <section className="metrics-section">
          {stats.map((item) => (
            <article key={item.label} className="metric-card">
              <strong>{item.value}</strong>
              <p>{item.label}</p>
            </article>
          ))}
        </section>

        <section className="section" id="services">
          <SectionHeading
            eyebrow="Services"
            title="A full-spectrum consulting and engineering stack across AI, data, cloud, and product delivery."
          />
          <div className="services-grid">
            {services.map((service) => (
              <article key={service} className="service-card">
                <span className="service-badge" />
                <p>{service}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section alt-surface">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Delivery standards inspired by global enterprise technology partners."
          />
          <div className="tag-grid">
            {reasons.map((item) => (
              <div key={item} className="tag-card">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="industries">
          <SectionHeading
            eyebrow="Industries"
            title="Solutions shaped around the operating realities of modern sectors."
          />
          <div className="industries-grid">
            {industries.map((item) => (
              <article key={item} className="industry-card">
                <h3>{item}</h3>
                <p>AI, analytics, automation, and platform engineering tailored to sector-specific needs.</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section process-section">
          <SectionHeading
            eyebrow="Development Process"
            title="Structured execution from strategy to long-term support."
          />
          <div className="process-rail">
            {process.map((step, index) => (
              <div key={step} className="process-node">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="solutions">
          <SectionHeading
            eyebrow="Solutions"
            title="Purpose-built AI and data solutions for customer experience, operations, and intelligence."
          />
          <div className="solutions-grid">
            {solutions.map((item) => (
              <article key={item} className="solution-card">
                <h3>{item}</h3>
                <p>Designed for scalable deployment, measurable impact, and enterprise adoption.</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="technologies">
          <SectionHeading
            eyebrow="Technologies"
            title="A modern ecosystem across AI models, cloud, analytics, engineering, and data platforms."
          />
          <div className="tech-groups">
            {Object.entries(technologies).map(([group, items]) => (
              <article key={group} className="tech-panel">
                <h3>{group}</h3>
                <div className="tech-tags">
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section alt-surface" id="portfolio">
          <SectionHeading
            eyebrow="Portfolio"
            title="Representative engagements spanning AI transformation, data modernization, and software delivery."
          />
          <div className="portfolio-grid">
            {portfolio.map((item) => (
              <article key={item.title} className="portfolio-card">
                <h3>{item.title}</h3>
                <p><strong>Problem:</strong> {item.problem}</p>
                <p><strong>Solution:</strong> {item.solution}</p>
                <p><strong>Outcome:</strong> {item.outcome}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="case-studies">
          <SectionHeading
            eyebrow="Case Studies"
            title="Business-led stories that connect architecture decisions to measurable value."
          />
          <div className="case-grid">
            {caseStudies.map((item) => (
              <article key={item.title} className="case-card">
                <h3>{item.title}</h3>
                <p><strong>Business Problem:</strong> {item.businessProblem}</p>
                <p><strong>Implementation:</strong> {item.implementation}</p>
                <p><strong>Business Value:</strong> {item.value}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section alt-surface" id="blog">
          <SectionHeading
            eyebrow="Blog"
            title="Thought leadership around AI, engineering, cloud, analytics, and the future of intelligent systems."
          />
          <div className="tag-grid">
            {blogTopics.map((topic) => (
              <div key={topic} className="tag-card">
                {topic}
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="careers">
          <SectionHeading
            eyebrow="Careers"
            title="Join a team building future-ready systems for ambitious organizations."
          />
          <div className="careers-panel">
            {careerItems.map((item) => (
              <div key={item} className="career-item">
                <strong>{item}</strong>
                <p>Bring curiosity, engineering discipline, and a passion for modern technology delivery.</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="footer-main">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let’s build intelligent systems that move your business forward.</h2>
            <p className="section-copy">
              Email, consultation requests, portfolio conversations, and enterprise
              discovery sessions can start here.
            </p>
          </div>
          <div className="contact-panel">
            <a href="mailto:hello@infrixtechnologies.com" className="primary-btn">
              hello@infrixtechnologies.com
            </a>
            <p>Phone: +91 00000 00000</p>
            <p>Office: Your company address here</p>
            <p>LinkedIn | GitHub | Instagram | YouTube</p>
          </div>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#solutions">Solutions</a>
          <a href="#industries">Industries</a>
          <a href="#blog">Blog</a>
          <a href="#careers">Careers</a>
          <a href="#contact">Contact</a>
          <a href="#home">Privacy Policy</a>
          <a href="#home">Terms</a>
        </div>
      </footer>
    </div>
  )
}
