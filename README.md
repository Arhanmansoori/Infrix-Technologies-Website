# Infrixon AI Technologies Website

Premium React frontend for **INFRIXON AI TECHNOLOGIES**, a cloud, data, AI, and software engineering company offering Java and Spring enterprise application development.

This project is a responsive React and Vite website for a technology engineering consultancy. It includes a service catalog, client-side routes, contact form preview, and a Groq-backed assistant endpoint.

## Overview

- Enterprise-style homepage for Infrixon AI Technologies
- React + Vite frontend
- Responsive layout for desktop, tablet, and mobile
- Bottom-right AI assistant widget
- Groq-backed assistant through `/api/chat` (Vite development middleware and serverless handler)
- Brand-aligned design using the Infrixon SVG wordmark and mark

## Tech Stack

- React 18
- Vite
- CSS3
- Simple Icons for technology brand marks
- Groq Chat Completions API

The showcased engineering technologies are grouped into Cloud, Data, AI & ML, Backend, DevOps, and Databases. The Java service includes Java, Spring Boot, Spring MVC, Spring Data JPA, Spring Security, Hibernate, Maven, Gradle, REST APIs, Kafka, PostgreSQL, MySQL, Redis, Docker, and Kubernetes.

## Features

- Premium hero section and company positioning
- Cloud engineering, data engineering, AI/ML, Java & Spring, DevOps, cybersecurity, and IT consulting pages
- Industries, delivery approach, technology stack, and contact pages
- Mobile-optimized navigation and layout
- Responsive navigation with service dropdown
- Accessible technology stack marks and chat interactions
- Server-side API key handling through environment variables
- Contact form validation with an explicit preview-only status (no email delivery backend)

## Project Structure

```text
.
├── api/
│   └── chat.js
├── public/
│   └── assets/
│       ├── infrixon-ai-technologies.png
│       └── infrixon-mark.svg
├── src/
│   ├── Heading.jsx
│   ├── PlatformModel.jsx
│   ├── ServiceIcon.jsx
│   ├── TechStack.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.css
│   ├── tech-stack.css
│   ├── platform-model.css
│   ├── service-icons.css
│   └── brand-finish.css
├── .env
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Add environment variables

Create a `.env` file in the project root:

```env
GROQ_API_KEY=your_groq_api_key_here
```

## Run Locally

Start the development server:

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Chatbot Setup

The website includes a floating assistant in the bottom-right corner.

### How it works

- The React frontend sends chat requests to `/api/chat`
- During local development, Vite middleware in `vite.config.js` handles that route
- The middleware forwards requests to the **Groq Chat Completions API**
- The API key stays on the server side through the `.env` file

### Current chatbot model

```text
llama-3.3-70b-versatile
```

### Important security note

Do not hardcode API keys into React components or commit them to GitHub.

If a key has ever been shared publicly, rotate it before deploying.

## Branding

This website uses the supplied **INFRIXON AI TECHNOLOGIES** logo and visual theme:

- Primary: `#0569F7`
- Secondary: `#06173B`
- Accent: `#00B9EF`
- Background: `#FFFFFF`
- Dark: `#0B1020`

## Deployment Notes

This repo currently runs well for local development with Vite.

If you want production deployment with the chatbot enabled, you should host it on a platform that supports server-side API routes or backend functions, such as:

- Vercel
- Netlify Functions
- Render
- Node/Express custom hosting

For production, the `/api/chat` logic should live in a real server function instead of relying only on Vite dev middleware.

## Production Notes

- The contact form currently validates input in the browser but does not submit to an email or CRM service.
- Configure `GROQ_API_KEY` in the hosting environment before enabling `/api/chat` in production.
- The site contains no client testimonials, customer logos, or quantified project claims unless verified content is added later.

## Authoring Notes

This repo was tailored for **INFRIXON AI TECHNOLOGIES** and shaped around a cloud, data, AI, and enterprise engineering design direction.

## License

This project is currently private and intended for INFRIXON AI TECHNOLOGIES internal/company use unless changed by the repository owner.
