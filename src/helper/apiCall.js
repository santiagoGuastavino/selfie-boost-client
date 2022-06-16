const defaultURL = process.env.REACT_APP_BASE_URL

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

  const response = await fetch(defaultURL + url, postSettings)
  try {
    return response.json()
  } catch (err) {
    console.log(err)
  }
}

export async function getRequest (url, callback) {
  fetch(defaultURL + url)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(err => console.log(err))
}

export async function putRequest (url, data) {
  const putSettings = {
    method: 'PUT',
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

  const response = await fetch(defaultURL + url, putSettings)
  try {
    return response.json()
  } catch (err) {
    console.log(err)
  }
}

export async function deleteRequest (url) {
  const deleteSettings = {
    method: 'DELETE',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  }

  const response = await fetch(defaultURL + url, deleteSettings)
  try {
    return response.json()
  } catch (err) {
    console.log(err)
  }
}
