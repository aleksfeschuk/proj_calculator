let buffer = ""

function bufferAppend(str) {
    buffer += str
    console.log(buffer)
}

function digitEntered(digit) {
    console.log("Entering digit", digit)
}

function opSelected(op) {
    console.log("Calculating result")
}


function attachHandlers() {
    for(let i = 0; i < 10; i++) {
        document.querySelector("#button-" + i).onclick = () => digitEntered(i)
    } 
    document.querySelector("#button-plus").onclick = () => opSelected("+")
    document.querySelector("#button-minus").onclick = () => opSelected("-")
    document.querySelector("#button-multiply").onclick = () => opSelected("*")
    document.querySelector("#button-divide").onclick = () => opSelected("/")

    document.querySelector("#button-equal").onclick = () => equalClicked("=")
}

attachHandlers()