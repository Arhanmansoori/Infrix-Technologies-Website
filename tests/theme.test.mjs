import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
const css = readFileSync('src/theme.css', 'utf8')
const declarations = block => Object.fromEntries([...block.matchAll(/(--[\w-]+):\s*([^;]+);/g)].map(([, key, value]) => [key, value.trim()]))
const light = declarations(css.match(/:root\s*\{([^}]+)\}/)[1])
const dark = { ...light, ...declarations(css.match(/:root\[data-theme='dark'\]\s*\{([^}]+)\}/)[1]) }
function resolve(tokens, key) {
  const value = tokens[key]
  return value.startsWith('var(') ? resolve(tokens, value.slice(4, -1)) : value
}
function luminance(hex) {
  const channels = hex.slice(1).match(/../g).map(part => parseInt(part, 16) / 255).map(value => value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4)
  return channels[0] * .2126 + channels[1] * .7152 + channels[2] * .0722
}
function verify(foreground, background, label) {
  const values = [luminance(foreground), luminance(background)].sort((a, b) => b - a)
  const ratio = (values[0] + .05) / (values[1] + .05)
  assert.ok(ratio >= 4.5, `${label}: ${ratio.toFixed(2)} contrast below 4.5`)
}
for (const [name, tokens] of [['light', light], ['dark', dark]]) {
  test(`${name} theme text and primary controls meet 4.5:1 token contrast`, () => {
    for (const foreground of ['--ink', '--muted', '--accent-text']) {
      for (const background of ['--canvas', '--surface', '--soft', '--capability-alt']) verify(resolve(tokens, foreground), resolve(tokens, background), `${name} ${foreground} / ${background}`)
    }
    verify(resolve(tokens, '--button-text'), resolve(tokens, '--button-bg'), name + ' primary button')
    verify(resolve(tokens, '--button-text'), resolve(tokens, '--button-hover'), name + ' primary hover')
    verify(resolve(tokens, '--on-dark'), resolve(tokens, '--navy'), name + ' feature heading')
    verify(resolve(tokens, '--muted-on-dark'), resolve(tokens, '--navy'), name + ' feature body')
  })
}
