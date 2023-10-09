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

    if (op !== null) {
        result = calculate(op, a, b)
        bufferSet(result)
        setPowerset(null)
        Registers.set('a', null)
        Registers.set('op', null)
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



function opSelected(op) {
     // When user selects operator after entering second number,
  // we calculate result, as it's done in typical calculator
    if(Registers.get('op') !== null) {
        calculateAndLoop()
    }

    setA(Number(buffer))
    Set(op)
    bufferSet("0")
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