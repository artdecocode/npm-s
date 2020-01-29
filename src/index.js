import { c } from 'erte'

/**
 * @type {_npmS.npmS}
 */
export default async function npmS(config = {}) {
  const {
    shouldRun = true,
    text = '',
  } = config
  if (!shouldRun) return ''
  console.log('@artdeco/npm-s called with %s', c(text, 'yellow'))
  return text
}

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').npmS} _npmS.npmS
 */
