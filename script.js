let synopsisText = document.getElementById("synopsis-content")
synopsisText.textContent = synopsis
let textOffset = synopsisText.offsetTop
let fullHeight = synopsisText.offsetHeight

function textScrollPercent() {
    let screenBottom = window.scrollY + window.innerHeight
    if (screenBottom >= textOffset) {
        return (screenBottom - textOffset) / fullHeight
    }
}

let synopsisLen = synopsis.length

window.addEventListener("scroll", function(event) {
    if (textOffset <= window.scrollY + window.innerHeight) {
        let numChars = Math.ceil(synopsisLen * textScrollPercent()) - 600
        numChars = Math.max(0, numChars)
        numChars = Math.min(numChars, synopsisLen)
        synopsisText.textContent = synopsis.slice(0, numChars)
    }
})

let producerLeft = document.getElementById("producer-left")
let producerRight = document.getElementById("producer-right")

producerLeft.addEventListener("mouseenter", function(event) {
    producerLeft.style.opacity = 0
    producerLeft.children[0].style.display = "none"
    setTimeout(function() {
        producerLeft.style.backgroundImage = 'linear-gradient(to top, rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("images/Ngoc.JPG")'
        producerLeft.style.opacity = 1
        producerLeft.children[1].style.display = "block"
    }, 150)
})

producerLeft.addEventListener("mouseleave", function(event) {
    producerLeft.style.opacity = 0
    producerLeft.children[1].style.display = "none"
    setTimeout(function() {
        producerLeft.style.backgroundImage = 'linear-gradient(to top, rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("images/stern.JPG")'
        producerLeft.style.opacity = 1
        producerLeft.children[0].style.display = "block"
    }, 150)
})

producerRight.addEventListener("mouseenter", function(event) {
    producerRight.style.opacity = 0
    producerRight.children[0].style.display = "none"
    setTimeout(function() {
        producerRight.style.backgroundImage = 'linear-gradient(to top, rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("images/Alex.jpeg")'
        producerRight.style.opacity = 1
        producerRight.children[1].style.display = "block"
    }, 150)
})

producerRight.addEventListener("mouseleave", function(event) {
    producerRight.style.opacity = 0
    producerRight.children[1].style.display = "none"
    setTimeout(function() {
        producerRight.style.backgroundImage = 'linear-gradient(to top, rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("images/tandon.JPG")'
        producerRight.style.opacity = 1
        producerRight.children[0].style.display = "block"
    }, 150)
})

let reviewBox = document.getElementById("reviews").children[1]
var review = document.getElementById("review")
let reviewer = document.getElementById("reviewer")

function setReview(i) {
    review.textContent = `"${reviews[i].review}"`
    reviewer.textContent = `— ${reviews[i].reviewer}`
    reviewBox.style.backgroundImage = `linear-gradient(to top, rgb(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${reviews[i].url}')`
}
let i = 0
setReview(i)

let arrowLeft = document.getElementById("arrow-left")
let arrowRight = document.getElementById("arrow-right")
arrowLeft.addEventListener("click", function(event) {
    reviewBox.style.opacity = 0
    setTimeout(function() {
        if (i == 0) {
            i = reviews.length - 1
        } else {
            --i
        }
        setReview(i)
        reviewBox.style.opacity = 1
    }, 150)
})

arrowRight.addEventListener("click", function(event) {
    reviewBox.style.opacity = 0
    setTimeout(function() {
        if (i == reviews.length-1) {
            i = 0
        } else {
            ++i
        }
        setReview(i)
        reviewBox.style.opacity = 1
    }, 150)
})