import npmS from '../src'

(async () => {
  const res = await npmS({
    text: 'example',
  })
  console.log(res)
})()