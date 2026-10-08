import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { createServer } from 'vite'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

const paths = ['/', '/about', '/services', '/portfolio', '/industries', '/contact', ...['cloud-services', 'data-engineering', 'ai-machine-learning', 'java-spring-development', 'devops', 'cybersecurity', 'it-consulting'].map(slug => '/services/' + slug), '/missing-page']
globalThis.window = { location: { pathname: '/', hash: '' }, scrollY: 0, matchMedia: () => ({ matches: false }), localStorage: { getItem: () => 'light' } }
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx')
  const pages = new Map()
  for (const theme of ['light', 'dark']) {
  window.localStorage.getItem = () => theme
  for (const path of paths) {
    window.location.pathname = path
    const html = renderToStaticMarkup(React.createElement(App))
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, path + ': one main heading')
    assert.ok(html.includes(`data-theme="${theme}"`), path + ': theme applied')
    assert.ok(html.includes('id="main-content"'), path + ': main content')
    assert.ok(!html.includes('undefined'), path + ': undefined content')
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1])
    assert.equal(new Set(ids).size, ids.length, path + ': duplicate IDs')
    pages.set(path, { html, ids })
  }
  for (const [path, { html }] of pages) {
    for (const [, asset] of html.matchAll(/\bsrc="(\/assets\/[^"?]+)"/g)) assert.ok(existsSync(resolve('public', '.' + asset)), path + ': missing ' + asset)
    for (const [, href] of html.matchAll(/\bhref="([^"]+)"/g)) {
      if (href.startsWith('mailto:') || href.startsWith('http')) continue
      const [target, anchor] = href.split('#')
      const page = pages.get(target || path)
      assert.ok(page, path + ': broken route ' + href)
      if (anchor) assert.ok(page.ids.includes(anchor), path + ': missing anchor ' + href)
    }
  }
  }
  assert.match(pages.get('/missing-page').html, /Page not found/)
  const index = readFileSync('index.html', 'utf8')
  for (const [, asset] of index.matchAll(/(?:href|src)="(\/assets\/[^"?]+)"/g)) assert.ok(existsSync(resolve('public', '.' + asset)), 'index missing ' + asset)
  console.log(`Verified ${paths.length} routes in both light and dark themes, headings, IDs, internal links, anchors, and referenced assets.`)
} finally { await server.close() }
