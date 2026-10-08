import { useEffect, useRef, useState } from 'react'
import Heading from './Heading'
import ServiceIcon from './ServiceIcon'
import TechStack from './TechStack'
import PlatformModel from './PlatformModel'
import { serviceDetails } from './serviceDetails'

const services = [
  {
    slug: 'cloud-services', icon: 'cloud', title: 'Cloud Engineering',
    short: 'Build secure, resilient cloud foundations that scale with your business.',
    description: 'Cloud architecture, migration, and modernization designed around your workloads, security needs, and operating model.',
    features: ['Cloud architecture and landing zones', 'Migration and modernization', 'Cloud-native application design', 'Reliability and cost optimization'],
    tech: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Terraform'],
  },
  {
    slug: 'data-engineering', icon: 'data', title: 'Data Engineering',
    short: 'Turn fragmented data into dependable platforms and analytics foundations.',
    description: 'Design and build governed data platforms, reliable pipelines, and the foundations teams need for analytics and AI.',
    features: ['Data platform architecture', 'ETL and ELT pipelines', 'Lakehouse and warehouse foundations', 'Data quality and governance'],
    tech: ['Databricks', 'Microsoft Fabric', 'Snowflake', 'Apache Spark', 'Apache Kafka', 'PostgreSQL', 'MySQL', 'Redis'],
  },
  {
    slug: 'ai-machine-learning', icon: 'ai', title: 'AI & Machine Learning',
    short: 'Apply AI to real workflows with a focus on usefulness, safety, and scale.',
    description: 'Move from AI opportunity to production through practical use cases, model integration, and responsible engineering.',
    features: ['AI opportunity and solution design', 'LLM and retrieval applications', 'Machine-learning integration', 'Evaluation and AI safeguards'],
    tech: ['Python', 'LLM Platforms', 'LangChain', 'LangGraph', 'Vector Databases', 'PyTorch', 'OpenAI'],
  },
  {
    slug: 'java-spring-development', icon: 'java', title: 'Java & Spring Development',
    short: 'Build secure, scalable enterprise applications with Java and the Spring ecosystem.',
    description: 'Design, build, and modernize enterprise applications, APIs, and cloud-native services using Java and Spring.',
    features: ['Java application development', 'Spring Boot and Spring MVC', 'Microservices and REST API engineering', 'Spring Data JPA and Hibernate', 'Spring Security and identity integration', 'OAuth 2.0 and JWT integration', 'Kafka and event-driven applications', 'Legacy Java modernization', 'Performance and cloud readiness'],
    tech: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Spring Security', 'Hibernate', 'Maven', 'Gradle', 'REST APIs', 'OAuth 2.0', 'JWT', 'Apache Kafka', 'PostgreSQL', 'MySQL', 'Redis', 'Docker', 'Kubernetes'],
  },
  {
    slug: 'devops', icon: 'devops', title: 'DevOps & Platform Engineering',
    short: 'Build automated platforms and delivery workflows that help teams ship with confidence.',
    description: 'Improve the path from code to production with repeatable automation, containers, observability, and platform practices.',
    features: ['CI/CD design and automation', 'Infrastructure as code', 'Containers and Kubernetes', 'Observability and release practices'],
    tech: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'CI/CD', 'Azure'],
  },
  {
    slug: 'cybersecurity', icon: 'security', title: 'Cybersecurity',
    short: 'Build security into architecture, identity, infrastructure, and delivery.',
    description: 'Strengthen cloud and application environments through secure-by-design architecture and practical controls.',
    features: ['Cloud security architecture', 'Identity and access controls', 'Threat and risk reviews', 'Security in delivery workflows'],
    tech: ['Azure', 'AWS', 'Kubernetes', 'Terraform'],
  },
  {
    slug: 'it-consulting', icon: 'consulting', title: 'IT Consulting',
    short: 'Make clear technology decisions with an experienced engineering partner.',
    description: 'Get independent technical guidance for architecture, modernization, cloud, data, and AI investment decisions.',
    features: ['Technology strategy', 'Architecture assessment', 'Modernization roadmaps', 'Engineering advisory'],
    tech: ['React', 'Node.js', 'Python', 'Azure'],
  },
]
const deliverySteps = [
  ['01', 'Discover', 'Clarify the business goal, users, and current environment.'],
  ['02', 'Design', 'Agree on architecture, scope, security, and delivery milestones.'],
  ['03', 'Build', 'Implement the solution in focused, reviewable increments.'],
  ['04', 'Validate', 'Test functional behavior, performance, and operational readiness.'],
  ['05', 'Deploy', 'Release through a repeatable, environment-aware delivery process.'],
  ['06', 'Monitor', 'Observe health, reliability, and the behaviors that matter.'],
  ['07', 'Optimize', 'Use feedback and operational learning to improve the system.'],
]
const industries = ['Healthcare', 'Finance', 'E-commerce', 'Education', 'Real Estate', 'Manufacturing', 'Logistics', 'SaaS & Startups']
const principles = [
  ['01', 'Engineering-first', 'Architecture and delivery are shaped by maintainability, reliability, and the needs of the people operating the system.'],
  ['02', 'Cloud and data expertise', 'Cloud platforms and data foundations are designed to work together, not as disconnected projects.'],
  ['03', 'AI with a purpose', 'AI is applied to defined problems with evaluation, safeguards, and a path to production.'],
  ['04', 'Security by design', 'Identity, access, and protection are considered from the start of an engagement.'],
  ['05', 'Built to scale', 'Solutions are planned around real workloads and evolving business requirements.'],
  ['06', 'Delivery you can see', 'Clear decisions, short feedback loops, and visible progress keep teams aligned.'],
]
const technologyCategories = {
  Cloud: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Terraform'],
  Data: ['Databricks', 'Microsoft Fabric', 'Snowflake', 'Apache Spark', 'Apache Kafka'],
  'AI & ML': ['Python', 'OpenAI', 'PyTorch', 'LLM Platforms', 'LangChain', 'LangGraph', 'Vector Databases'],
  Backend: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Spring Security', 'Hibernate', 'REST APIs'],
  DevOps: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'CI/CD'],
  Databases: ['PostgreSQL', 'MySQL', 'Redis'],
}
const homeFaqs = [
  ['How do we start a project with Infrixon?', 'We begin with a focused discovery conversation to understand your goals, users, constraints, and the best next step.'],
  ['Do you work with startups and established teams?', 'Yes. We support early-stage teams, growing businesses, and established organizations modernizing their products or platforms.'],
  ['Can you work with our existing technology team?', 'Absolutely. We can lead delivery, add specialist capacity, or work alongside your team as a flexible engineering partner.'],
]
const projectBlueprints = [
  ['Cloud foundations', 'Plan a cloud migration with clear environment boundaries, access controls, infrastructure as code, and deployment workflows.', 'Cloud engineering · Platform'],
  ['Connected data platforms', 'Bring data from separate systems into reliable pipelines for reporting, analytics, and downstream applications.', 'Data engineering · Analytics'],
  ['AI-enabled workflows', 'Add AI to a defined workflow with the right data access, model integration, and evaluation before release.', 'Applied AI · Product engineering'],
]

const scrollBehavior = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
const go = (path) => {
  if (window.location.pathname + window.location.hash === path) {
    if (window.location.hash) document.getElementById(window.location.hash.slice(1))?.scrollIntoView({ behavior: scrollBehavior() })
    else window.scrollTo({ top: 0, behavior: scrollBehavior() })
    return
  }
  window.history.pushState({}, '', path)
  window.dispatchEvent(new PopStateEvent('popstate'))
  if (!window.location.hash) window.scrollTo({ top: 0, behavior: scrollBehavior() })
}
const industryId = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const servicePath = (slug) => `/services/${slug}`

function Backdrop({ compact = false }) { return <div className={`backdrop${compact ? ' compact' : ''}`} aria-hidden="true"><span className="backdrop-glow top" /><span className="backdrop-glow bottom" /><span className="backdrop-grid" /><svg viewBox="0 0 1440 620" preserveAspectRatio="none"><path d="M-80 510C200 620 270 380 520 370S850 620 1110 440s330-30 430 40" /><path d="M-80 560C210 680 300 460 540 445s310 150 570 0 300-100 400-20" /></svg><i className="particle p1" /><i className="particle p2" /><i className="particle p3" /></div> }
function Brand() {
  return <img className="brand-logo" src="/assets/infrixon-ai-labs-logo.png" alt="INFRIXON AI LABS" />
}

function ThemeToggle({ theme, onToggle }) {
  const nextTheme = theme === 'light' ? 'dark' : 'light'
  return <button
    className="theme-toggle"
    type="button"
    onClick={onToggle}
    aria-label={`Switch to ${nextTheme} theme`}
    aria-pressed={theme === 'dark'}
    title={`Switch to ${nextTheme} theme`}
  >
    {theme === 'light'
      ? <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.5 8.5 0 1 0 20.2 15.1Z" /></svg>
      : <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>}
    <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
  </button>
}

function Header({ path, theme, onThemeToggle }) {
  const [open, setOpen] = useState(false)
  const [drop, setDrop] = useState(false)
  const navigationRef = useRef(null)
  const menuRef = useRef(null)
  const servicesRef = useRef(null)
  const [scrolled, setScrolled] = useState(window.scrollY > 8)
  const activeClass = (href) => path === href ? 'active' : undefined

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', updateScroll, { passive: true })
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  useEffect(() => {
    if (!open && !drop) return
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        if (drop) { setDrop(false); servicesRef.current?.focus() }
        else { setOpen(false); menuRef.current?.focus() }
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open, drop])

  useEffect(() => {
    if (!open && !drop) return
    const dismiss = (event) => {
      if (!navigationRef.current?.contains(event.target)) { setOpen(false); setDrop(false) }
    }
    document.addEventListener('pointerdown', dismiss)
    return () => document.removeEventListener('pointerdown', dismiss)
  }, [open, drop])

  useEffect(() => {
    setOpen(false)
    setDrop(false)
  }, [path])

  return <header className={`header${scrolled ? ' scrolled' : ''}`}>
    <div className="container nav" ref={navigationRef}>
      <a className="brand-link" href="/" aria-label="INFRIXON AI LABS home" onClick={(e) => { e.preventDefault(); go('/') }}><Brand /></a>
      <button ref={menuRef} className="menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open} aria-controls="primary-navigation"><span /><span /><span /></button>
      <nav id="primary-navigation" className={open ? 'nav-open' : ''} aria-label="Primary navigation">
        <a className={activeClass('/')} aria-current={path === '/' ? 'page' : undefined} href="/" onClick={(e) => { e.preventDefault(); go('/'); setOpen(false) }}>Home</a>
        <a className={activeClass('/about')} aria-current={path === '/about' ? 'page' : undefined} href="/about" onClick={(e) => { e.preventDefault(); go('/about'); setOpen(false) }}>About</a>
        <div className="drop" onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setDrop(false) }} onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)}>
          <button ref={servicesRef} className={path.startsWith('/services') ? 'active' : undefined} onClick={() => setDrop(!drop)} aria-expanded={drop} aria-controls="services-navigation" aria-haspopup="true">Services⌄</button>
          {drop && <div id="services-navigation" className="mega"><a className="mega-overview" href="/services" onClick={event => { event.preventDefault(); go('/services'); setOpen(false); setDrop(false) }}><span><strong>Explore our services</strong><small>Advisory, cloud, data, AI, and software engineering.</small></span><span aria-hidden="true">&#8599;</span></a>{services.map((s) => <a className={path === servicePath(s.slug) ? 'active' : undefined} aria-current={path === servicePath(s.slug) ? 'page' : undefined} key={s.slug} href={servicePath(s.slug)} onClick={(e) => { e.preventDefault(); go(servicePath(s.slug)); setOpen(false); setDrop(false) }}><b aria-hidden="true"><ServiceIcon name={s.icon} /></b><span><strong>{s.title}</strong><small>{s.short}</small></span></a>)}</div>}
        </div>
        {[['Industries', '/industries'], ['Approach', '/portfolio'], ['Contact', '/contact']].map(([label, href]) => <a className={activeClass(href)} aria-current={path === href ? 'page' : undefined} key={href} href={href} onClick={(e) => { e.preventDefault(); go(href); setOpen(false) }}>{label}</a>)}
        <ThemeToggle theme={theme} onToggle={onThemeToggle} />
        <a className="nav-cta" href="/contact" onClick={(e) => { e.preventDefault(); go('/contact'); setOpen(false) }}>Discuss a project ↗</a>
      </nav>
    </div>
  </header>
}

function Footer() {
  return <footer>
    <div className="container footer-grid">
      <div><a className="brand-link footer-brand" href="/" aria-label="INFRIXON AI LABS home" onClick={(e) => { e.preventDefault(); go('/') }}><Brand /></a><p>IT consulting and engineering across cloud, data, AI, and enterprise software.</p><a className="text-link" href="/contact" onClick={(e) => { e.preventDefault(); go('/contact') }}>Start a conversation ↗</a></div>
      <div><h3>Company</h3>{[['About', '/about'], ['Approach', '/portfolio'], ['Industries', '/industries'], ['Contact', '/contact']].map(([label, href]) => <a key={href} href={href} onClick={(e) => { e.preventDefault(); go(href) }}>{label}</a>)}</div>
      <div><h3>Services</h3>{services.map((s) => <a key={s.slug} href={servicePath(s.slug)} onClick={(e) => { e.preventDefault(); go(servicePath(s.slug)) }}>{s.title}</a>)}</div>
      <div><h3>Connect</h3><p>India · Serving teams worldwide</p><a href="mailto:work@infrixtechnologies.com">work@infrixtechnologies.com</a></div>
    </div>
    <div className="container footer-bottom">© {new Date().getFullYear()} INFRIXON AI LABS. All rights reserved.<span>Cloud · Data · AI · Software Engineering</span></div>
  </footer>
}
function CTA({ title = 'Let’s talk about your next project.', eyebrow = 'Start a conversation' }) { return <section className="container cta"><Backdrop compact /><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2><p>Tell us about your application, infrastructure, or data challenge and the support your team needs.</p><a className="button light" href="/contact" onClick={(e) => { e.preventDefault(); go('/contact') }}>Talk to an expert ↗</a></div></section> }
function PageHero({ eyebrow, title, text }) { return <section className="page-hero"><Backdrop /><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section> }
function ServiceCard({ item, index }) {
  return <a className="service-card capability-card" href={servicePath(item.slug)} onClick={(event) => { event.preventDefault(); go(servicePath(item.slug)) }}>
    <div className="service-card-meta"><small>{String(index + 1).padStart(2, '0')}</small><span className="capability-icon"><ServiceIcon name={item.icon} /></span></div>
    <h3>{item.title}</h3>
    <p>{item.short}</p>
    <div className="capability-footer"><small>{item.tech.slice(0, 4).join(' · ')}</small><span>Explore service <b aria-hidden="true">↗</b></span></div>
  </a>
}
function WhyChooseUs() { const [open, setOpen] = useState(0); return <section className="section trust-section"><div className="container"><Heading eyebrow="Why Infrixon" title="Reliable engineering for important systems." text="A practical partner across architecture, implementation, and the work of keeping technology useful over time." /><div className="value-grid">{principles.map(([number, title, text]) => <article key={number}><b>{number}</b><h3>{title}</h3><p>{text}</p></article>)}</div><div className="home-faq"><div><span className="eyebrow">Good questions</span><h2>What would you like to know?</h2><p>Start with the challenge, the systems involved, and the outcome you need.</p><a className="text-link" href="/contact" onClick={(e) => { e.preventDefault(); go('/contact') }}>Ask our team ↗</a></div><div>{homeFaqs.map(([question, answer], index) => <article key={question}><button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}><span>{question}</span><b>{open === index ? '−' : '+'}</b></button>{open === index && <p>{answer}</p>}</article>)}</div></div></div></section> }

function ProjectArtwork({ index }) {
  const kind = ['cloud', 'data', 'ai'][index]
  return <div className={`project-picture project-picture-${kind}`} aria-hidden="true">
    <span className="project-art-label">INFRIXON / {['FOUNDATIONS', 'CONNECTIONS', 'INTELLIGENCE'][index]}</span>
    <svg className="project-diagram" viewBox="0 0 480 320" fill="none" focusable="false">
      {index === 0 && <>
        <g className="diagram-connection"><path d="M110 112v48h74M370 112v48h-74M110 216v-56M370 216v-56" /><path d="M240 72v50m0 76v50" /></g>
        <g className="diagram-node">{[[60, 64], [320, 64], [60, 216], [320, 216]].map(([x, y]) => <g key={`${x}-${y}`}><rect x={x} y={y} width="100" height="48" rx="3" /><path d={`M${x + 18} ${y + 17}h38m-38 12h64`} /><circle cx={x + 78} cy={y + 17} r="3" /></g>)}</g>
        <rect className="diagram-core" x="184" y="122" width="112" height="76" rx="3" />
        <g className="diagram-detail">{[139, 160, 181].map((y) => <g key={y}><circle cx="204" cy={y} r="3" /><path d={`M218 ${y}h58`} /></g>)}</g>
        <g className="diagram-endpoint"><circle cx="240" cy="72" r="6" /><circle cx="240" cy="248" r="6" /></g>
      </>}
      {index === 1 && <>
        <g className="diagram-connection"><path d="M76 98h60v62h64M76 160h124M76 222h60v-62M280 160h60M366 134V88h45M366 186v46h45" /></g>
        <g className="diagram-node">{[80, 142, 204].map((y) => <g key={y}><rect x="44" y={y} width="32" height="36" rx="3" /><path d={`M52 ${y + 12}h16m-16 10h16`} /></g>)}<circle cx="366" cy="160" r="26" /><rect x="411" y="74" width="30" height="28" rx="3" /><rect x="411" y="218" width="30" height="28" rx="3" /></g>
        <rect className="diagram-core" x="200" y="126" width="80" height="68" rx="3" />
        <g className="diagram-detail"><path d="M217 147h46m-46 13h46m-46 13h30M355 160h22m-11-11v22" /></g>
        <g className="diagram-endpoint"><circle cx="136" cy="160" r="5" /><circle cx="310" cy="160" r="5" /></g>
      </>}
      {index === 2 && <>
        <circle className="diagram-orbit" cx="240" cy="160" r="88" />
        <g className="diagram-connection"><path d="M92 88l148 72L92 232M92 160h148M240 160l148-72M240 160h148M240 160l148 72M166 58l74 102 74-102M166 262l74-102 74 102" /><path d="M92 88l74-30 148 0 74 30M92 232l74 30h148l74-30" /></g>
        <g className="diagram-node">{[[92, 88], [92, 160], [92, 232], [388, 88], [388, 160], [388, 232]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="12" />)}</g>
        <g className="diagram-endpoint">{[[166, 58], [314, 58], [166, 262], [314, 262]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="5" />)}</g>
        <path className="diagram-core" d="m240 128 32 32-32 32-32-32z" />
        <path className="diagram-detail" d="M229 160h22m-11-11v22" />
      </>}
    </svg>
    <span className="project-art-bottom">{['CLOUD ARCHITECTURE', 'DATA PIPELINES', 'AI APPLICATIONS'][index]}</span>
    <span className="project-open">↗</span>
  </div>
}

function EngineeringVisual() {
  const systemLayers = [
    ['data', 'Data Sources', 'Operational systems · Files · Events'],
    ['data', 'Data Platform', 'Fabric · Snowflake · Databricks'],
    ['ai', 'AI / ML', 'LLMs · Retrieval · Model services'],
    ['java', 'APIs', 'Java · Spring · REST APIs'],
    ['consulting', 'Applications', 'Business workflows · Digital products'],
  ]
  return <figure className="system-visual">
    <figcaption><span className="system-status" aria-hidden="true" /> REFERENCE ARCHITECTURE <span>IX / 01</span></figcaption>
    <ol className="system-flow" aria-label="From data sources to business applications">{systemLayers.map(([icon, title, tools], index) => <li key={title}>
      <span className="system-number">0{index + 1}</span><span className="system-icon"><ServiceIcon name={icon} /></span>
      <div><strong>{title}</strong><small>{tools}</small></div>
      <span className="system-node" aria-hidden="true" />
    </li>)}</ol>
    <div className="system-foundation"><span><ServiceIcon name="cloud" />Cloud & platform</span><small>AWS · Azure · Kubernetes · Terraform</small></div>
    <p className="system-security"><ServiceIcon name="security" />Identity, security, and observability across every layer.</p>
  </figure>
}

function DeliveryLifecycle({ steps, label = 'Engineering lifecycle' }) {
  return <ol className="engineering-lifecycle" aria-label={label}>{steps.map(([number, title, text]) => <li key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
}

function EngineeringModel() {
  const stages = [
    ['Discover', 'Define the goal, users, and constraints.'],
    ['Architect', 'Plan the system, integrations, and security.'],
    ['Engineer', 'Build and test in reviewable increments.'],
    ['Deploy', 'Release through repeatable delivery workflows.'],
    ['Operate', 'Monitor health and prepare for support.'],
    ['Scale', 'Improve reliability, capacity, and cost.'],
  ]
  return <section className="section container engineering-model">
    <Heading eyebrow="04 / From idea to production" title="An engineering model for the whole lifecycle." text="A project does not end at deployment. We plan for the people and processes that keep the system running." />
    <DeliveryLifecycle steps={stages.map(([title, text], index) => [String(index + 1).padStart(2, '0'), title, text])} />
    <div className="engineering-guardrails"><span><ServiceIcon name="security" />Security by design</span><span><ServiceIcon name="data" />Data governance</span><span><ServiceIcon name="devops" />Delivery automation</span></div>
  </section>
}


const industryFocus = {
  Healthcare: { icon: 'healthcare', text: 'Connected care workflows, operational data, and secure access.' },
  Finance: { icon: 'finance', text: 'Reliable transactions, reporting pipelines, and application integration.' },
  'E-commerce': { icon: 'retail', text: 'Product data, order workflows, and scalable customer experiences.' },
  Education: { icon: 'education', text: 'Learning platforms, course workflows, and connected student data.' },
  'Real Estate': { icon: 'property', text: 'Property information, document workflows, and digital portals.' },
  Manufacturing: { icon: 'manufacturing', text: 'Production data, operational reporting, and system integration.' },
  Logistics: { icon: 'logistics', text: 'Shipment visibility, event pipelines, and connected operations.' },
  'SaaS & Startups': { icon: 'startup', text: 'Product architecture, cloud foundations, and application delivery.' },
}

function FeaturedWork() {
  const [selected, setSelected] = useState(0)
  const [title, text, tags] = projectBlueprints[selected]
  const service = services[selected]
  return <section className="section container editorial-projects" aria-labelledby="featured-work-title">
    <div className="editorial-section-head"><div className="heading"><span className="eyebrow">Project approaches</span><h2 id="featured-work-title">A practical starting point for your project.</h2><p>Example scopes to help you plan a conversation about cloud, data, or AI.</p></div><a className="text-link" href="/portfolio" onClick={(event) => { event.preventDefault(); go('/portfolio') }}>See project approaches ↗</a></div>
    <div className="work-selector" role="group" aria-label="Choose a project approach">{projectBlueprints.map(([name], index) => <button type="button" key={name} aria-pressed={selected === index} aria-controls="featured-work-detail" onClick={() => setSelected(index)}><span>0{index + 1}</span>{name}<b aria-hidden="true">↗</b></button>)}</div>
    <div id="featured-work-detail" className="featured-work-detail" role="region" aria-labelledby="featured-work-heading"><div className={'featured-work-visual project-' + selected}><ProjectArtwork index={selected} /></div><div className="featured-work-copy"><span className="eyebrow">{tags}</span><h3 id="featured-work-heading">{title}</h3><p>{text}</p><span className="work-scope-label">Typical scope</span><ul>{service.features.slice(0, 3).map((feature) => <li key={feature}>{feature}</li>)}</ul><a className="text-link" href="/contact" onClick={(event) => { event.preventDefault(); go('/contact') }}>Discuss a similar project ↗</a></div></div>
    <p className="work-disclaimer">Illustrative engagement patterns, not named client case studies or completed client results.</p>
  </section>
}

function IndustryOverview() {
  return <section className="section editorial-industries" aria-labelledby="industry-overview-title"><div className="container"><div className="editorial-section-head"><div className="heading"><span className="eyebrow">Industry context we support</span><h2 id="industry-overview-title">Engineering that understands your operations.</h2><p>The same technology needs a different approach in every industry. Start with the workflows, data, and people involved.</p></div><a className="text-link" href="/industries" onClick={(event) => { event.preventDefault(); go('/industries') }}>Explore industries ↗</a></div><div className="sector-grid">{industries.map((industry) => <a className="sector-card" key={industry} href={'/industries#' + industryId(industry)} onClick={(event) => { event.preventDefault(); go('/industries#' + industryId(industry)) }}><span className="sector-icon"><ServiceIcon name={industryFocus[industry].icon} /></span><h3>{industry}</h3><p>{industryFocus[industry].text}</p><span className="sector-link">Explore industry <b aria-hidden="true">↗</b></span></a>)}</div></div></section>
}

function Home() {
  return <div className="editorial-home">
    <section className="editorial-hero">
      <div className="container editorial-hero-grid">
        <div className="editorial-hero-copy">
          <span className="eyebrow"><i className="business-label-dot" /> IT SERVICES & TECHNOLOGY CONSULTING</span>
          <h1>IT expertise for<br /><em>the work ahead.</em></h1>
          <p>IT consulting and engineering for cloud, data, AI, and enterprise applications.</p>
          <div className="buttons"><a className="button editorial-primary" href="/contact" onClick={(event) => { event.preventDefault(); go('/contact') }}>Talk about your project <span aria-hidden="true">&#8599;</span></a><a className="editorial-hero-link" href="#expertise">View our services <span aria-hidden="true">&rarr;</span></a></div>
        </div>
        <figure className="consultancy-photo">
          <img src="/assets/workplace-collaboration.jpg" alt="Software professionals collaborating around laptops in a shared workspace" width="1400" height="934" fetchpriority="high" />
        </figure>
      </div>
    </section>
    <section id="expertise" className="section practice-section"><div className="container"><div className="editorial-section-head"><Heading eyebrow="Our expertise" title="How we can help." /><a className="text-link" href="/services" onClick={event => { event.preventDefault(); go('/services') }}>Explore all services <span aria-hidden="true">&#8599;</span></a></div><div className="practice-grid">{[
      ['consulting', 'Technology advisory', 'Understand your options before committing to a platform, migration, or new build.', ['Architecture assessments', 'Modernization roadmaps', 'Technology selection'], services[6]],
      ['cloud', 'Cloud & delivery platforms', 'Prepare your infrastructure and delivery process for the applications your business depends on.', ['Cloud migration & foundations', 'Infrastructure automation', 'DevOps & observability'], services[0]],
      ['data', 'Data & applied AI', 'Connect business data and test where AI can support a specific, measurable workflow.', ['Data pipelines & platforms', 'Analytics foundations', 'AI integration & evaluation'], services[1]],
      ['java', 'Enterprise software', 'Modernize existing applications or build services that work with the systems you already use.', ['Java & Spring applications', 'APIs & system integration', 'Application modernization'], services[3]],
    ].map(([icon, title, text, scope, service], index) => <article key={title}><div className="practice-meta"><ServiceIcon name={icon} /><span>0{index + 1}</span></div><h3>{title}</h3><p>{text}</p><ul>{scope.map(point => <li key={point}>{point}</li>)}</ul><a className="text-link" href={servicePath(service.slug)} onClick={event => { event.preventDefault(); go(servicePath(service.slug)) }}>Explore {title.toLowerCase()} <span aria-hidden="true">&#8599;</span></a>{icon === 'data' && <a className="practice-secondary" href={servicePath(services[2].slug)} onClick={event => { event.preventDefault(); go(servicePath(services[2].slug)) }}>AI & machine learning services <span aria-hidden="true">&#8599;</span></a>}</article>)}</div></div></section>
    <FeaturedWork />
    <IndustryOverview />

    <section className="section container engagement-section"><Heading eyebrow="Working together" title="Start with the support you need." text="Choose a technical review, specialist support, or a defined delivery project." /><div className="engagement-grid">{[
      ['consulting', 'A technical review', 'You need a second opinion before making a decision.', ['Review the current architecture', 'Identify constraints and risks', 'Agree on recommended next steps']],
      ['devops', 'Support for your team', 'You have a delivery team and need specialist help.', ['Define the expertise you need', 'Work within your delivery process', 'Document decisions and handover']],
      ['java', 'A defined project', 'You need a partner to take an agreed scope through delivery.', ['Set deliverables and milestones', 'Review working increments together', 'Plan testing, release, and ownership']],
    ].map(([icon, title, text, points]) => <article key={title}><span className="engagement-icon"><ServiceIcon name={icon} /></span><h3>{title}</h3><p>{text}</p><ul>{points.map(point => <li key={point}>{point}</li>)}</ul><a className="text-link" href="/contact" onClick={event => { event.preventDefault(); go('/contact') }}>Discuss this with us <span aria-hidden="true">&#8599;</span></a></article>)}</div></section>
    <section className="section container practical-faq"><Heading eyebrow="Before we talk" title="A few useful answers." /><div>{homeFaqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>
    <section className="editorial-contact"><div className="container contact-inner"><span className="eyebrow">Start a conversation</span><div className="contact-main"><div><h2>What needs to<br /><em>work better?</em></h2><p className="closing-copy">Tell us about the system, project, or decision in front of you. A short outline is enough to start.</p></div><div className="closing-actions"><a className="button light" href="/contact" onClick={event => { event.preventDefault(); go('/contact') }}>Discuss your project <span aria-hidden="true">&#8599;</span></a><a className="closing-email" href="mailto:work@infrixtechnologies.com">work@infrixtechnologies.com</a><span>India ? Working with teams worldwide</span></div></div></div></section>
  </div>
}

function About() {
  const beliefs = [principles[0], principles[3], principles[2], principles[4]]
  const reasons = [
    ['Architecture clarity', 'Understand the system boundaries, dependencies, and trade-offs before committing to a direction.'],
    ['Engineering depth', 'Connect cloud, data, AI, Java, and platform decisions around the needs of the whole system.'],
    ['Flexible collaboration', 'Work alongside your team, add focused expertise, or shape a defined delivery engagement.'],
    ['Production-focused delivery', 'Plan for testing, release, observability, and handover as part of the engineering work.'],
  ]

  return <div className="about-page">
    <PageHero
      eyebrow="About INFRIXON AI LABS"
      title="Cloud, data, AI, and software. Built with your team."
      text="INFRIXON AI LABS is an IT services and consulting company based in India. We help teams plan and deliver cloud, data, AI, and enterprise software projects."
    />

    <section className="section container about about-story">
      <div>
        <span className="eyebrow">01 / Who we are</span>
        <h2>Engineering technology that solves real business problems.</h2>
        <p>INFRIXON AI LABS combines consulting and engineering across cloud, data, AI, Java, and modern software. We work alongside teams from architecture and modernization through implementation and operation.</p>
        <p>From architecture decisions to dependable delivery, we start with your goals, existing systems, and constraints. The work connects applications, infrastructure, and data to the people who use and operate them.</p>
        <a className="text-link" href="/services" onClick={(event) => { event.preventDefault(); go('/services') }}>Explore our engineering expertise ↗</a>
      </div>
      <figure className="about-focus">
        <figcaption><span className="eyebrow">Technology, connected</span><strong>Start with the business need.</strong></figcaption>
        <div className="about-focus-goal"><ServiceIcon name="consulting" /><span>Goals · Users · Operating context</span></div>
        <div className="about-focus-layers">{[['cloud', 'Cloud'], ['data', 'Data'], ['ai', 'AI & software']].map(([icon, title]) => <div key={icon}><ServiceIcon name={icon} /><strong>{title}</strong></div>)}</div>
        <p className="about-focus-outcome">Applications your team can use, maintain, and operate.</p>
        <span className="about-focus-security"><ServiceIcon name="security" />Security considered throughout.</span>
      </figure>
    </section>

    <section className="section soft about-beliefs"><div className="container">
      <Heading eyebrow="02 / What we believe" title="Technology should be useful, maintainable, and built to last." text="These principles guide how we approach architecture, implementation, and the life of a system after release." />
      <div className="principle-grid about-principles">{beliefs.map(([, title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div></section>

    <section className="section dark about-delivery"><div className="container">
      <Heading eyebrow="03 / How we work" title="A clear path from discovery to operation." text="Agree on the direction, build in reviewable increments, and use validation and operational feedback to guide the next step." />
      <DeliveryLifecycle steps={deliverySteps} label="Our delivery lifecycle" />
      <p className="about-delivery-note">The process adapts to your environment. Decisions, progress, and handover stay visible to your team.</p>
    </div></section>

    <PlatformModel eyebrow="04 / Our engineering model" />

    <section className="section container about-why">
      <Heading eyebrow="05 / Why Infrixon" title="Practical decisions. Visible delivery." text="An engineering engagement should leave your team with a clearer system, useful working software, and the context to keep moving." />
      <div className="about-reasons">{reasons.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <CTA eyebrow="06 / Start a conversation" title="Tell us what you're working on." />
  </div>
}
function Services() { return <><PageHero eyebrow="Core services" title="Cloud, data, AI, and engineering—connected." text="From technology strategy to delivery, connect the expertise you need to modernize systems and build for your next stage of growth." /><section className="section container"><div className="service-grid all-services">{services.map((item, i) => <ServiceCard item={item} index={i} key={item.slug} />)}</div></section><CTA title="Not sure where to start? Talk to an expert." /></> }
function JavaArchitecture() { const layers = [['Client / Frontend', 'Web, mobile, and enterprise systems'], ['API Gateway', 'REST endpoints, identity, and validation'], ['Spring Boot Services', 'Spring MVC, business services, and integrations'], ['Business Logic', 'Domain rules, workflows, and event handlers'], ['Data Access', 'Spring Data JPA, Hibernate, and repositories'], ['Databases / Messaging', 'PostgreSQL, MySQL, Redis, and Kafka']]; return <section className="section soft"><div className="container"><Heading eyebrow="Reference architecture" title="A clear path from client to data layer." text="The design is tailored to your current platform, security, performance, and operational requirements." /><div className="java-architecture" aria-label="Java and Spring application architecture">{layers.map(([title, detail], index) => <div className="java-architecture-step" key={title}><article><span>0{index + 1}</span><div><strong>{title}</strong><small>{detail}</small></div></article>{index < layers.length - 1 && <b aria-hidden="true">↓</b>}</div>)}</div><div className="java-platform-note"><strong>Deployment platform</strong><span>Docker · Kubernetes · Cloud infrastructure · CI/CD · Observability</span></div></div></section> }
function ServicePage({ item }) {
  const [open, setOpen] = useState(0)
  const related = services.filter((service) => service.slug !== item.slug).slice(0, 3)

  return (
    <>
      <PageHero eyebrow={`Service / 0${services.indexOf(item) + 1}`} title={item.slug === 'java-spring-development' ? 'Enterprise Java & Spring Engineering' : item.title} text={item.description} />
      <section className="section container intro service-intro">
        <div><span className="eyebrow">Service overview</span><h2>{item.short}</h2></div>
        <p>We shape the work around your current environment, business priorities, and operational needs—from an initial assessment through implementation and handover.</p>
      </section>
      {item.slug === 'java-spring-development' && <section className="section container"><Heading eyebrow="Challenges we solve" title="Modernize and extend enterprise Java systems." /><div className="capabilities">{[['Legacy application modernization', 'Plan incremental change for established Java applications.'], ['API and system integration', 'Connect services, databases, queues, and enterprise systems.'], ['Service architecture', 'Separate responsibilities while keeping operations understandable.'], ['Security and performance', 'Address access controls, application behavior, and runtime needs.']].map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>}
      <section className="section soft">
        <div className="container">
          <Heading eyebrow="Core capabilities" title="Practical work, scoped to your needs." />
          <div className="capabilities">{item.features.map((feature, index) => <article key={feature}><b>0{index + 1}</b><h3>{feature}</h3><p>{serviceDetails[item.slug][index]}</p></article>)}</div>
        </div>
      </section>
      {item.slug === 'java-spring-development' && <JavaArchitecture />}
      <section className="section container split">
        <div><span className="eyebrow">Delivery process</span><h2>Progress you can see.</h2><p>Start with the problem and the existing architecture. Agree on the direction, deliver in clear increments, and plan for ongoing ownership.</p></div>
        <div className="steps">{deliverySteps.map(([number, title, text]) => <div key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
      </section>
      <section className="dark section">
        <div className="container"><Heading eyebrow="Technology and approach" title="Choose tools for the environment." text="These are representative technologies for this capability, not a fixed or required stack." /><TechStack items={item.tech} /></div>
      </section>
      {item.slug === 'java-spring-development' && <section className="section soft"><div className="container"><Heading eyebrow="Engineering outcomes" title="Built for maintainability and operation." /><div className="capabilities">{[['Maintainable services', 'Clear boundaries and established Java/Spring practices.'], ['Secure access', 'Authentication and authorization designed into the application.'], ['Reliable integration', 'APIs, persistence, and event flows suited to the system.'], ['Cloud-ready delivery', 'Container and deployment approaches aligned to your platform.']].map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>}
      <section className="section container">
        <Heading eyebrow="Related services" title="Connected expertise when you need it." />
        <div className="service-grid">{related.map((service, index) => <ServiceCard item={service} index={index} key={service.slug} />)}</div>
      </section>
      <section className="section soft service-faq"><div className="container faq">
        <Heading eyebrow="FAQ" title="Questions, answered." />
        <div>{['What does an engagement include?', 'Can you work with our existing team?', 'How do we define the first step?'].map((question, index) => <article key={question}><button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}><span>{question}</span><b>{open === index ? '−' : '+'}</b></button>{open === index && <p>{['We agree on scope, deliverables, milestones, and handover with you before implementation. The engagement can cover an assessment, a specific build, or a broader modernization project.', 'Yes. We can work alongside your engineers, provide specialist expertise, or lead a defined delivery engagement with regular reviews and shared decisions.', 'Start with a discovery conversation about your business goal and current systems. Together we identify priorities and agree on a practical first step.'][index]}</p>}</article>)}</div>
      </div></section>
      <CTA title={item.slug === 'java-spring-development' ? 'Talk to an expert about Java & Spring.' : 'Talk to an expert about this service.'} />
    </>
  )
}
function Projects() { return <><PageHero eyebrow="Project approaches" title="What an engagement can look like." text="Explore example scopes for cloud, data, and AI projects. These describe possible ways to work together; scope and delivery depend on your systems and priorities." /><section className="section container work-section"><div className="work-grid">{projectBlueprints.map(([title, text, tags], index) => <article className={`work-card work-card-${index + 1} project-${index}`} key={title}><ProjectArtwork index={index} /><div className="work-copy"><span>{tags}</span><h3>{title}</h3><p>{text}</p><a className="text-link" href="/contact" onClick={(e) => { e.preventDefault(); go('/contact') }}>Discuss a similar challenge ↗</a></div></article>)}</div><p className="work-disclaimer">These are illustrative engagement patterns, not named client case studies or claims of completed client outcomes.</p></section><section className="section soft"><div className="container"><Heading eyebrow="How we deliver" title="A clear path from challenge to dependable delivery." text="We align technology work to business needs, keep decisions visible, and build in practical increments." /><div className="value-grid delivery-timeline">{deliverySteps.map(([number, title, text]) => <article key={number}><b>{number}</b><h3>{title}</h3><p>{text}</p></article>)}</div></div></section><CTA title="Let's make meaningful progress together." /></> }
function Industries() {
  return <><PageHero eyebrow="Industries" title="Engineering shaped by your industry." text="Explore the workflows and systems our cloud, data, AI, and software capabilities can support." /><section className="section container industry-list">{industries.map((industry, index) => <article key={industry} id={industryId(industry)}><b>0{index + 1}</b><div><span className="eyebrow">Industry focus</span><h2>{industry}</h2><p>{industryFocus[industry].text}</p><a className="text-link" href="/contact" onClick={(event) => { event.preventDefault(); go('/contact') }}>Talk about {industry.toLowerCase()} ↗</a></div><i aria-hidden="true"><ServiceIcon name={industryFocus[industry].icon} /></i></article>)}</section><CTA title="Let’s discuss your systems and workflows." /></>
}
function Contact() { const [draftHref, setDraftHref] = useState(''); function openEnquiry(event) { event.preventDefault(); const fields = new FormData(event.currentTarget); const service = services.find((item) => item.slug === fields.get('service'))?.title || 'General enquiry'; const body = ['Name: ' + fields.get('name'), 'Business email: ' + fields.get('email'), 'Company: ' + (fields.get('company') || 'Not provided'), 'Phone: ' + (fields.get('phone') || 'Not provided'), 'Service: ' + service, '', fields.get('message')].join('\n'); const href = 'mailto:work@infrixtechnologies.com?subject=' + encodeURIComponent('Website enquiry: ' + service) + '&body=' + encodeURIComponent(body); setDraftHref(href); window.location.assign(href); } return <><PageHero eyebrow="Contact" title="Talk to the Infrixon team." text="Share the problem you want to solve, the systems involved, and where you need support. We can start there." /><section className="section container contact"><div><span className="eyebrow">Start a conversation</span><h2>What are you planning to build or improve?</h2><p>Prepare an email using the form to outline your cloud, data, AI, security, or engineering needs. For a direct conversation, email our team.</p><div className="contact-details"><span>Business email</span><a href="mailto:work@infrixtechnologies.com">work@infrixtechnologies.com</a><span>Location</span><p>India · Serving teams worldwide</p></div><aside className="contact-next"><h3>Helpful details to include</h3><ul><li>The problem and the outcome you need</li><li>Your existing technology and team</li><li>Any deadlines or delivery constraints</li></ul><p>A short outline is enough. We can discuss the technical detail together.</p></aside></div><form onSubmit={openEnquiry}><div className="form-row"><label>Name<input required autoComplete="name" name="name" placeholder="Your name" maxLength={100} /></label><label>Business email<input required autoComplete="email" type="email" name="email" placeholder="you@company.com" /></label></div><div className="form-row"><label>Company<input autoComplete="organization" name="company" placeholder="Company name" maxLength={150} /></label><label>Phone (optional)<input autoComplete="tel" type="tel" name="phone" placeholder="Your phone number" /></label></div><label>Service interested in<select required name="service" defaultValue=""><option value="" disabled>Choose a service</option><option value="general">I need help deciding</option>{services.map((service) => <option key={service.slug} value={service.slug}>{service.title}</option>)}</select></label><label>Message<textarea required name="message" rows="5" placeholder="What needs to change? Tell us about your current systems, the outcome you need, and any timing or budget constraints." maxLength={5000} /></label><button className="button primary" type="submit">Continue in email ↗</button><p className="form-help">Opens your email app with these details. Send the draft there to complete your enquiry.</p>{draftHref && <p className="success" role="status">Your email draft is ready. <a href={draftHref}>Open the draft again ↗</a></p>}</form></section><div className="container contact-banner"><h2>Prefer email?</h2><a className="button primary" href="mailto:work@infrixtechnologies.com">Email Infrixon ↗</a></div></> }
function Chat() { const inputRef = useRef(null); const launcherRef = useRef(null); const logRef = useRef(null); const [open, setOpen] = useState(false); const [messages, setMessages] = useState([]); const [input, setInput] = useState(''); const [loading, setLoading] = useState(false); const [error, setError] = useState(''); useEffect(() => { if (!open) return; inputRef.current?.focus(); const close = (event) => { if (event.key === 'Escape') { setOpen(false); launcherRef.current?.focus() } }; window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close) }, [open]); useEffect(() => { if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight }, [messages, loading, open]); async function sendMessage(event) { event.preventDefault(); const content = input.trim(); if (!content || loading) return; const nextMessages = [...messages, { role: 'user', content }]; setMessages(nextMessages); setInput(''); setError(''); setLoading(true); try { const response = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: AbortSignal.timeout(25000), body: JSON.stringify({ messages: nextMessages.slice(-12) }) }); if (!response.headers.get('content-type')?.includes('application/json')) throw new Error('Assistant unavailable'); const result = await response.json(); if (!response.ok || typeof result.message !== 'string' || !result.message.trim()) throw new Error('Assistant unavailable'); setMessages([...nextMessages, { role: 'assistant', content: result.message }]) } catch { setError('The assistant is unavailable right now. Please contact our team below.') } finally { setLoading(false) } } return <div className="chat">{open && <section id="assistant-panel" className="chat-panel" role="dialog" aria-label="INFRIXON AI LABS assistant"><div className="chat-header"><div><span className="eyebrow">INFRIXON AI LABS</span><strong>Ask our assistant</strong></div><button type="button" onClick={() => { setOpen(false); launcherRef.current?.focus() }} aria-label="Close assistant">×</button></div><div ref={logRef} className="chat-messages" role="log" aria-live="polite" aria-label="Conversation">{messages.length === 0 && <p className="chat-intro">Ask about cloud, data, AI, Java/Spring, or platform engineering.</p>}{messages.map((item, index) => <p className={`chat-message ${item.role}`} key={`${item.role}-${index}`}>{item.content}</p>)}{loading && <p className="chat-intro" role="status">Thinking…</p>}</div>{error && <p className="chat-error" role="alert">{error}</p>}<form className="chat-form" onSubmit={sendMessage}><label className="sr-only" htmlFor="assistant-message">Your message</label><input ref={inputRef} id="assistant-message" value={input} onChange={(event) => setInput(event.target.value)} maxLength={2000} placeholder="Ask a question…" disabled={loading} /><button className="button primary" type="submit" disabled={loading || !input.trim()} aria-label="Send message">{loading ? '…' : 'Send'}</button></form><a className="chat-contact" href="/contact" onClick={(e) => { e.preventDefault(); go('/contact'); setOpen(false) }}>Or contact our team ↗</a></section>}<button ref={launcherRef} type="button" onClick={() => setOpen(!open)} aria-controls="assistant-panel" aria-expanded={open} aria-label={open ? 'Close assistant' : 'Open assistant'}>✦ <b>{open ? 'Close' : 'Ask a question'}</b></button></div> }
const routeDescriptions = {
  '/': 'INFRIXON AI LABS partners with businesses on cloud engineering, data platforms, AI solutions, Java and Spring development, DevOps, and technology consulting.',
  '/about': 'Learn how INFRIXON AI LABS helps organizations modernize cloud, data, AI, Java, and enterprise software systems.',
  '/services': 'Explore cloud engineering, data engineering, AI and machine learning, Java and Spring development, DevOps, cybersecurity, and IT consulting.',
  '/portfolio': 'Explore representative cloud, data, AI, and software engineering project patterns from INFRIXON AI LABS.',
  '/industries': 'Explore the industry contexts supported by INFRIXON AI LABS across cloud, data, and engineering.',
  '/contact': 'Talk with INFRIXON AI LABS about cloud, data, AI, Java & Spring, security, or software engineering.',
}

function Seo({ path }) { useEffect(() => { const service = services.find((item) => path === servicePath(item.slug)); const titles = { '/': 'INFRIXON AI LABS | Cloud, Data, AI & Software Engineering', '/about': 'About | INFRIXON AI LABS', '/services': 'Services | INFRIXON AI LABS', '/portfolio': 'Project approaches | INFRIXON AI LABS', '/industries': 'Industries | INFRIXON AI LABS', '/contact': 'Contact | INFRIXON AI LABS' }; const title = service ? `${service.title} | INFRIXON AI LABS` : titles[path] || 'INFRIXON AI LABS'; const description = routeDescriptions[path] || service?.description || routeDescriptions['/']; document.title = title; for (const [selector, value] of [['meta[name="description"]', description], ['meta[property="og:title"]', title], ['meta[property="og:description"]', description], ['meta[name="twitter:title"]', title], ['meta[name="twitter:description"]', description]]) { const tag = document.querySelector(selector); if (tag) tag.setAttribute('content', value) } }, [path]); return null }
function NotFound() { return <><PageHero eyebrow="Page not found" title="Let’s get you back on track." text="That page does not exist, but there is plenty more to explore." /><section className="section container"><a className="button primary" href="/" onClick={(event) => { event.preventDefault(); go('/') }}>Back to home ↗</a></section></> }
function App() {
  const [path, setPath] = useState(window.location.pathname.replace(/\/$/, '') || '/')
  const [theme, setTheme] = useState(() => {
    let savedTheme
    try { savedTheme = window.localStorage.getItem('infrixon-theme') } catch { /* Storage may be disabled. */ }
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    const handler = () => setPath(window.location.pathname.replace(/\/$/, '') || '/')
    window.addEventListener('popstate', handler)
    return () => window.removeEventListener('popstate', handler)
  }, [])

  useEffect(() => {
    const anchor = window.location.hash.slice(1)
    if (anchor) document.getElementById(anchor)?.scrollIntoView({ behavior: scrollBehavior(), block: 'start' })
  }, [path])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#071321' : '#F7F9FC')
    try { window.localStorage.setItem('infrixon-theme', theme) } catch { /* Keep the toggle working without storage. */ }
  }, [theme])

  const item = services.find((service) => servicePath(service.slug) === path)
  let page = <Home />
  if (path === '/about') page = <About />
  else if (path === '/services') page = <Services />
  else if (item) page = <ServicePage key={item.slug} item={item} />
  else if (path === '/portfolio') page = <Projects />
  else if (path === '/industries') page = <Industries />
  else if (path === '/contact') page = <Contact />
  else if (path !== '/') page = <NotFound />

  return <div className="app-shell" data-theme={theme}>
    <Seo path={path} />
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Header path={path} theme={theme} onThemeToggle={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
    <main id="main-content" tabIndex={-1}>{page}</main>
    <Footer />
    <Chat />
  </div>
}
export default App
