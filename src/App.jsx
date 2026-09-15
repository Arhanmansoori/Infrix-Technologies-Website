import { useEffect, useState } from 'react'
import infrixLogo from './assets/infrix-logo.png'

const consultationLink =
  'https://docs.google.com/forms/d/1OnBnYY0Oyf2Wk5YefzQ4-FHOIbBoU5Hmd8BT1V8y2Ko/edit?usp=forms_home&ouid=105339384553300492471&ths=true'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
]

const trustedStack = [
  'OpenAI',
  'Azure',
  'AWS',
  'Google Cloud',
  'Databricks',
  'Snowflake',
  'Apache Spark',
  'Docker',
  'Kubernetes',
  'Power BI',
  'React',
  'FastAPI',
]

const metrics = [
  { value: '40+', label: 'AI programs delivered across automation, copilots, and analytics' },
  { value: '120+', label: 'Production-grade pipelines and data workflows designed' },
  { value: '25+', label: 'Cloud modernization initiatives completed with measurable outcomes' },
  { value: '8+', label: 'Countries supported through remote-first consulting and delivery' },
]

const serviceHighlights = [
  {
    title: 'AI Products & Agents',
    text: 'Copilots, agentic workflows, retrieval systems, and generative AI applications designed for real operations.',
    accent: 'Primary',
  },
  {
    title: 'Data Engineering',
    text: 'Lakehouse platforms, ETL and ELT pipelines, warehousing, streaming, and governed analytics foundations.',
    accent: 'Secondary',
  },
  {
    title: 'Cloud & Platform Modernization',
    text: 'Cloud-native architecture, migrations, DevOps enablement, API layers, and resilient system design.',
    accent: 'Accent',
  },
  {
    title: 'Software Delivery',
    text: 'Full-stack applications, Python automation, backend systems, and enterprise-grade digital products.',
    accent: 'Neutral',
  },
]

const capabilities = [
  'Artificial Intelligence & Generative AI',
  'Agentic AI Solutions & Automation',
  'Machine Learning & Deep Learning',
  'AI-Powered Application Development',
  'Data Engineering & Modern Data Platforms',
  'Cloud Solutions & Migration',
  'Business Intelligence & Analytics',
  'Custom Software & API Development',
]

const solutions = [
  {
    title: 'Enterprise AI Assistants',
    text: 'Internal copilots that unify knowledge, automate repetitive work, and accelerate decision-making.',
  },
  {
    title: 'Data Platforms',
    text: 'Modern warehouse and lakehouse ecosystems that unlock reliable reporting and AI-ready data.',
  },
  {
    title: 'Intelligent Automation',
    text: 'Workflow orchestration for operations, support, finance, and back-office teams.',
  },
  {
    title: 'Predictive Intelligence',
    text: 'Forecasting, anomaly detection, recommendation systems, and performance optimization models.',
  },
]

const industries = [
  'Healthcare',
  'Finance',
  'Insurance',
  'Retail',
  'Manufacturing',
  'Logistics',
  'Education',
  'Real Estate',
]

const process = [
  {
    step: '01',
    title: 'Discovery',
    text: 'We map business priorities, user workflows, system constraints, and data realities before writing solutions.',
  },
  {
    step: '02',
    title: 'Architecture',
    text: 'We define the right blend of AI models, data platforms, applications, and cloud infrastructure.',
  },
  {
    step: '03',
    title: 'Build & Deploy',
    text: 'We ship production-ready systems with observability, security, performance, and maintainability in mind.',
  },
  {
    step: '04',
    title: 'Scale',
    text: 'We support adoption, iteration, and long-term optimization as your systems and teams grow.',
  },
]

const technologyGroups = {
  AI: ['OpenAI', 'Claude', 'Gemini', 'Llama', 'LangChain', 'CrewAI'],
  Data: ['Databricks', 'Snowflake', 'BigQuery', 'Redshift', 'Spark', 'Kafka'],
  Cloud: ['Azure', 'AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
  Engineering: ['Python', 'React', 'Next.js', 'FastAPI', 'Node.js', '.NET'],
}

const caseStudies = [
  {
    title: 'Retail Intelligence Platform',
    stat: 'Faster commercial decisions',
    text: 'Unified fragmented sales and inventory data into a modern analytics platform with forecasting and executive reporting.',
  },
  {
    title: 'Operations Copilot Workspace',
    stat: 'Higher team productivity',
    text: 'Built a secure AI assistant for internal research, document retrieval, and workflow automation across business teams.',
  },
  {
    title: 'Insurance Claims Automation',
    stat: 'Reduced manual review friction',
    text: 'Used document AI, rules, and classification models to streamline intake, routing, and claims triage.',
  },
]

const careerRoles = [
  {
    title: 'Data Engineer / Data Scientist',
    location: 'India | Remote / Hybrid',
    type: 'Full Time',
    summary:
      'Design data pipelines, analytics foundations, and production-ready machine learning workflows for modern business platforms.',
    skills: ['Python', 'SQL', 'Spark', 'ETL / ELT', 'Machine Learning'],
  },
  {
    title: 'DevOps Engineer',
    location: 'India | Remote / Hybrid',
    type: 'Full Time',
    summary:
      'Build reliable CI/CD systems, cloud infrastructure, monitoring, and deployment workflows for scalable engineering teams.',
    skills: ['AWS / Azure', 'Docker', 'Kubernetes', 'Terraform', 'CI / CD'],
  },
  {
    title: 'Software Developer',
    location: 'India | Remote / Hybrid',
    type: 'Full Time',
    summary:
      'Develop modern full-stack applications, APIs, internal platforms, and AI-enabled products with strong engineering quality.',
    skills: ['React', 'Node.js', 'Python', 'APIs', 'System Design'],
  },
]

const starterPrompts = [
  'Tell me about your AI services',
  'What industries do you support?',
  'How can I start a project?',
]

function SectionHeading({ eyebrow, title, text, align = 'left' }) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p className="section-copy">{text}</p> : null}
    </div>
  )
}

function CareersPage({ onBackHome }) {
  const [selectedRole, setSelectedRole] = useState(careerRoles[0].title)
  const [resumeName, setResumeName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="careers-page">
      <header className="career-hero">
        <nav className="topbar">
          <a href="#home" className="brand" aria-label="Infrix Technologies home" onClick={onBackHome}>
            <img className="brand-logo" src={infrixLogo} alt="Infrix Technologies logo" />
          </a>

          <div className="nav-links">
            <div className="nav-link-list">
              <a href="#home" onClick={onBackHome}>
                Home
              </a>
              <a href="#careers">Open Roles</a>
              <a href="#career-form">Apply</a>
            </div>
            <a href="#career-form" className="nav-cta">
              Apply Now
            </a>
          </div>
        </nav>

        <div className="career-hero-grid">
          <div>
            <p className="eyebrow">Careers at Infrix</p>
            <h1>Build intelligent systems with a team that cares about craft, impact, and growth.</h1>
            <p className="lead">
              We are looking for thoughtful engineers and builders who want to work
              on AI, data, cloud, and modern software delivery for ambitious businesses.
            </p>
            <div className="hero-actions">
              <a href="#career-form" className="primary-btn">
                Submit Application
              </a>
              <a href="#careers" className="secondary-btn">
                View Open Roles
              </a>
            </div>
          </div>

          <div className="career-highlight-panel">
            <div className="career-highlight-stat">
              <strong>3 Active Roles</strong>
              <p>Hiring across data, DevOps, and software engineering.</p>
            </div>
            <div className="career-highlight-list">
              <div>
                <span>What we value</span>
                <p>Ownership, curiosity, systems thinking, and respectful collaboration.</p>
              </div>
              <div>
                <span>How we work</span>
                <p>Outcome-focused delivery, continuous learning, and modern engineering discipline.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="careers">
          <SectionHeading
            eyebrow="Open Roles"
            title="Join Infrix Technologies and help shape the next generation of intelligent digital products."
            text="Each role is designed for professionals who want to work at the intersection of technical depth, business impact, and modern delivery standards."
          />

          <div className="career-role-grid">
            {careerRoles.map((role) => (
              <article
                key={role.title}
                className={`career-role-card${selectedRole === role.title ? ' career-role-card-active' : ''}`}
              >
                <div className="career-role-top">
                  <div>
                    <h3>{role.title}</h3>
                    <p>{role.summary}</p>
                  </div>
                  <button
                    type="button"
                    className="career-select-btn"
                    onClick={() => setSelectedRole(role.title)}
                  >
                    Apply for this role
                  </button>
                </div>

                <div className="career-role-meta">
                  <span>{role.location}</span>
                  <span>{role.type}</span>
                </div>

                <div className="career-skill-tags">
                  {role.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section career-values-section">
          <SectionHeading
            eyebrow="Life at Infrix"
            title="A professional environment built for builders."
            text="We care about technical quality, communication clarity, and long-term growth. We want people who enjoy solving hard problems without ego."
          />

          <div className="career-values-grid">
            <article className="career-value-card">
              <h3>Meaningful Work</h3>
              <p>Build AI, data, and software systems that directly improve how organizations operate and grow.</p>
            </article>
            <article className="career-value-card">
              <h3>Learning Culture</h3>
              <p>Work across modern tools, delivery patterns, cloud platforms, and evolving AI workflows.</p>
            </article>
            <article className="career-value-card">
              <h3>Ownership Mindset</h3>
              <p>Take responsibility from problem framing to production impact, with space to contribute ideas.</p>
            </article>
          </div>
        </section>

        <section className="section" id="career-form">
          <div className="career-form-layout">
            <SectionHeading
              eyebrow="Apply Now"
              title="Tell us about yourself and share your resume."
              text="Fill out the details below and our team can review your profile for current and upcoming opportunities."
            />

            <form
              className="career-form-panel"
              onSubmit={(event) => {
                event.preventDefault()
                setSubmitted(true)
              }}
            >
              <div className="career-form-grid">
                <label>
                  <span>Full Name</span>
                  <input type="text" name="fullName" placeholder="Enter your full name" />
                </label>
                <label>
                  <span>Email Address</span>
                  <input type="email" name="email" placeholder="Enter your email address" />
                </label>
                <label>
                  <span>Phone Number</span>
                  <input type="tel" name="phone" placeholder="Enter your phone number" />
                </label>
                <label>
                  <span>Role Applying For</span>
                  <select
                    name="role"
                    value={selectedRole}
                    onChange={(event) => setSelectedRole(event.target.value)}
                  >
                    {careerRoles.map((role) => (
                      <option key={role.title} value={role.title}>
                        {role.title}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  <span>Years of Experience</span>
                  <input type="text" name="experience" placeholder="Example: 3 years" />
                </label>
                <label>
                  <span>Current Location</span>
                  <input type="text" name="location" placeholder="City, State, Country" />
                </label>
              </div>

              <label className="career-form-full">
                <span>LinkedIn / Portfolio</span>
                <input type="url" name="portfolio" placeholder="Paste your LinkedIn or portfolio URL" />
              </label>

              <label className="career-form-full">
                <span>Professional Summary</span>
                <textarea
                  name="summary"
                  rows="5"
                  placeholder="Tell us about your background, strengths, and the kind of work you want to do."
                />
              </label>

              <label className="career-upload">
                <span>Resume Upload</span>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={(event) => {
                    const file = event.target.files?.[0]
                    setResumeName(file ? file.name : '')
                  }}
                />
                <div className="career-upload-box">
                  <strong>Upload Resume</strong>
                  <p>{resumeName || 'PDF, DOC, or DOCX up to your preferred size limit'}</p>
                </div>
              </label>

              <div className="career-form-actions">
                <button type="submit" className="primary-btn">
                  {submitted ? 'Application Received' : 'Submit Application'}
                </button>
                <p>
                  {submitted
                    ? 'Thank you — our hiring team will review your application.'
                    : 'Your details stay with Infrix Technologies recruitment review workflows.'}
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        'Hi, I am the Infrix assistant. I can help you explore our AI, data engineering, cloud, and software services. How may I help you today?',
    },
  ])

  const sendMessage = async (text) => {
    const trimmed = text.trim()

    if (!trimmed || isLoading) {
      return
    }

    const nextMessages = [...messages, { role: 'user', content: trimmed }]
    setMessages(nextMessages)
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: nextMessages,
        }),
      })

      const rawText = await response.text()
      const data = rawText ? JSON.parse(rawText) : {}

      if (!response.ok) {
        throw new Error(data.error || 'Unable to reach assistant right now.')
      }

      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          content: data.message || 'I am here to help. Please try again.',
        },
      ])
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          content:
            error.message ||
            'The assistant is temporarily unavailable. Please contact Infrix directly.',
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await sendMessage(input)
  }

  return (
    <div className={`chatbot-shell${isOpen ? ' chatbot-open' : ''}`}>
      {isOpen ? (
        <section className="chatbot-panel" aria-label="Infrix assistant">
          <div className="chatbot-header">
            <div>
              <p className="chatbot-eyebrow">Infrix Assistant</p>
              <strong>How may I help you?</strong>
            </div>
            <button
              type="button"
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close assistant"
            >
              x
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`chatbot-message chatbot-message-${message.role}`}
              >
                {message.content}
              </div>
            ))}
            {isLoading ? (
              <div className="chatbot-message chatbot-message-assistant">Thinking...</div>
            ) : null}
          </div>

          <div className="chatbot-prompts">
            {starterPrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                className="chatbot-prompt"
                onClick={() => sendMessage(prompt)}
                disabled={isLoading}
              >
                {prompt}
              </button>
            ))}
          </div>

          <form className="chatbot-form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about services, pricing, or solutions..."
              aria-label="Chat message"
            />
            <button type="submit" disabled={isLoading}>
              Send
            </button>
          </form>
        </section>
      ) : null}

      <button
        type="button"
        className="chatbot-trigger"
        onClick={() => setIsOpen((current) => !current)}
        aria-label="Open assistant"
      >
        <span className="chatbot-trigger-badge">AI</span>
        <span>
          <strong>How may I help you?</strong>
          <small>Chat with Infrix</small>
        </span>
      </button>
    </div>
  )
}

export default function App() {
  const [currentHash, setCurrentHash] = useState(() => window.location.hash || '#home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#home')
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [currentHash])

  const isCareersPage = currentHash.startsWith('#careers') || currentHash.startsWith('#career-form')

  if (isCareersPage) {
    return (
      <div className="site-shell">
        <div className="bg-grid" aria-hidden="true" />
        <CareersPage
          onBackHome={() => {
            window.location.hash = '#home'
          }}
        />
        <ChatAssistant />
      </div>
    )
  }

  return (
    <div className="site-shell">
      <div className="bg-grid" aria-hidden="true" />

      <header className="hero" id="home">
        <nav className="topbar" aria-label="Primary navigation">
          <a href="#home" className="brand" aria-label="Infrix Technologies home">
            <img className="brand-logo" src={infrixLogo} alt="Infrix Technologies logo" />
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>

          <div className={`nav-links${menuOpen ? ' nav-links-open' : ''}`}>
            <div className="nav-link-list">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
            </div>
            <a href={consultationLink} className="nav-cta" target="_blank" rel="noreferrer">
              Request Consultation
            </a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">AI-First Software, Data, and Cloud Consulting</p>
            <h1>We build intelligent software systems for businesses that need more than just code.</h1>
            <p className="lead">
              Infrix Technologies helps teams modernize data, automate operations,
              launch AI products, and engineer scalable digital platforms with a
              sharp focus on business outcomes.
            </p>

            <div className="hero-actions">
              <a href={consultationLink} className="primary-btn" target="_blank" rel="noreferrer">
                Book a Strategy Call
              </a>
              <a href="#services" className="secondary-btn">
                Explore Capabilities
              </a>
            </div>

            <div className="hero-proof">
              <div className="proof-card">
                <strong>Enterprise Thinking</strong>
                <p>Architecture, delivery, and long-term maintainability built in from day one.</p>
              </div>
              <div className="proof-card">
                <strong>AI + Data + Engineering</strong>
                <p>One delivery partner across product strategy, platforms, and implementation.</p>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-panel">
              <div className="hero-panel-top">
                <span className="status-pill">Live delivery stack</span>
                <span className="status-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
              </div>

              <div className="hero-orbit">
                <div className="orbit-ring orbit-ring-large" />
                <div className="orbit-ring orbit-ring-small" />
                <div className="core-node">
                  <span>Infrix</span>
                </div>
                <div className="orbit-label orbit-label-a">AI Systems</div>
                <div className="orbit-label orbit-label-b">Data Platforms</div>
                <div className="orbit-label orbit-label-c">Cloud Delivery</div>
              </div>

              <div className="hero-mini-grid">
                <article>
                  <strong>Agentic AI</strong>
                  <p>Autonomous workflows with guardrails and real integrations.</p>
                </article>
                <article>
                  <strong>Modern Data</strong>
                  <p>Warehousing, orchestration, analytics, and AI-ready governance.</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="marquee-section">
          <div className="marquee-label">Trusted Technologies</div>
          <div className="marquee-track">
            {[...trustedStack, ...trustedStack].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </section>

        <section className="metrics-section">
          {metrics.map((item) => (
            <article key={item.label} className="metric-card">
              <strong>{item.value}</strong>
              <p>{item.label}</p>
            </article>
          ))}
        </section>

        <section className="section about-section" id="about">
          <div className="about-layout">
            <SectionHeading
              eyebrow="About Infrix"
              title="A modern consulting partner for companies building with AI, data, and cloud."
              text="We bring together product thinking, enterprise architecture, and implementation depth to help organizations innovate with confidence."
            />

            <div className="about-panel">
              <p>
                Infrix Technologies is an AI-first technology company focused on
                transforming complex business challenges into secure, scalable,
                measurable digital systems.
              </p>
              <p>
                From intelligent automation and agentic AI to cloud platforms and
                analytics ecosystems, we help startups and enterprises turn data
                into operational advantage.
              </p>
            </div>
          </div>

          <div className="capability-strip">
            {capabilities.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="section" id="services">
          <SectionHeading
            eyebrow="Core Capabilities"
            title="Consulting and engineering services organized around the systems ambitious companies actually need."
            text="Instead of fragmented delivery across multiple vendors, we connect strategy, architecture, implementation, and iteration in one focused team."
          />

          <div className="services-bento">
            {serviceHighlights.map((item) => (
              <article key={item.title} className={`service-feature service-feature-${item.accent.toLowerCase()}`}>
                <p className="service-kicker">{item.accent}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-dark" id="solutions">
          <SectionHeading
            eyebrow="Solutions"
            title="Purpose-built systems that turn business ambition into shipped capability."
            text="Our solution design spans internal productivity, customer-facing experiences, analytics infrastructure, and automation at scale."
          />

          <div className="solution-grid">
            {solutions.map((item) => (
              <article key={item.title} className="solution-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="industries">
          <div className="industry-layout">
            <SectionHeading
              eyebrow="Industries"
              title="Sector-aware delivery for organizations with real operating complexity."
              text="We shape architecture, analytics, automation, and product decisions around the workflows and compliance realities of each domain."
            />

            <div className="industry-grid">
              {industries.map((item) => (
                <article key={item} className="industry-card">
                  <h3>{item}</h3>
                  <p>AI, data, and platform engineering tailored to industry-specific business operations.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="process">
          <SectionHeading
            eyebrow="Delivery Model"
            title="A process built for clarity, speed, and production readiness."
            text="We keep momentum high without sacrificing architectural discipline, governance, or adoption planning."
            align="center"
          />

          <div className="process-grid">
            {process.map((item) => (
              <article key={item.step} className="process-card">
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="technologies">
          <SectionHeading
            eyebrow="Technology Stack"
            title="A modern ecosystem across models, infrastructure, applications, and analytics."
          />

          <div className="tech-board">
            {Object.entries(technologyGroups).map(([group, items]) => (
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

        <section className="section" id="case-studies">
          <SectionHeading
            eyebrow="Selected Work"
            title="Representative engagements across AI transformation, operational automation, and data modernization."
          />

          <div className="case-study-grid">
            {caseStudies.map((item) => (
              <article key={item.title} className="case-study-card">
                <p className="case-study-stat">{item.stat}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="footer-banner">
          <div>
            <p className="eyebrow">Start a Conversation</p>
            <h2>Let&apos;s design the next intelligent system your business can grow on.</h2>
            <p className="section-copy">
              Whether you are exploring AI adoption, data modernization, a cloud
              migration, or a new product build, we can help define the right path.
            </p>
          </div>

          <div className="contact-panel">
            <a href={consultationLink} className="primary-btn" target="_blank" rel="noreferrer">
              Open Consultation Form
            </a>
            <p>Business inquiries: strategy, architecture, delivery partnerships, and product consulting.</p>
            <p>Phone: +91 00000 00000</p>
            <p>Location: India | Serving global clients remotely</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-brand">
            <img src={infrixLogo} alt="Infrix Technologies logo" className="footer-logo" />
            <p>Intelligent solutions. Data-driven systems. Future-ready engineering.</p>
          </div>

          <div className="footer-links">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <ChatAssistant />
    </div>
  )
}
