// Copyright (c) 2025 telecter
// Licensed MIT, see LICENSE file.

const counter = document.getElementById("binary-counter");
const decimalCounter = document.getElementById("decimal-counter");
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

const elements = document.querySelectorAll("[data-bit]");
for (const element of elements) {
  element.addEventListener("click", () => {
    const bit = element.getAttribute("data-bit");
    flipBit(parseInt(bit));
  });
}

function flipBit(bit) {
  const element = document.querySelector(`[data-bit="${bit}"]`);
  bits[bit] = !bits[bit];

  if (element.style.color == "green") {
    element.style.color = "red";
  } else if (element.style.color == "red") {
    element.style.color = "green";
  }

  let num = 0;
  for (const [k, v] of Object.entries(bits)) {
    if (v) num += Number.parseInt(k);
  }
  counter.innerText = num.toString(2).padStart(8, "0");
  decimalCounter.innerText = num.toString();
}
