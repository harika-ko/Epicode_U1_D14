const numbers = 76


function displayNumbers() {
    let numContainer = document.getElementById("numbers-container")

    for (let i = 1; i <= numbers; i++) {
        let numNode = document.createElement("div")
        numNode.innerText = i
        numNode.classList.add('numbers')
        numContainer.appendChild(numNode)
    }
}

function randomizeNumber() {
    let randomNumber = Math.floor(Math.random() * 76) + 1
    return randomNumber
}

function selectNumber() {
    let randomfunc = randomizeNumber()
    let newNumNode = document.querySelectorAll(".numbers")
    for (let i = 1; i < newNumNode.length; i++) {
        if (randomfunc === parseInt(newNumNode[i].innerText)) {
            newNumNode[i].classList.add('selected-number')
        }
    }
}

function executeOnLoad() {
    displayNumbers()
}

window.onload = executeOnLoad