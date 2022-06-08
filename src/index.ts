const timethen = <T>(
  ms?: number, value?: T
): PromiseLike<T> => ({ then(fn: any): any { return setTimeout(fn, +ms!, value), this } })

export default timethen
