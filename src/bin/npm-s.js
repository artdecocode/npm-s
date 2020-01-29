import { _help, _version, _scripts, argsConfig, _argv } from './get-args'
import { reduceUsage } from 'argufy'
import usually from 'usually'
import npmS from '../'

if (_help) {
  const usage = usually({
    description: 'Run Multiple Yarn Commands In Series.',
    example: 'yarn-s script-1 script-2',
    line: 'yarn-s script[,script,...]',
    usage: reduceUsage(argsConfig),
  })
  console.log(usage)
  process.exit(0)
} else if (_version) {
  console.log(require('../../package.json')['version'])
  process.exit(0)
}

(async () => {
  try {
    if (!_scripts || !_scripts.length)
      throw new Error('Please pass at least one command.')
    await npmS({
      scripts: /** @type {!Array<string>} */ (_scripts),
      args: _argv,
    })
  } catch (err) {
    if (process.env['DEBUG']) console.error(err.stack)
    else console.log(err.message)
    process.exit(err.code)
  }
})()
