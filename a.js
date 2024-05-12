let textarea = document.getElementById("code");
let reset = document.getElementById("reset");
let code = textarea.value;
let output = document.querySelector(".output");
let solution = document.getElementById("solution");

function drawOutput() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  drawOutput();
});

solution.addEventListener("click", function () {
  textarea.value =
    "<h1>My short story</h1>\n<p>I am a policewoman and my name is Trish.</p>\n<p>My legs are made of cardboard and I am married to a fish.</p>";
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
