const defaultUrl = 'http://localhost:3001'

export async function getRequest (endpoint, callback) {
  await fetch(defaultUrl + endpoint)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.log(error))
}

export async function postRequest (endpoint, data, callback) {
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

  await fetch(defaultUrl + endpoint, postSettings)
    .then(response => response.json())
    .then(data => {
      if (Object.hasOwn(data, 'access_token')) {
        callback(data.access_token)
      } else {
        console.log({
          whatDo: data
        })
      }
    })
    .catch(error => console.log(error))
}
