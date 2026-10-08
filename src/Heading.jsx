export default function Heading({ eyebrow, title, text }) {
  return (
    <div className="heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}
