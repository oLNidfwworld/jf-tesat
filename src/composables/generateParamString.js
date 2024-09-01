export const generateParamString = (queries, keyName) => {
  return '?' + queries.map((query) => `${keyName}=${query.trim()}`).join('&')
}
