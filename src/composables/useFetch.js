export const useFetch = async (url, opts) => {
  const baseUrl = 'https://jsonplaceholder.typicode.com/users'
  try {
    const reponse = fetch(baseUrl + url, opts)
    const data = (await reponse).json()
    return data
  } catch (err) {
    return null
  }
}
