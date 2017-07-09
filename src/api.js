import { create } from 'apisauce';
import moment from 'moment-timezone';

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

const changeTimezone = (date) => {
    let now = moment(date);
    let another = now.clone();
    another.tz('GMT');
    another.add(now.utcOffset() - another.utcOffset(), 'minutes');
    let final = another.toISOString();
    console.log(final);
    return final;
}

const postDaily = (array) => {
    for (var daily of array) {
        daily.date = changeTimezone(daily.date);
        let json = JSON.stringify(daily);
        console.log(json);
        api.post('/post-dailies', { json })
    }
}

export { postQuotes };
export { postDaily };
