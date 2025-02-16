const binaryNum = document.getElementById('binaryNum');
const base10Num = document.getElementById('base10Num');
const bitsContainer = document.getElementById('bits');
const bits = {
    1: false,
    2: false,
    4: false,
    8: false,
    16: false,
    32: false,
    64: false,
    128: false,
};
for (const [k, v] of Object.entries(bits)) {
    const bitElement = document.createElement('span');
    bitElement.style.color = 'red';
    bitElement.style.zIndex = 1000;
    bitElement.innerText = k.toString();
    bitElement.onclick = e => {
        console.log("nuts")
    };
    bitsContainer.appendChild(bitElement);
    if (k != 128) bitsContainer.innerHTML += ' + ';
}
