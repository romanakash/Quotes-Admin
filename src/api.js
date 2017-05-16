import { create } from 'apisauce';

const api = create({
    baseURL: 'https://q-s.herokuapp.com/',
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000/'
    }
});

const postQuotes = (array) => {
    for (var quote of array) {
        let json = JSON.stringify(quote)
        console.log(json);
        api.post('/post', { json });
    }
}

const postDaily = (array) => {
    for (var daily of array) {
        let json = JSON.stringify(daily);
        console.log(json);
        api.post('/post-dailies', { json })
    }
}

export { postQuotes };
export { postDaily };
