import makeTestSuite from '@zoroaster/mask'
import Context from '../context'

export default makeTestSuite('test/result/bin', {
  fork: {
    module: Context.BIN,
    getArgs(args) {
      return [...args, '--scripts-prepend-node-path']
    },
    preprocess: {
      stderr(string) {
        return string.replace(/\d.+debug\.log/, 'debug.log')
      },
    },
  },
})