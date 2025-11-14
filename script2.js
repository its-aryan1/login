const API_URL = "https://69175adfa7a34288a28079f6.mockapi.io/loginapi/users";   

// UI
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});


// REGISTER (SIGN UP)
const registerForm = document.querySelector(".sign-up-container form");
registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = registerForm.querySelector("input[type='text']").value;
  const email = registerForm.querySelector("input[type='email']").value;
  const password = registerForm.querySelector("input[type='password']").value;

  const newUser = {
    username,
    email,
    password
  };

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)
    });

    alert("Registration Successful!");
    container.classList.remove("right-panel-active"); // show login page

  } catch (err) {
    alert("Registration Failed!");
    console.log(err);
  }
});


// LOGIN (SIGN IN)
const loginForm = document.querySelector(".sign-in-container form");
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = loginForm.querySelector("input[type='email']").value;
  const password = loginForm.querySelector("input[type='password']").value;

  try {
    const res = await fetch(API_URL);
    const users = await res.json();

    const found = users.find(
      (u) => u.email === email && u.password === password
    );

    if (found) {
      alert("Login Successful!");

      // redirect to welcome page
      window.location.href = "welcome.html";

    } else {
      alert("Invalid Email or Password!");
    }

  } catch (err) {
    alert("Login Error!");
    console.log(err);
  }
});
