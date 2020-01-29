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
 * The scripts to execute.
 * @type {!Array<string>}
 */
_npmS.Config.prototype.scripts
/**
 * The result of a script.
 * @record
 */
_npmS.ScriptResult
/**
 * The exit code.
 * @type {number}
 */
_npmS.ScriptResult.prototype.code
/**
 * The stdout of the program.
 * @type {string}
 */
_npmS.ScriptResult.prototype.stdout
/**
 * The stderr of the program.
 * @type {string}
 */
_npmS.ScriptResult.prototype.stderr

/* typal types/api.xml externs */
/**
 * Run Multiple NPM Commands In Series.
 * @typedef {function(!_npmS.Config): !Promise<!Array<!_npmS.ScriptResult>>}
 */
_npmS.npmS
