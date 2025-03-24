console.log()

fetch("http://localhost:1234/movies")
.then(response => response.json())
.then(movies => {
const html = movies.map(movie => {
    return `
        <article>
            <h2>${movie.title}</h2>
            <img src="${movie.image}" alt="${movie.title}">
            <p>${movie.description}</p>
        </article>
    `
}).json('')

    console.log(html)
    document.querySelector("main").innerHTML = html
})