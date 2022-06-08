# timethen
Very small async timeout.

Three lines of code. Without promises, classes, constructors, etc...

## Usage
```js
import timethen from 'timethen';
// or const timethen = require('timethen').default



;(async () => {
  console.log('start func')

  await timethen(1000) // pause in 1 sec

  console.log('after 1 sec')
})()



// or so
timethen(2000, 'optional data')
  .then((value) => {
    console.log('in two seconds:', value) // in two seconds: optional data
  })
// !Only one "then"!


// or so
// If you need a chain of "thens"
Promise.resolve(timethen(2000, 'Hello'))
  .then((v) => {
    console.log('in two seconds:', v) // in two seconds: Hello
    return 'World'
  })
  .then((v) => {
    console.log(v) // World
    return timethen(2000, v)
  })
  .then((v) => {
    console.log('in two seconds:', v) // in two seconds: World
  })

```
