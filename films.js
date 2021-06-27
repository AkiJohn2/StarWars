let query = new URLSearchParams(location.search)
let api = 'https://swapi.dev/api'
let route = '/films/' + query.get('id')
let res = await fetch(api + route)
let data = await res.json()

// https://swapi.dev/api/people/1/
for (let key in data) {
    let p = document.createElement('p')

    if (key == 'characters') {
        p.append(`${key}: `)
        for (let film of data[key]) {
            let a = document.createElement('a')
            let id = film.split('/')[5]
            a.href = `people.html?id=${id}`
            a.append(`CHARACTER: ${id}`)
            p.append(a)
        }

    } else if ((key == 'species') || (key == 'homeworld') || (key == 'starships') || (key == 'vehicles') || (key == 'url') || (key == 'planets')) {
        p.append(` ${key}:  N/A`)
    }
    else p.append(`${key}: ${data[key]}`)

    document.body.append(p)
}