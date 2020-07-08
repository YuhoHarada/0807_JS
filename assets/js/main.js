let header = document.getElementById("header")
let nav = document.getElementById("nav")
let hero = document.getElementById("hero")
let story = document.getElementById("story")
let qa = document.getElementById("qa")
let ball = document.getElementById("ball")

document.body.style.margin = "0"

header.style.background = "#999"
header.style.height = "80px"
header.style.display = "flex"
header.style.justifyContent = "space-between"
header.style.alignItems = "center"
header.style.padding = "0 5%"
header.style.position = "fixed"
header.style.width = "90%"
header.innerHTML = '<h1>logo</h1><img src="assets/img/menu.svg" onclick="navClick()">'

nav.style.height = "100vh"
nav.style.width = "300px"
nav.style.position = "fixed"
nav.style.top = "0"
nav.style.right = "-300px"
nav.style.background = "#333"
nav.style.display = "flex"
nav.style.flexDirection = "column"
nav.style.justifyContent = "center"
nav.style.alignItems = "center"
nav.style.transition = ".5s ease"
nav.style.zIndex = "99"
nav.innerHTML = '<a href="#">Home</a><a href="#">About</a><a href="#">Contact</a>'
let anchor = nav.getElementsByTagName("a")
let i
for (i = 0; i < anchor.length; i++){
    anchor[i].style.color = "white"
    anchor[i].style.textDecoration = "none"
    anchor[i].style.margin = "3vh 0"
}
nav.innerHTML += '<img src="assets/img/x.svg" onclick="navReturn()">'
nav.getElementsByTagName("img")[0].style.position = "absolute"
nav.getElementsByTagName("img")[0].style.top = "30px"
nav.getElementsByTagName("img")[0].style.right = "5vw"

function navClick() {
    nav.style.right = "0"
}

function navReturn() {
    nav.style.right = "-300px"
}

hero.style.background = "url(https://source.unsplash.com/random) center/cover no-repeat"
hero.style.height = "100vh"

story.style.padding = "100px 5%"
story.innerHTML = "<h1>Headline Headline Headline Headline Headline</h1><p>Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text </p>"
story.style.background = "#ddd"
story.getElementsByTagName("h1")[0].style.textAlign = "center"

qa.innerHTML = '<div><h2 onclick="qaopen(0)">+ How Do I apply?</h2><p>Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text</p></div><div><h2 onclick="qaopen(1)">+ What are entry requirements?</h2><p>Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text</p></div>'
qa.style.display = "grid"
qa.style.gridTemplateColumns = "1fr 1fr"
qa.style.columnGap = "20px"
qa.style.padding = "100px 5%"
let qap = qa.getElementsByTagName("p")
let p
for (p = 0; p < 2; p++) {
    qap[p].style.height = "0"
    qap[p].style.margin = "0"
    qap[p].style.opacity = "0"
    qap[p].style.transition = ".5s ease"
}
let n
let booleanp = [false,false]
function qaopen(n) {
    if (booleanp[n] == false) {
        qap[n].style.height = "100px"
        qap[n].style.opacity = "1"
        booleanp[n] = true
    } else {
        qap[n].style.height = "0"
        qap[n].style.opacity = "0"
        booleanp[n] = false
    }
}

ball.style.padding = "100px 5%"
ball.style.display = "flex"
ball.style.justifyContent = "flex-end"
ball.innerHTML = '<div id="ball1" onclick="colorChange(0)"><p></p></div><div id="ball2" onclick="colorChange(1)"><p></p></div><div id="ball3" onclick="colorChange(2)"><p></p></div>'
let m
for (m = 0; m < 3; m++) {
    ball.getElementsByTagName("div")[m].style.height = "50px"
    ball.getElementsByTagName("div")[m].style.width = "50px"
    ball.getElementsByTagName("div")[m].style.borderRadius = "50%"
    ball.getElementsByTagName("div")[m].style.background = "#282b29"
    ball.getElementsByTagName("div")[m].style.overflow = "hidden"
    ball.getElementsByTagName("div")[m].style.transform = "rotate(135deg)"
    ball.getElementsByTagName("p")[m].style.background = "#f4c4c4"
    ball.getElementsByTagName("p")[m].style.width = "50px"
    ball.getElementsByTagName("p")[m].style.height = "50px"
    ball.getElementsByTagName("p")[m].style.marginTop = "25px"
}
let x
let booleanball = [false, false, false]
function colorChange(x) {
    if (booleanball[x] == false) {
        ball.getElementsByTagName("div")[x].style.background = "#f4c4c4"
        ball.getElementsByTagName("p")[x].style.background = "#282b29"
        booleanball[x] = true
    } else {
        ball.getElementsByTagName("div")[x].style.background = "#282b29"
        ball.getElementsByTagName("p")[x].style.background = "#f4c4c4"
        booleanball[x] = false
    }
}