const { _npmS } = require('./npm-s')

/**
 * Run Multiple NPM Commands In Series.
 * @param {!_npmS.Config} config Options for the program.
 * @param {!Array<string>} config.scripts The scripts to execute.
 * @param {!Array<string>} [config.args] Any additional arguments, e.g., `[--scripts-prepend-node-path]`.
 * @return {Promise<!Array<!_npmS.ScriptResult>>}
 */
function npmS(config) {
  return _npmS(config)
}

module.exports = npmS

/* typal types/index.xml namespace */
/**
 * @typedef {_npmS.Config} Config `＠record` Options for the program.
 * @typedef {Object} _npmS.Config `＠record` Options for the program.
 * @prop {!Array<string>} scripts The scripts to execute.
 * @prop {!Array<string>} [args] Any additional arguments, e.g., `[--scripts-prepend-node-path]`.
 * @typedef {_npmS.ScriptResult} ScriptResult `＠record` The result of a script.
 * @typedef {Object} _npmS.ScriptResult `＠record` The result of a script.
 * @prop {number} code The exit code.
 * @prop {string} stdout The stdout of the program.
 * @prop {string} stderr The stderr of the program.
 */
