// Toggle form visibility
document.getElementById("toggleLoginBtn").addEventListener("click", () => {
  const form = document.getElementById("loginForm");
  form.classList.toggle("hidden");
});

// Login function (just logs data here)
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  console.log(`Logging in with username: ${username} and password ${password}`);
  
//   console.log("Logging in with Username:", username, + " And Password:" + password);
  alert("Login submitted (check console)");
}