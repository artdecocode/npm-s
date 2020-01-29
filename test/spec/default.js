import { equal } from '@zoroaster/assert'
import Context from '../context'
import npmS from '../../src'

/** @type {TestSuite} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof npmS, 'function')
  },
}

/**
 * @typedef {import('../context').TestSuite} TestSuite
 */

export default T