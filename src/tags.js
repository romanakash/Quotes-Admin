const tagsDict = {
    '1': 'Art',
    '2': 'Birthday',
    '3': 'Business',
    '4': 'Education',
    '5': 'Fiction',
    '6': 'Humour',
    '7': 'Inspiration',
    '8': 'Intelligence',
    '9': 'Leadership',
    '10': 'Life',
    '11': 'Love',
    '12': 'Movies',
    '13': 'Philosophy',
    '14': 'Programming',
    '15': 'Religion',
    '16': 'Science',
    '17': 'Society',
    '18': 'Space',
    '19': 'Sports',
    '20': 'Success',
    '21': 'Technology',
    '22': 'Time',
    '23': 'Travel',
    '24': 'Literature'
}

const tags = [];

for (var key in tagsDict) {
    if (tagsDict.hasOwnProperty(key)) {
        tags.push({tag: tagsDict[key], tagId: key})
    }
}

export default tags;
