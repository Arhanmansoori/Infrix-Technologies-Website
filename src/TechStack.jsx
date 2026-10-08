import {
  siDatabricks,
  siDocker,
  siFigma,
  siFlutter,
  siKubernetes,
  siLangchain,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siApachekafka,
  siApachemaven,
  siApachespark,
  siPostgresql,
  siPython,
  siPytorch,
  siReact,
  siRedis,
  siSnowflake,
  siSpringboot,
  siSpringsecurity,
  siTerraform,
  siTypescript,
  siGooglecloud,
  siGithubactions,
  siHibernate,
  siGradle,
  siMysql,
} from 'simple-icons'

const icons = {
  React: siReact,
  'Next.js': siNextdotjs,
  Python: siPython,
  'Node.js': siNodedotjs,
  Java: siOpenjdk,
  'Spring Boot': siSpringboot,
  'Spring Security': siSpringsecurity,
  Hibernate: siHibernate,
  Maven: siApachemaven,
  Gradle: siGradle,
  'Apache Kafka': siApachekafka,
  'Apache Spark': siApachespark,
  'GitHub Actions': siGithubactions,
  'Google Cloud': siGooglecloud,
  MySQL: siMysql,
  Redis: siRedis,
  Flutter: siFlutter,
  TypeScript: siTypescript,
  Kubernetes: siKubernetes,
  Terraform: siTerraform,
  Docker: siDocker,
  PostgreSQL: siPostgresql,
  PyTorch: siPytorch,
  Databricks: siDatabricks,
  Snowflake: siSnowflake,
  LangChain: siLangchain,
  Figma: siFigma,
}

const textMarks = {
  AWS: 'aws',
  Azure: 'AZ',
  OpenAI: 'AI',
  'Power BI': 'BI',
  'Spring MVC': 'MVC',
  'Spring Data JPA': 'JPA',
  'REST APIs': 'API',
  'OAuth 2.0': 'OA',
  JWT: 'JWT',
  'Microsoft Fabric': 'MF',
  'LLM Platforms': 'LLM',
  LangGraph: 'LG',
  'Vector Databases': 'DB',
  'CI/CD': 'CI',
}

export default function TechStack({ items }) {
  return (
    <div className="tech" role="list" aria-label="Technology stack">
      {items.map((name) => {
        const icon = icons[name]

        return (
          <span className="tech-badge" key={name} title={name} role="listitem">
            {icon ? (
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" style={{ color: icon.hex === '000000' ? 'var(--ink)' : `#${icon.hex}` }}>
                <path d={icon.path} />
              </svg>
            ) : (
              <b className="tech-glyph" aria-hidden="true">{textMarks[name] || '◆'}</b>
            )}
            <span className="tech-label">{name}</span>
          </span>
        )
      })}
    </div>
  )
}
