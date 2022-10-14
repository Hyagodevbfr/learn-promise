const url = 'https://dog.ceo/api/breeds/image/random'

const dogImg = document.querySelector('[data-js="dog-img"]')

const validateHTTPstatus = dogData => {
    if (!dogData.ok){
     throw new Error(`HTTP error, status ${dogData.status}`)
    }
    return dogData.json()
}

const settDogImage = ({ message: url }) => {
    dogImg.setAttribute('src', url)
}

const handleRequestError = error => {
    console.log(error.message);
}

fetch(url)
    .then(validateHTTPstatus)
    .then(settDogImage)
    .catch(handleRequestError)