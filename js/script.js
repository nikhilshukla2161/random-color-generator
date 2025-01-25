// Function to generate a random color
const getColor = () => {
  // Generate a random number between 0 and 1677215 (HEX color range)
  const randomNumber = Math.floor(Math.random() * 16777215);

  // Convert the random number to a HEX color code
  const randomCode = "#" + randomNumber.toString(16);

  // Apply the generated color as the background of the body
  document.body.style.backgroundColor = randomCode;

  // Display the generated color code in the designated element
  document.getElementById("color-code").innerText = randomCode;

  // Reset the copy button text to "Copy Color" after generating a new color
  const copyButton = document.getElementById("copy");
  copyButton.innerText = "Copy Color";

  // Enable the copy button
  copyButton.disabled = false;
};

// Function to copy the current color code to the clipboard
const copyColor = () => {
  // Get the current color code displayed on the page
  const colorCode = document.getElementById("color-code").innerText;

  // Copy the color code to the clipboard
  navigator.clipboard.writeText(colorCode);

  // Update the copy button text to "Copied!"
  const copyButton = document.getElementById("copy");
  copyButton.innerText = "Copied!";

  // Disable the copy button to prevent multiple copies
  copyButton.disabled = true;
};

// Attach event listener to the "Generate Color" button
document.getElementById("btn").addEventListener("click", getColor);

// Attach event listener to the "Copy Color" button
document.getElementById("copy").addEventListener("click", copyColor);

// Generate an initial random color when the page loads
getColor();
