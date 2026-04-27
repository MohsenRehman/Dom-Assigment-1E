const heading = document.getElementById("mainHeading");
heading.innerText = "Welcome to JavaScript DOM";

function changeParagraph() {
  const para = document.getElementById("para");
  para.innerText = "Paragraph text changed!";
}

function changeBackground() {
  document.body.style.backgroundColor = "lightblue";
}

function showAlert() {
  alert("DOM is working!");
}

function updateText() {
  const input = document.getElementById("userInput").value;
  const output = document.getElementById("output");

  output.innerText = input;
}
