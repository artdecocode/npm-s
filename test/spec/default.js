import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import npmS from '../../src'

/** @type {TestSuite} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof npmS, 'function')
  },
  async 'calls package without error'() {
    await npmS()
  },
  async 'gets a link to the fixture'({ fixture }) {
    const text = fixture`text.txt`
    const res = await npmS({
      text,
    })
    ok(res, text)
  },
}

/**
 * @typedef {import('../context').TestSuite} TestSuite
 */

export default T