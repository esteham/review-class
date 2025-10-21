import { add, multiply } from "./math.js";

console.log(add(5, 15));

console.log(multiply(20, 5));

document.getElementById("mydiv").innerHTML = `<p> 5 + 15 = ${add(
  5,
  15
)}</p> <p>20 + 5 = ${multiply(5, 15)}</p>`;
