const BASE_URL = import.meta.env.VITE_API_URL

export async function getPatterns()  {
  const url = new URL('api/patterns', BASE_URL)
  return await fetch(url).then((res) => res.json())
}

export async function findPattern(id) {
  const url = new URL(`api/patterns/${id}`, BASE_URL)
  return await fetch(url, { credentials: 'include' }).then((res) => res.json())
}

export async function createPattern(payload) {
  if (!payload) {
    throw new Error('No payload provided.')
  }

  const url = new URL('api/patterns', BASE_URL)

  return await fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload)
  })
}

export async function updatePattern(id, payload) {
  if (!payload) {
    throw new Error('No payload provided.')
  }

  const url = new URL(`api/patterns/${id}`, BASE_URL)

  return await fetch(url, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload)
  })
}

export async function deletePattern() {
  if (!id) {
    throw new Error('No id provided.')
  }

    const url = new URL(`api/patterns/${id}`, BASE_URL)
  return await fetch(url, { method: 'DELETE' })
}