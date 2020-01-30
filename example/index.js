import npmS from '../src'

(async () => {
  const res = await npmS({
    scripts: ['pass'],
    args: ['--scripts-prepend-node-path'],
  })
  console.log(res)
})()