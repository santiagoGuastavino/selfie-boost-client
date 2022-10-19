const defaultUrl = 'http://localhost:3001'

export async function getRequest (endpoint, callback) {
  fetch(defaultUrl + endpoint)
    .then(response => response.json())
    .then(data => callback(data.payload))
    .catch(err => console.log(err))
}

export async function postRequest (endpoint, data) {
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

  const response = await fetch(defaultUrl + endpoint, postSettings)
  return response.json()
}
