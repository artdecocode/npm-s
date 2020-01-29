import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import npmS from '../../src'

export default makeTestSuite('test/result/default', {
  async getResults() {
    const res = await npmS({
      scripts: this.input.split(' '),
      args: [`--scripts-prepend-node-path`],
    })
    return JSON.stringify(res)
  },
  context: Context,
})