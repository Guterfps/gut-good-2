
const playingField = document.getElementById("playing-field")
console.log(playingField)

const down = document.getElementById("down")
console.log(down)
console.log(down.innerHTML)
block.style.backgroundColor = "yellow"
const moveRight = function () {
    const block = document.getElementById("block")
    let left = parseInt(block.style.left) || 0
    left += 15
    block.style.left = left + "px"
}
const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)
const subHeader = document.createElement("h2")
subHeader.innerHTML = "subHeader"
subHeader.setAttribute("class", "my-header")
subHeader.style.color = "green"
document.body.appendChild(subHeader)

const box = document.getElementById("box")

const enterColor = function () {
    box.style.backgroundColor = "#c0392b"
    box.innerHTML = "AHH GO AWAY"
}

const leaveColor = function () {
    box.style.backgroundColor = "#1abc9c"
    box.innerHTML = "Hover over me!"
}
const clickColor = function () {
    box.style.background = "#8e44ad"

}
const list = document.getElementById("myList")
const addItem = function () {
    const newItem = document.createElement("li")
    newItem.innerHTML = "A new item!"
    list.appendChild(newItem)
}


const up = document.getElementById("up")
up.onclick = function () {
    let up = parseInt(block.style.top) || 0
    up -= 15
    block.style.top = up + "px"
}
const left = document.getElementById("left")
left.onclick = function () {
    let right = parseInt(block.style.left) || 0
    right -= 15
    block.style.left = right + "px"
}
const right = document.getElementById("right")
right.onclick = function () {
    let left = parseInt(block.style.left) || 0
    left += 15
    block.style.left = left + "px"
}

down.onclick = function () {
    let top = parseInt(block.style.top) || 0
    top += 15
    block.style.top = top + "px"
}


const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

const input = document.createElement("input")
input.setAttribute("type", "text")
input.setAttribute("id", "ahi")
input.setAttribute("placeholder", "wut m8?")
document.body.appendChild(input)
const button = document.createElement("button")
button.innerHTML = "checkReservation"
document.body.appendChild(button)


button.onclick = function () {
    const value = document.getElementById("ahi").value
    if (reservations[value] ) {
        const name = document.createElement("div")
        name.innerHTML = "wellcome " + value
        document.body.appendChild(name)
    
}else {
    const name = document.createElement("div")
    name.innerHTML = "fuck off"
    document.body.appendChild(name)
}
    
}
const div=document.createElement("div")
div.style.