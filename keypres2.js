
var input2 = document.getElementById("city");

// Execute a function when the user presses a key on the keyboard
input2.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    // Trigger the button element with a click
    document.getElementById("wheaterBtn").click();
  }
});
