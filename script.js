
// Function to pause for some time
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to show message after delay
async function showMessage() {
  let message = document.getElementById("text").value;
  let delayTime = Number(document.getElementById("delay").value);

  if (!message) {
    alert("Enter a message!");
    return;
  }

  if (isNaN(delayTime) || delayTime < 0) {
    alert("Enter a valid delay time!");
    return;
  }

  await wait(delayTime); // Pause for the given time
  document.getElementById("output").innerText = message; // Show the message
}

// Run showMessage() when button is clicked
document.getElementById("btn").addEventListener("click", showMessage);
