// Copyright (c) 2025 telecter
// Licensed MIT, see LICENSE file.

const counter = document.getElementById("binary-counter");
const decimalCounter = document.getElementById("decimal-counter");
const expl = document.getElementById("expl");

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
  counter.textContent = num.toString(2).padStart(8, "0");
  decimalCounter.textContent = num.toString();
  explain();
}


function explain() {
  const paddedDecimal = decimalCounter.textContent.padStart(3, "0");

  expl.innerHTML = `
<p>In decimal (base 10), you would count in the powers of 10,</p>
<p class="text-secondary" style="font-size: 1.5rem;">
    <span style="color:red;">${paddedDecimal.at(0)}</span><span style="color:green;">${paddedDecimal.at(1)}</span><span style="color:blue;">${paddedDecimal.at(2)}</span>
</p>
<p class="text-secondary">
      <strong>hundreds</strong> or 10<sup>2</sup> place..<span style="color:red;">${paddedDecimal.at(0)}</span><br>
      <strong>tens</strong> or 10<sup>1</sup> place......<span style="color:green;">${paddedDecimal.at(1)}</span><br>
      <strong>ones</strong>, or 10<sup>0</sup> place.....<span style="color:blue;">${paddedDecimal.at(2)}</span>
</p>
<p>So then, to find your number, multiply the numbers by their place value:</p>
<p class="text-secondary">
      10<sup>2</sup>(<strong><span style="color:red;">${paddedDecimal.at(0)}</span></strong>) + <br>
      10<sup>1</sup>(<strong><span style="color:green;">${paddedDecimal.at(1)}</span></strong>) + <br>
      10<sup>0</sup>(<strong><span style="color:blue;">${paddedDecimal.at(2)}</span></strong>) = ${decimalCounter.textContent}
</p>
<hr>
<p>It works the same in binary,</p>
<p class="text-secondary" style="font-size: 1.5rem;">
  ${counter.textContent.substring(0, 4)}<span style="color:red;">${counter.textContent.at(-1)}</span><span style="color:green;">${counter.textContent.at(-2)}</span><span style="color:blue;">${counter.textContent.at(-3)}</span>
</p>
<p>Counting in the powers of two instead of ten, each bit to the left has more value.</p>
<p class="text-secondary">
      2<sup>0</sup> place...<span style="color:blue;">${counter.textContent.at(-1)}</span><br>
      2<sup>1</sup> place...<span style="color:green;">${counter.textContent.at(-2)}</span><br>
      2<sup>2</sup> place...<span style="color:red;">${counter.textContent.at(-3)}</span><br>
      <i>...and so on to the left</i>
</p>
<p>By adding them up just like in base 10, you can convert the binary number back.</p>
<p class="text-secondary">
  2<sup>0</sup>(<span style="color:blue;">${counter.textContent.at(-1)}</span>)
  + 2<sup>1</sup>(<span style="color:green;">${counter.textContent.at(-2)}</span>) 
  + 2<sup>2</sup>(<span style="color:red;">${counter.textContent.at(-3)}</span>) 
  + 2<sup>3</sup>(${counter.textContent.at(-4)}) 
  + 2<sup>4</sup>(${counter.textContent.at(-5)}) 
  + 2<sup>5</sup>(${counter.textContent.at(-6)}) 
  + 2<sup>6</sup>(${counter.textContent.at(-7)}) 
  + 2<sup>7</sup>(${counter.textContent.at(-8)}) = ${decimalCounter.textContent}
</p>
<p>This gives us ${decimalCounter.textContent}, which is ${counter.textContent} represented in decimal.</p>`
}

explain();