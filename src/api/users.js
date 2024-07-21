const BASE_URL = import.meta.env.VITE_API_URL

export async function getUsers()  {
  const url = new URL('api/users', BASE_URL)
  return await fetch(url).then((res) => res.json())
}

export async function findUser(id) {
  const url = new URL(`api/users/${id}`, BASE_URL)
  return await fetch(url).then((res) => res.json())
}

export async function createUser(payload) {
  if (!payload) {
    throw new Error('No payload provided.')
  }

  const url = new URL('api/users', BASE_URL)

  return await fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload)
  })
}

export async function updateUser(id, payload) {
  if (!payload) {
    throw new Error('No payload provided.')
  }

  const url = new URL(`api/users/${id}`, BASE_URL)

  return await fetch(url, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload)
  })
}

export async function deleteUser(id) {
  if (!id) {
    throw new Error('No id provided.')
  }

  const url = new URL(`api/users/${id}`, BASE_URL)
  return await fetch(url, { method: 'DELETE' })
}