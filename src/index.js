import { c as co } from 'erte'
import spawncommand from 'spawncommand'

/**
 * @param {string} a The script to run with NPM.
 */
const run = (script) => {
  const proc = spawncommand('npm', ['run', script])
  proc.stdout.pipe(process.stdout)
  proc.stderr.pipe(process.stderr)
  const { promise } = proc
  return { proc, promise }
}

/**
 * @type {_npmS.npmS}
 */
export default async function npmS(config = {}) {
  if (!config) throw new Error('Config is expected')
  const { scripts = [] } = config
  return await scripts
    .reduce(async (acc, command) => {
      acc = await acc
      const { promise } = run(command)
      const c = await promise
      const { code } = c
      if (code) {
        const err = new Error(`Command "${co(command, 'yellow')}" existed with code ${co(code, 'red')}`)
        err.code = code
        throw err
      }

      return [...acc, c]
    }, [])
}

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').npmS} _npmS.npmS
 */
