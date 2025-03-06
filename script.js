
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function displayMessage() {
  // Get user input values
  let text = document.getElementById("text").value;
  let delayTime = document.getElementById("delay").value;

  // Convert delayTime to number
  delayTime = Number(delayTime);

  
  if (!text) {
    alert("Please enter a message.");
    return;
  }
  if (!delayTime || delayTime < 0) {
    alert("Please enter a valid delay time.");
    return;
  }


  await delay(delayTime);


  document.getElementById("output").innerText = text;
}

// Event listener for button click
document.getElementById("btn").addEventListener("click", displayMessage);
