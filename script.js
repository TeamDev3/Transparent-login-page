    document.getElementById("loginForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (email === "test@example.com" && password === "123456") {
        alert("Login Successful ✅");
      } else {
        alert("Invalid Email or Password ❌");
      }
    });