let buffer = ""


function bufferSet(str) {
    buffer = str
    printOnDisplay(buffer)
}

function bufferAppend(str) {
    if (buffer === '0') {
        bufferSet(str)
    } else {
        bufferSet(buffer + str)
    }
}

function calculateAndLoop() {
    const a = getA()
    const b = Number(buffer)
    const op = getOp()

    if (a !== null && op !== null) {
        result = calculate(op, a, b)
        bufferSet(result)
        setPowerset(null)

        return result
    }
}

function digitEntered(digit) {
    bufferAppend(digit)
}

function opSelected(op) {
    if(getA() !== null && getOp() !== null) {
        calculateAndLoop()
    }

    setA(Number(buffer))
    Set(op)
    bufferSet("0")
}



function equalClicked() {
    calculateAndLoop()
}


function reset() {
    bufferSet("0")
    setA(null)
    setPowerset(null)
}




function attachHandlers() {
    for(let i = 0; i < 10; i++) {
        document.querySelector("#button-" + i).onclick = () => bufferAppend(i.toString())
    } 
    document.querySelector("#button-plus").onclick = () => opSelected("+")
    document.querySelector("#button-minus").onclick = () => opSelected("-")
    document.querySelector("#button-multiply").onclick = () => opSelected("*")
    document.querySelector("#button-divide").onclick = () => opSelected("/")

    document.querySelector("#button-equal").onclick = () => calculateAndLoop()
    document.querySelector("#button-reset").onclick = () => reset()
}

attachHandlers()
reset()