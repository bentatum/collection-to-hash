
export default (collection = [], key, val) => {
  const res = {}
  collection.forEach(x => {
    const k = typeof key === 'function' ? key(x) : x[key]
    const v = typeof val === 'function' ? val(x) : x
    res[k] = v
  })
  return res
}
