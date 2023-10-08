let buffer = ""


function bufferSet(str) {
    buffer = str
    printOnDisplay(buffer)
}

function bufferAppend(str) {
    bufferSet(buffer + str)
}

function digitEntered(digit) {
    bufferAppend(digit)
}

function opSelected(op) {
    console.log("Calculating result")
}

function resetClicked() {
    bufferSet("0")
}


function attachHandlers() {
    for(let i = 0; i < 10; i++) {
        document.querySelector("#button-" + i).onclick = () => digitEntered(i)
    } 
    document.querySelector("#button-plus").onclick = () => opSelected("+")
    document.querySelector("#button-minus").onclick = () => opSelected("-")
    document.querySelector("#button-multiply").onclick = () => opSelected("*")
    document.querySelector("#button-divide").onclick = () => opSelected("/")

    document.querySelector("#button-equal").onclick = () => equalClicked()
    document.querySelector("#button-reset").onclick = () => resetClicked()
}

attachHandlers()