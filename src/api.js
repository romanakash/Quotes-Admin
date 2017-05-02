import { create } from 'apisauce';

const api = create({
    baseURL: 'http://0.0.0.0:8080/',
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
        delete daily.date;
        let json = JSON.stringify(daily);
        console.log(json);
        api.post('/post-dailies', { json })
    }
}

export { postQuotes };
export { postDaily };
