const BASE_URL = import.meta.env.VITE_API_URL

export async function getConfigurations()  {
  const url = new URL('api/configurations', BASE_URL)
  return await fetch(url).then((res) => res.json())
}

export async function findConfiguration(id) {
  const url = new URL(`api/configurations/${id}`, BASE_URL)
  return await fetch(url).then((res) => res.json())
}

export async function createConfiguration(payload) {
  if (!payload) {
    throw new Error('No payload provided.')
  }

  const url = new URL('api/configurations', BASE_URL)

  return await fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(payload)
  })
}

export async function updateConfiguration(id, payload) {
  if (!payload) {
    throw new Error('No payload provided.')
  }

  const url = new URL(`api/configurations/${id}`, BASE_URL)

  return await fetch(url, {
    method: 'PUT',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload)
  })
}

export async function deleteConfiguration(id) {
  if (!id) {
    throw new Error('No id provided.')
  }

  const url = new URL(`api/configurations/${id}`, BASE_URL)
  return await fetch(url, { method: 'DELETE', credentials: 'include' })
}