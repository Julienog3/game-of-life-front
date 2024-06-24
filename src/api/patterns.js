export async function getPatterns()  {
  return await fetch('http://127.0.0.1:3000/api/patterns').then((res) => res.json())
}