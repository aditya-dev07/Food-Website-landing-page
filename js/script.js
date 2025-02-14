// Mobile Menu Toggle (Existing Code)
const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Modal Functionality
// Get modal elements
const signinModal = document.getElementById("signin-modal");
const signupModal = document.getElementById("signup-modal");

// Get open modal buttons
const signinBtn = document.getElementById("signin-btn");
const signupBtn = document.getElementById("signup-btn");

// Get close buttons
const closeSignin = document.getElementById("close-signin");
const closeSignup = document.getElementById("close-signup");

// Get switch links inside modals
const switchToSignup = document.getElementById("switch-to-signup");
const switchToSignin = document.getElementById("switch-to-signin");

// Events to open modals
signinBtn.addEventListener("click", (e) => {
  e.preventDefault();
  signinModal.style.display = "block";
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  signupModal.style.display = "block";
});

// Events to close modals
closeSignin.addEventListener("click", () => {
  signinModal.style.display = "none";
});

closeSignup.addEventListener("click", () => {
  signupModal.style.display = "none";
});

// Switch between modals
switchToSignup.addEventListener("click", (e) => {
  e.preventDefault();
  signinModal.style.display = "none";
  signupModal.style.display = "block";
});

switchToSignin.addEventListener("click", (e) => {
  e.preventDefault();
  signupModal.style.display = "none";
  signinModal.style.display = "block";
});

// Close modal when clicking outside of modal content
window.addEventListener("click", (e) => {
  if (e.target == signinModal) {
    signinModal.style.display = "none";
  }
  if (e.target == signupModal) {
    signupModal.style.display = "none";
  }
});
