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











function executeOnLoad() {
    displayNumbers()
}

window.onload = executeOnLoad