# INFRIXON AI LABS website

React and Vite company website for cloud, data, AI, Java/Spring, DevOps, cybersecurity, and enterprise consulting. The work examples describe illustrative engagement patterns; they are not named client case studies.

## Local development

Use Node.js 24 (see .nvmrc), then:

```sh
npm ci
npm run dev
```

The assistant is optional. For local chat, copy .env.example to .env and set GROQ_API_KEY. Keep the key on the server; do not prefix it with VITE_ or put it in frontend code.

## Production build

```sh
npm run build
npm run preview
```

The production frontend is generated in dist/. Vite preview serves the frontend only; it does not run api/chat.js.

## Deploy to Vercel

1. Import this repository into Vercel.
2. Select Node.js 24 in the project settings. The included vercel.json selects Vite, runs npm run build, and serves dist/.
3. To enable the assistant, add GROQ_API_KEY in the project's server environment variables before deploying. api/chat.js handles /api/chat.
4. Deploy. Check a direct service URL such as /services/cloud-services and refresh it. The included SPA rewrite serves frontend routes while leaving /api/ and /assets/ requests separate.
5. Check the theme toggle, mobile menu, contact email draft, and assistant on the deployed domain.

See [Vercel's Vite guide](https://vercel.com/docs/frameworks/frontend/vite) and [rewrite configuration](https://vercel.com/docs/project-configuration/vercel-json).

## Other hosting

For a static host or cPanel, upload the contents of dist/ to the site's document root. Configure the host to serve index.html for frontend routes that do not match a real file. The Vercel configuration is not used by those hosts.

Static hosting serves the website and contact email flow. The assistant needs a compatible server endpoint at /api/chat; copying dist/ does not deploy the Node handler. The widget shows a contact fallback when the endpoint is unavailable.

## Contact flow

The contact form validates the visitor's details and opens their email application with an addressed, prefilled draft. The visitor sends that draft in their email application. The website does not claim to have sent or stored an enquiry. A configured email application is required; direct email links are also available.

## Design and source files

All pages use the Deep Tech Enterprise theme: warm white, dark navy (#071F2B), primary blue (#006DFF), cyan (#00BDF2), and supporting teal (#157A73), with matching dark-mode surfaces. Blue drives actions and light-mode accents; small blue text uses #005FD9 for contrast on neutral and tinted surfaces. Cyan leads on navy sections and in dark mode; teal is reserved for secondary diagram details. Manrope headings and Inter body text are served locally from public/assets/fonts/; their license files are included there.

- src/App.jsx — content, routes, navigation, contact form, and assistant interface.
- src/main.css — structural layout, responsive navigation, forms, and footer.
- src/editorial.css — homepage sections and original technical artwork.
- src/theme.css — shared palette, fonts, component styles, and alignment rules.
- src/ServiceIcon.jsx and src/TechStack.jsx — service and technology icons.
- src/PlatformModel.jsx — shared engineering-layer diagram used on About, including security across every layer.
- api/chat.js — production serverless assistant endpoint.
- vite.config.js — Vite and local assistant middleware.
- vercel.json — Vercel build and frontend routing configuration.

The stylesheets load in the order main.css, editorial.css, theme.css. Keep shared colors and typography in theme.css so every page stays consistent.
