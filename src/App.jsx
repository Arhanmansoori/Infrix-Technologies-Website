import { useEffect, useState } from 'react'
import Heading from './Heading'
import PlatformModel from './PlatformModel'
import ServiceIcon from './ServiceIcon'
import TechStack from './TechStack'
const logo = '/assets/infrixon-ai-technologies.png'
const mark = '/assets/infrixon-mark.svg'

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

const go = (path) => { window.history.pushState({}, '', path); window.dispatchEvent(new PopStateEvent('popstate')); window.scrollTo({ top: 0, behavior: 'smooth' }) }
const servicePath = (slug) => `/services/${slug}`

function Backdrop({ compact = false }) { return <div className={`backdrop${compact ? ' compact' : ''}`} aria-hidden="true"><span className="backdrop-glow top" /><span className="backdrop-glow bottom" /><span className="backdrop-grid" /><svg viewBox="0 0 1440 620" preserveAspectRatio="none"><path d="M-80 510C200 620 270 380 520 370S850 620 1110 440s330-30 430 40" /><path d="M-80 560C210 680 300 460 540 445s310 150 570 0 300-100 400-20" /></svg><i className="particle p1" /><i className="particle p2" /><i className="particle p3" /></div> }
function Header({ path }) { const [open, setOpen] = useState(false); const [drop, setDrop] = useState(false); const [scrolled, setScrolled] = useState(window.scrollY > 8); const activeClass = (href) => path === href ? 'active' : undefined; useEffect(() => { const updateScroll = () => setScrolled(window.scrollY > 8); window.addEventListener('scroll', updateScroll, { passive: true }); return () => window.removeEventListener('scroll', updateScroll) }, []); useEffect(() => { if (!open) return; const closeOnEscape = (event) => { if (event.key === 'Escape') { setOpen(false); setDrop(false) } }; window.addEventListener('keydown', closeOnEscape); return () => window.removeEventListener('keydown', closeOnEscape) }, [open]); return <header className={`header${scrolled ? ' scrolled' : ''}`}><div className="container nav"><a href="/" aria-label="Infrixon AI Technologies home" onClick={(e) => { e.preventDefault(); go('/') }}><img src={logo} alt="Infrixon AI Technologies" /></a><button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open} aria-controls="primary-navigation"><span /><span /><span /></button><nav id="primary-navigation" className={open ? 'nav-open' : ''} aria-label="Primary navigation"><a className={activeClass('/')} aria-current={path === '/' ? 'page' : undefined} href="/" onClick={(e) => { e.preventDefault(); go('/'); setOpen(false) }}>Home</a><a className={activeClass('/about')} aria-current={path === '/about' ? 'page' : undefined} href="/about" onClick={(e) => { e.preventDefault(); go('/about'); setOpen(false) }}>About</a><div className="drop" onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)}><button onClick={() => setDrop(!drop)} aria-expanded={drop} aria-haspopup="true">Services⌄</button>{drop && <div className="mega">{services.map((s) => <a className={path === servicePath(s.slug) ? 'active' : undefined} aria-current={path === servicePath(s.slug) ? 'page' : undefined} key={s.slug} href={servicePath(s.slug)} onClick={(e) => { e.preventDefault(); go(servicePath(s.slug)); setOpen(false); setDrop(false) }}><b aria-hidden="true"><ServiceIcon name={s.icon} /></b><span><strong>{s.title}</strong><small>{s.short}</small></span></a>)}</div>}</div>{[['Industries', '/industries'], ['Approach', '/portfolio'], ['Contact', '/contact']].map(([label, href]) => <a className={activeClass(href)} aria-current={path === href ? 'page' : undefined} key={href} href={href} onClick={(e) => { e.preventDefault(); go(href); setOpen(false) }}>{label}</a>)}<a className="nav-cta" href="/contact" onClick={(e) => { e.preventDefault(); go('/contact'); setOpen(false) }}>Talk to an Expert ↗</a></nav></div></header> }
function Footer() { return <footer><div className="container footer-grid"><div><img src={logo} alt="Infrixon AI Technologies" /><p>Cloud, data, AI, Java, and software engineering for systems built to last.</p><a className="text-link" href="/contact" onClick={(e) => { e.preventDefault(); go('/contact') }}>Start a conversation ↗</a></div><div><h3>Company</h3>{[['About', '/about'], ['Approach', '/portfolio'], ['Industries', '/industries'], ['Contact', '/contact']].map(([label, href]) => <a key={href} href={href} onClick={(e) => { e.preventDefault(); go(href) }}>{label}</a>)}</div><div><h3>Services</h3>{services.map((s) => <a key={s.slug} href={servicePath(s.slug)} onClick={(e) => { e.preventDefault(); go(servicePath(s.slug)) }}>{s.title}</a>)}</div><div><h3>Connect</h3><p>India · Serving teams worldwide</p><a href="mailto:work@infrixtechnologies.com">work@infrixtechnologies.com</a></div></div><div className="container footer-bottom">© {new Date().getFullYear()} Infrixon AI Technologies. All rights reserved.<span>Cloud · Data · AI · Software Engineering</span></div></footer> }
function CTA({ title = 'Have a bold idea? Let’s make it real.' }) { return <section className="container cta"><Backdrop compact /><div><span className="eyebrow">Start a conversation</span><h2>{title}</h2><p>Tell us what you are building, where you are stuck, or where you want to go next.</p><a className="button light" href="/contact" onClick={(e) => { e.preventDefault(); go('/contact') }}>Talk to an expert ↗</a></div></section> }
function PageHero({ eyebrow, title, text }) { return <section className="page-hero"><Backdrop /><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section> }
function ServiceCard({ item, index }) { const chips = item.tech.slice(0, 2); return <a className="service-card" href={servicePath(item.slug)} onClick={(e) => { e.preventDefault(); go(servicePath(item.slug)) }}><div className="service-visual" aria-hidden="true"><span className="service-visual-dot dot-one" /><span className="service-visual-dot dot-two" /><span className="service-orbit" /><b className="service-visual-core"><ServiceIcon name={item.icon} /></b><small className="service-chip chip-one">{chips[0]}</small><small className="service-chip chip-two">{chips[1]}</small></div><div className="service-card-meta"><small>0{String(index + 1).padStart(2, '0')}</small><span>INFRIXON</span></div><h3>{item.title}</h3><p>{item.short}</p><span>Learn more ↗</span></a> }
function WhyChooseUs() { const [open, setOpen] = useState(0); return <section className="section trust-section"><div className="container"><Heading eyebrow="Why Infrixon" title="Reliable engineering for important systems." text="A practical partner across architecture, implementation, and the work of keeping technology useful over time." /><div className="value-grid">{principles.map(([number, title, text]) => <article key={number}><b>{number}</b><h3>{title}</h3><p>{text}</p></article>)}</div><div className="home-faq"><div><span className="eyebrow">Good questions</span><h2>What would you like to know?</h2><p>Start with the challenge, the systems involved, and the outcome you need.</p><a className="text-link" href="/contact" onClick={(e) => { e.preventDefault(); go('/contact') }}>Ask our team ↗</a></div><div>{homeFaqs.map(([question, answer], index) => <article key={question}><button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}><span>{question}</span><b>{open === index ? '−' : '+'}</b></button>{open === index && <p>{answer}</p>}</article>)}</div></div></div></section> }
function Home() {
  const [category, setCategory] = useState('Cloud')

  return (
    <>
      <section className="home">
        <Backdrop />
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Cloud · Data · AI · Software Engineering</span>
            <h1>Engineering intelligent <em>digital platforms.</em></h1>
            <p>INFRIXON AI TECHNOLOGIES helps organizations design, build, and modernize scalable cloud platforms, data systems, AI solutions, enterprise applications, and secure digital infrastructure.</p>
            <div className="buttons">
              <a className="button primary" href="/contact" onClick={(e) => { e.preventDefault(); go('/contact') }}>Talk to an Expert ↗</a>
              <a className="button outline" href="/services" onClick={(e) => { e.preventDefault(); go('/services') }}>Explore Services ↓</a>
            </div>
          </div>
          <div className="orbit" aria-hidden="true">
            <div className="ring a" />
            <div className="ring b" />
            <div className="orbit-core"><span className="ix-crop"><img src={mark} alt="" /></span></div>
            {['Cloud', 'Java', 'Data', 'AI'].map((item, index) => <b className={`orbit-tag t${index}`} key={item}>{item}</b>)}
          </div>
        </div>
      </section>

      <div className="trust">
        <div className="container">
          <small>ENGINEERING CAPABILITIES</small>
          <div><b>Cloud platforms</b><b>Data systems</b><b>Enterprise software</b><b>Applied AI</b></div>
        </div>
      </div>

      <section className="section container intro">
        <div><span className="eyebrow">What we do</span><h2>Technology shaped around your business, not the other way around.</h2></div>
        <div><p>We help teams modernize legacy systems, make sound architecture decisions, and deliver secure, maintainable solutions across cloud, data, AI, and Java-based enterprise software.</p><a className="text-link" href="/about" onClick={(e) => { e.preventDefault(); go('/about') }}>About Infrixon ↗</a></div>
      </section>

      <section className="section container">
        <Heading eyebrow="Core services" title="One partner across your engineering lifecycle." text="Engage us for a focused challenge or connect capabilities across your platform." />
        <div className="service-grid">{services.map((item, index) => <ServiceCard item={item} index={index} key={item.slug} />)}</div>
      </section>

      <PlatformModel />

      <section className="dark section">
        <div className="container">
          <Heading eyebrow="Technology expertise" title="Tools selected for the work." text="Representative technologies across our capabilities; the right stack depends on your requirements and environment." />
          <div className="tabs" role="group" aria-label="Technology categories">
            {Object.keys(technologyCategories).map((name) => <button type="button" aria-pressed={category === name} className={category === name ? 'active' : ''} onClick={() => setCategory(name)} key={name}>{name}</button>)}
          </div>
          <TechStack items={technologyCategories[category]} />
        </div>
      </section>

      <section className="section container split">
        <div><span className="eyebrow">Delivery approach</span><h2>Clear decisions. Visible progress. Thoughtful engineering.</h2><p>Work begins with the business need, stays grounded in your constraints, and moves through shared milestones and practical collaboration.</p><a className="text-link" href="/portfolio" onClick={(e) => { e.preventDefault(); go('/portfolio') }}>See how we work ↗</a></div>
        <div className="steps">{deliverySteps.map(([number, title, text]) => <div key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
      </section>

      <WhyChooseUs />
      <CTA title="Build your next digital platform with Infrixon." />
    </>
  )
}

function About() { return <><PageHero eyebrow="About Infrixon AI Technologies" title="Cloud, data, and AI engineering for real business needs." text="We help organizations modernize technology, build scalable platforms, and make clear engineering decisions." /><section className="section container about"><div className="about-art"><span>IX</span><small>Cloud · Data · AI<br />Engineering</small></div><div><span className="eyebrow">What we do</span><h2>From architecture decisions to dependable delivery.</h2><p>Infrixon AI Technologies provides consulting and engineering across cloud, data, AI, and modern software. We work with teams to solve defined business problems and build solutions that fit their systems, security requirements, and operating model.</p><p>Engagements start with goals and constraints, then move through architecture, implementation, and operational handover with visible decisions along the way.</p></div></section><section className="section values"><div className="container"><Heading eyebrow="How we work" title="Technical depth, applied with care." /><div className="value-grid">{principles.slice(0, 4).map(([num, title, text]) => <article key={num}><b>{num}</b><h3>{title}</h3><p>{text}</p></article>)}</div></div></section><CTA title="Ready to modernize your technology?" /></> }
function Services() { return <><PageHero eyebrow="Core services" title="Cloud, data, AI, and engineering—connected." text="Focused expertise to modernize infrastructure, improve data foundations, and build secure digital systems." /><section className="section container"><div className="service-grid all-services">{services.map((item, i) => <ServiceCard item={item} index={i} key={item.slug} />)}</div></section><CTA title="Not sure where to start? Talk to an expert." /></> }
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
          <div className="capabilities">{item.features.map((feature, index) => <article key={feature}><b>0{index + 1}</b><h3>{feature}</h3><p>Defined with your team and aligned to your goals, systems, and constraints.</p></article>)}</div>
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
      <section className="section container faq">
        <Heading eyebrow="FAQ" title="Questions, answered." />
        <div>{['What does an engagement include?', 'Can you work with our existing team?', 'How do we define the first step?'].map((question, index) => <article key={question}><button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}><span>{question}</span><b>{open === index ? '−' : '+'}</b></button>{open === index && <p>We begin by understanding the goal, current environment, and constraints, then agree on a focused scope and practical next steps.</p>}</article>)}</div>
      </section>
      <CTA title={item.slug === 'java-spring-development' ? 'Talk to an expert about Java & Spring.' : 'Talk to an expert about this service.'} />
    </>
  )
}
function Approach() { return <><PageHero eyebrow="Our approach" title="A clear path from challenge to dependable delivery." text="We align technology work to business needs, keep decisions visible, and build in practical increments." /><section className="section container"><Heading eyebrow="Delivery process" title="Seven stages. One shared direction." text="A lifecycle that moves from discovery and design to monitored, continuously improved systems." /><div className="value-grid delivery-timeline">{deliverySteps.map(([number, title, text]) => <article key={number}><b>{number}</b><h3>{title}</h3><p>{text}</p></article>)}</div></section><section className="section soft"><div className="container"><Heading eyebrow="Engagement principles" title="Designed around your environment." /><div className="capabilities">{[['Work with your team', 'Collaborate with your engineers and stakeholders, or provide focused specialist capacity.'], ['Fit your architecture', 'Respect existing systems and constraints; recommend change where it has a clear purpose.'], ['Plan for operation', 'Consider reliability, security, and ownership alongside implementation.'], ['Make progress visible', 'Agree on milestones, trade-offs, and decisions as work moves forward.']].map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section><CTA title="Talk through your next technology challenge." /></> }
function Industries() { return <><PageHero eyebrow="Industries" title="Context changes everything." text="We bring technology expertise together with the domain fluency to make it useful in the real world." /><section className="section container industry-list">{industries.map((industry, i) => <article key={industry}><b>0{i + 1}</b><div><span className="eyebrow">Industry focus</span><h2>{industry}</h2><p>Build trusted digital experiences, connected workflows, and data-informed decisions for the people your organization serves.</p><a className="text-link" href="/contact" onClick={(e) => { e.preventDefault(); go('/contact') }}>Talk about {industry.toLowerCase()} ↗</a></div><i>{['Care', 'Flow', 'Scale'][i % 3]}</i></article>)}</section><CTA title="Let’s solve a real-world problem." /></> }
function Contact() { const [submitted, setSubmitted] = useState(false); return <><PageHero eyebrow="Contact" title="Talk through your technology challenge." text="Share the outcome you are working toward. We’ll help identify a practical next step." /><section className="section container contact"><div><span className="eyebrow">Start a conversation</span><h2>Tell us what needs to work better.</h2><p>Use the form to outline your cloud, data, AI, security, or engineering needs. For a direct conversation, email our team.</p><div className="contact-details"><span>Business email</span><a href="mailto:work@infrixtechnologies.com">work@infrixtechnologies.com</a><span>Location</span><p>India · Serving teams worldwide</p></div></div><form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}><div className="form-row"><label>Name<input required autoComplete="name" name="name" placeholder="Your name" /></label><label>Business email<input required autoComplete="email" type="email" name="email" placeholder="you@company.com" /></label></div><div className="form-row"><label>Company<input autoComplete="organization" name="company" placeholder="Company name" /></label><label>Phone (optional)<input autoComplete="tel" type="tel" name="phone" placeholder="Your phone number" /></label></div><label>Service interested in<select required name="service" defaultValue=""><option value="" disabled>Choose a service</option>{services.map((service) => <option key={service.slug} value={service.slug}>{service.title}</option>)}</select></label><label>Message<textarea required name="message" rows="5" placeholder="What are you trying to build or improve?" /></label><button className="button primary" type="submit">{submitted ? 'Request noted' : 'Submit enquiry ↗'}</button>{submitted && <p className="success" role="status" aria-live="polite">This site preview does not send form submissions yet. Please email work@infrixtechnologies.com to reach the team.</p>}</form></section><div className="container contact-banner"><h2>Prefer email?</h2><a className="button primary" href="mailto:work@infrixtechnologies.com">Email Infrixon ↗</a></div></> }
function Chat() { const [open, setOpen] = useState(false); const [messages, setMessages] = useState([]); const [input, setInput] = useState(''); const [loading, setLoading] = useState(false); const [error, setError] = useState(''); async function sendMessage(event) { event.preventDefault(); const content = input.trim(); if (!content || loading) return; const nextMessages = [...messages, { role: 'user', content }]; setMessages(nextMessages); setInput(''); setError(''); setLoading(true); try { const response = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: nextMessages }) }); const result = await response.json(); if (!response.ok) throw new Error(result.error || 'The assistant is unavailable right now.'); setMessages([...nextMessages, { role: 'assistant', content: result.message }]) } catch (requestError) { setError(requestError instanceof Error ? requestError.message : 'The assistant is unavailable right now.') } finally { setLoading(false) } } return <div className="chat">{open && <section className="chat-panel" role="dialog" aria-label="Infrixon AI Technologies assistant"><div className="chat-header"><div><span className="eyebrow">INFRIXON AI TECHNOLOGIES</span><strong>Ask our assistant</strong></div><button type="button" onClick={() => setOpen(false)} aria-label="Close assistant">×</button></div><div className="chat-messages" role="log" aria-live="polite" aria-label="Conversation">{messages.length === 0 && <p className="chat-intro">Ask about cloud, data, AI, Java/Spring, or platform engineering.</p>}{messages.map((item, index) => <p className={`chat-message ${item.role}`} key={`${item.role}-${index}`}>{item.content}</p>)}{loading && <p className="chat-intro" role="status">Thinking…</p>}</div>{error && <p className="chat-error" role="alert">{error}</p>}<form className="chat-form" onSubmit={sendMessage}><label className="sr-only" htmlFor="assistant-message">Your message</label><input id="assistant-message" value={input} onChange={(event) => setInput(event.target.value)} maxLength={2000} placeholder="Ask a question…" disabled={loading} /><button className="button primary" type="submit" disabled={loading || !input.trim()} aria-label="Send message">{loading ? '…' : 'Send'}</button></form><a className="chat-contact" href="/contact" onClick={(e) => { e.preventDefault(); go('/contact'); setOpen(false) }}>Or contact our team ↗</a></section>}<button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close assistant' : 'Open assistant'}>✦ <b>{open ? 'Close' : 'Ask a question'}</b></button></div> }
const routeDescriptions = {
  '/': 'INFRIXON AI TECHNOLOGIES provides cloud engineering, data platforms, AI solutions, Java & Spring development, DevOps, and technology consulting.',
  '/about': 'Learn how INFRIXON AI TECHNOLOGIES helps organizations modernize cloud, data, AI, Java, and enterprise software systems.',
  '/services': 'Explore cloud engineering, data engineering, AI and machine learning, Java and Spring development, DevOps, cybersecurity, and IT consulting.',
  '/portfolio': 'See the engineering approach behind cloud, data, AI, and infrastructure engagements at INFRIXON AI TECHNOLOGIES.',
  '/industries': 'Explore the industry contexts supported by INFRIXON AI TECHNOLOGIES across cloud, data, and engineering.',
  '/contact': 'Talk with INFRIXON AI TECHNOLOGIES about cloud, data, AI, Java & Spring, security, or software engineering.',
}

function Seo({ path }) { useEffect(() => { const service = services.find((item) => path === servicePath(item.slug)); const titles = { '/': 'INFRIXON AI TECHNOLOGIES | Cloud, Data, AI & Software Engineering', '/about': 'About | INFRIXON AI TECHNOLOGIES', '/services': 'Services | INFRIXON AI TECHNOLOGIES', '/portfolio': 'Our Approach | INFRIXON AI TECHNOLOGIES', '/industries': 'Industries | INFRIXON AI TECHNOLOGIES', '/contact': 'Contact | INFRIXON AI TECHNOLOGIES' }; const title = service ? `${service.title} | INFRIXON AI TECHNOLOGIES` : titles[path] || 'INFRIXON AI TECHNOLOGIES'; const description = routeDescriptions[path] || service?.description || routeDescriptions['/']; document.title = title; for (const [selector, value] of [['meta[name="description"]', description], ['meta[property="og:title"]', title], ['meta[property="og:description"]', description], ['meta[name="twitter:title"]', title], ['meta[name="twitter:description"]', description]]) { const tag = document.querySelector(selector); if (tag) tag.setAttribute('content', value) } }, [path]); return null }
function NotFound() { return <PageHero eyebrow="Page not found" title="Let’s get you back on track." text="That page does not exist, but there is plenty more to explore." /> }
function App() { const [path, setPath] = useState(window.location.pathname.replace(/\/$/, '') || '/'); useEffect(() => { const handler = () => setPath(window.location.pathname.replace(/\/$/, '') || '/'); window.addEventListener('popstate', handler); return () => window.removeEventListener('popstate', handler) }, []); const item = services.find((service) => servicePath(service.slug) === path); let page = <Home />; if (path === '/about') page = <About />; else if (path === '/services') page = <Services />; else if (item) page = <ServicePage item={item} />; else if (path === '/portfolio') page = <Approach />; else if (path === '/industries') page = <Industries />; else if (path === '/contact') page = <Contact />; else if (path !== '/') page = <NotFound />; return <div className="app-shell"><Seo path={path} /><a className="skip-link" href="#main-content">Skip to content</a><Header path={path} /><main id="main-content">{page}</main><Footer /><Chat /></div> }
export default App
