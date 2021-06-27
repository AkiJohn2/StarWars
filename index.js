let api = 'https://swapi.dev/api'
let route = '/people'
let res = await fetch(api + route)
let data = await res.json()
let query = new URLSearchParams(location.search)


for (let result of data.results) {
    let div = document.createElement('div')
    for (let key in result) {
        let p = document.createElement('p')
        if (key == 'name') {
            let a = document.createElement('a')
            a.href = `people.html?id=${result.url.split('/')[5]}`
            query.get('id')
            a.append(result[key])
            p.append('name: ')
            p.append(a)
        } else if (key == 'films') {
            p.append(`${key}: `)
            for (let film of result[key]) {
                let a = document.createElement('a')
                let id = film.split('/')[5]
                a.href = `films.html?id=${id}`
                a.append(`FILM: ${id}`)
                p.append(a)
            }
        } else if ((key == 'species') || (key == 'homeworld') || (key == 'starships') || (key == 'vehicles') || (key == 'url')) {
            p.append(` ${key}:  N/A`)

        }
        else
            p.append(`${key}: ${result[key]}`)
        div.append(p)

    }
    document.body.append(div)
}