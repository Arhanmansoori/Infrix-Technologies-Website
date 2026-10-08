import ServiceIcon from './ServiceIcon'
import Heading from './Heading'

const layers = [
  { title: 'Business', detail: 'Goals, users, and operating context', icon: 'consulting' },
  { title: 'Applications', detail: 'Java & Spring · APIs · digital products', icon: 'java' },
  { title: 'AI & Machine Learning', detail: 'Intelligent workflows and model services', icon: 'ai' },
  { title: 'Data Platform', detail: 'Pipelines · analytics · governed data', icon: 'data' },
  { title: 'Cloud', detail: 'Scalable, resilient infrastructure', icon: 'cloud' },
  { title: 'Platform & DevOps', detail: 'Automation · delivery · observability', icon: 'devops' },
]

export default function PlatformModel({
  eyebrow = 'Engineering model',
  title = 'One engineering partner across your technology stack.',
  text = 'Applications, AI, data, cloud, and platform engineering work together—with security considered across every layer.',
}) {
  return (
    <section className="section platform-section">
      <div className="container">
        <Heading
          eyebrow={eyebrow}
          title={title}
          text={text}
        />
        <div className="platform-layout">
          <ol className="platform-stack" aria-label="Engineering platform layers">
            {layers.map((layer, index) => (
              <li className="platform-step" key={layer.title}>
                <article className="platform-layer">
                  <span className="platform-index">0{index + 1}</span>
                  <span className="platform-icon"><ServiceIcon name={layer.icon} /></span>
                  <span className="platform-copy">
                    <strong>{layer.title}</strong>
                    <small>{layer.detail}</small>
                  </span>
                </article>
                {index < layers.length - 1 && <span className="platform-arrow" aria-hidden="true">↓</span>}
              </li>
            ))}
          </ol>
          <aside className="platform-security">
            <span className="platform-icon"><ServiceIcon name="security" /></span>
            <span><strong>Security by design</strong><small>Identity · protection · governance across every layer</small></span>
          </aside>
        </div>
      </div>
    </section>
  )
}
