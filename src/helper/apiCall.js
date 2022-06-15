export async function postRequest (url, data) {
  const postSettings = {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  }

  const response = await fetch(url, postSettings)
  try {
    return response.json()
  } catch (err) {
    console.log(err)
  }
}
