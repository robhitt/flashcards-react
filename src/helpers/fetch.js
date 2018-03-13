export const fetchCardData = (url) => {
    if(typeof url !== 'string'){
        return console.log('url must be string');
    }

    return fetch(url, {
        method: 'GET'
    })
    .then((response) => response.json())
    .catch((error) => console.error(error));
}