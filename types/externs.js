/**
 * @fileoverview
 * @externs
 */

/* typal types/index.xml externs */
/** @const */
var _npmS = {}
/**
 * Options for the program.
 * @record
 */
_npmS.Config
/**
 * A boolean option. Default `true`.
 * @type {boolean|undefined}
 */
_npmS.Config.prototype.shouldRun
/**
 * A text to return.
 * @type {string|undefined}
 */
_npmS.Config.prototype.text

/* typal types/api.xml externs */
/**
 * Run NPM commands in series.
 * @typedef {function(!_npmS.Config): !Promise<string>}
 */
_npmS.npmS
