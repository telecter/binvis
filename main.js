const counter = document.getElementById("binaryCounter");
const base10Counter = document.getElementById("base10Counter");
const bits = {
    1: false,
    2: false,
    4: false,
    8: false,
    16: false,
    32: false,
    64: false,
    128: false
}

function flipBit(bit) {
    const bitElement = document.getElementById(`${bit}bit`);
    bits[bit] = !bits[bit];

    if (bitElement.style.color == "green") {
        bitElement.style.color = "red";
    }
    else if (bitElement.style.color == "red") {
        bitElement.style.color = "green";
    }

    let num = 0;
    for (const [k, v] of Object.entries(bits)) {
        if (v) num += Number.parseInt(k);
    }
    counter.innerText = num.toString(2).padStart(8, '0');
    base10Counter.innerText = num.toString()

}