const icons = {
  cloud: <><path d="M20 16.2a4.2 4.2 0 0 0-1-8.28A6.5 6.5 0 0 0 6.7 9.4 3.5 3.5 0 0 0 7 16.2h13Z" /><path d="m9 19 1.2-1.5M14 19l1.2-1.5" /></>,
  data: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v7c0 1.65 3.58 3 8 3 1.45 0 2.82-.15 4-.42M20 5v5" /><path d="M4 12v6c0 1.65 3.58 3 8 3 1.2 0 2.35-.1 3.38-.28" /><circle cx="19" cy="17" r="3" /><path d="m21.2 19.2 1.3 1.3" /></>,
  ai: <><circle cx="12" cy="12" r="3" /><circle cx="5" cy="5" r="1.5" /><circle cx="19" cy="5" r="1.5" /><circle cx="5" cy="19" r="1.5" /><circle cx="19" cy="19" r="1.5" /><path d="m7 6.5 3 3.5m7-3.5-3 3.5m-7 7 3-3.5m7 3.5-3-3.5M12 2v3m0 14v3" /></>,
  java: <><path d="M7 14h10l-1 5H8l-1-5Z" /><path d="M6 14h12M9 11c-1-1 2-1.5 1-3m4 3c-1-1 2-1.5 1-3M5 21h14" /><path d="M18 15c2 0 2.5-1 3-2" /></>,
  devops: <><rect x="3" y="4" width="6" height="6" rx="1.5" /><rect x="15" y="14" width="6" height="6" rx="1.5" /><path d="M9 7h3a3 3 0 0 1 3 3v4M12 11l3 3 3-3" /></>,
  security: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></>,
  consulting: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5M10.5 7v7m-3.5-3.5h7" /></>,
}

export default function ServiceIcon({ name }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name] || icons.consulting}
    </svg>
  )
}
