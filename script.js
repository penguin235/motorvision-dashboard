// List of valid mock users (pretend these are accounts created in the app)
const validUsers = ["test@example.com", "demo@riderapp.com"];

document.addEventListener("DOMContentLoaded", () => {
  const loginContainer = document.getElementById("login-container");
  const dashboard = document.getElementById("dashboard");
  const loginForm = document.getElementById("login-form");
  const emailInput = document.getElementById("email");
  const welcomeMessage = document.getElementById("welcome-message");
  const logoutButton = document.getElementById("logout-button");

  const savedUser = localStorage.getItem("loggedInUser");
  if (savedUser) {
    showDashboard(savedUser);
  }

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = emailInput.value.trim().toLowerCase();

    if (validUsers.includes(email)) {
      localStorage.setItem("loggedInUser", email);
      showDashboard(email);
    } else {
      alert("That email is not registered. Please create your account in the app.");
    }
  });

  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    loginContainer.classList.remove("hidden");
    dashboard.classList.add("hidden");
    emailInput.value = "";
  });

  function showDashboard(email) {
    loginContainer.classList.add("hidden");
    dashboard.classList.remove("hidden");
    welcomeMessage.textContent = `Welcome back, ${email}`;
  }
});
