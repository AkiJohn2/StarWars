let query = new URLSearchParams(location.search)
let api = 'https://swapi.dev/api'
let route = '/people/' + query.get('id')
let res = await fetch(api + route)
let data = await res.json()

for (let key in data) {
    let p = document.createElement('p')

    if (key == 'films') {
        p.append(`${key}: `)
        for (let film of data[key]) {
            let a = document.createElement('a')
            let id = film.split('/')[5]
            a.href = `films.html?id=${id}`
            a.append(`FILM: ${id}`)
            p.append(a)
        }
    } else if ((key == 'species') || (key == 'homeworld') || (key == 'starships') || (key == 'vehicles') || (key == 'url')) {
        p.append(` ${key}:  N/A`)
    }
    else p.append(`${key}: ${data[key]}`)

    document.body.append(p)
}