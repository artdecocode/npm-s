const { _npmS } = require('./npm-s')

/**
 * Run NPM commands in series.
 * @param {!_npmS.Config} config Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} [config.text] A text to return.
 * @return {Promise<string>}
 */
function npmS(config) {
  return _npmS(config)
}

module.exports = npmS

/* typal types/index.xml namespace */
/**
 * @typedef {_npmS.Config} Config `＠record` Options for the program.
 * @typedef {Object} _npmS.Config `＠record` Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} [text] A text to return.
 */
