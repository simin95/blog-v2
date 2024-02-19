Promise.resolve().then(() => {
  console.log('promise1')
  setTimeout(() => {
    console.log('setTimeout1')
  })
})
setTimeout(() => {
  console.log('setTimeout2')
  Promise.resolve().then(() => {
    console.log('promise2')
  })
})

// 在 chrome 浏览器下的执行结果是：
// promise1 - setTimeout2 - promise2 - setTimeout1