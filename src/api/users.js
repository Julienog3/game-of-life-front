const BASE_URL = import.meta.env.VITE_API_URL

export async function getUsers()  {
  const url = new URL('api/users', BASE_URL)
  return await fetch(url).then((res) => res.json())
}