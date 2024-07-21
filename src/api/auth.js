import Cookies from 'js-cookie'

const BASE_URL = import.meta.env.VITE_API_URL

export async function login(payload) {
  const url = new URL('api/auth/login', BASE_URL)
  return await fetch(url, { 
    method: 'POST', 
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload)
  }).then((res) => res.json()).then(({ jwtToken }) => {
      Cookies.set('jwtToken', jwtToken, { path: '/', domain: '127.0.0.1', expires: 7 });
  })
}

export async function logout() {
  const url = new URL('api/auth/logout', BASE_URL)
  return await fetch(url, { 
    method: 'POST', 
  }).then(() => {
    Cookies.remove('jwtToken', { path: '/' })
  })
}
