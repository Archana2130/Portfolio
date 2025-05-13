// 🌙 Dark Mode Toggle
const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// 📩 Contact Form Submission
function submitForm(event) {
  event.preventDefault();

  // Get form input fields
  const nameInput = document.querySelector('input[type="text"]');
  const emailInput = document.querySelector('input[type="email"]');
  const messageTextarea = document.querySelector('textarea');
  const msg = document.getElementById("msg");

  // Show confirmation message
  msg.innerText = "Thank you! Your message has been sent.";

  // Clear the form fields
  nameInput.value = "";
  emailInput.value = "";
  messageTextarea.value = "";

  // Remove message after 3 seconds
  setTimeout(() => {
    msg.innerText = "";
  }, 3000);
}

