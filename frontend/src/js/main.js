let buffer = ""
let a = null
let op = null


function calculate(op, a, b) {
    switch (op) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            console.error('Operation', op, 'is not supported.')
    }
}

function refreshDisplay() {
    let txt = buffer
    if(op !== null) {
        txt = `${a} ${op} ${buffer}`
    }
    const display = document.querySelector("#display")
    display.textContent = txt
} 

function bufferSet(str) {
    buffer = str
    refreshDisplay()
}

function bufferAppend(str) {
    if (buffer === '0') {
        bufferSet(str)
    } else {
        bufferSet(buffer + str)
    }
}

function reset() {
    bufferSet("0")
    a = null
    b = null
}

function calculateAndLoop() {
    if (op !== null) {
        const b = Number(buffer)
        const result = calculate(op, a, b)
        a = null
        op = null
        bufferSet(result)

        return result
    }
}

/**
 * Sets operator to given value.
 *
 * @param {string} operator
 *
 * When operator is entered, we assume that entering first number is complete, so we parse buffer,
 * and set `a` to its numeric representation. We also set operator to a given value.
 * We set buffer to "0" which will be default value of `b`
 */



function opSelected(selectedOp) {
     // When user selects operator after entering second number,
  // we calculate result, as it's done in typical calculator
    calculateAndLoop()

    a = Number(buffer)
    op = selectedOp
    bufferSet("0")
}


function decimalSeparatorEntered() {
    if(!buffer.includes('.')) {
        bufferAppend('.')
    }
}


function attachHandlers() {
    for(let i = 0; i < 10; i++) {
        document.querySelector("#button-" + i).onclick = () => bufferAppend(i.toString())
    }
    document.querySelector("#button-decimal").onclick = () => decimalSeparatorEntered() 
    document.querySelector("#button-plus").onclick = () => opSelected("+")
    document.querySelector("#button-minus").onclick = () => opSelected("-")
    document.querySelector("#button-multiply").onclick = () => opSelected("*")
    document.querySelector("#button-divide").onclick = () => opSelected("/")
    document.querySelector("#button-equal").onclick = () => calculateAndLoop()
    document.querySelector("#button-reset").onclick = () => reset()
}

attachHandlers()
reset()