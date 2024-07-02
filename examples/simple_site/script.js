const button = document.getElementById("clickme");
button.addEventListener("click", function (element) {
  console.log("Peekaboo");
  element.target.disabled = true;
  alert("Hi!");
});
