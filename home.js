let filmCards = document.getElementsByClassName("film-card")

for (let i=0; i<filmCards.length; i++) {
    let film = films[i]
    filmCards[i].style.backgroundImage = `linear-gradient(to top, rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${film.img})`

    let nameLabel = filmCards[i].children[0].children[0].children[0]
    nameLabel.textContent = film.name

    let summaryLabel = filmCards[i].children[0].children[0].children[2]
    summaryLabel.textContent = film.summary

    let link1 = filmCards[i].children[1].children[0]
    let link2 = filmCards[i].children[1].children[1]
    link1.setAttribute("href", film.url0)
    link2.setAttribute("href", film.url1)

    let overlay = filmCards[i].children[2]

    filmCards[i].addEventListener("mouseenter", function(event) {
        overlay.style.opacity = 1
    })
    filmCards[i].addEventListener("mouseleave", function(event) {
        overlay.style.opacity = 0
    })
}