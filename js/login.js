function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.getElementById('togglePassword');
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleButton.innerHTML = '<img src="images/eye-crossed.png" id="showbtn">';
    } else {
      passwordInput.type = 'password';
      toggleButton.innerHTML = '<img src="images/eye.png" id="showbtn">';
    }
  }

  document.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
      check()
  }
});

    function login() {
        var pass = document.getElementById('password').value;
        var user = document.getElementById('username').value;
        var error = document.getElementById('errormsg');

        if (user == 'MoziAdmin' && pass == "GrllzsMziAdmn") {
          window.location.href = 'home.html';
         } else {
          error.style.display = 'block';
          error.textContent = 'Felhasználónév vagy jelszó helytelen!';
          setTimeout(function() {
            error.style.display = 'none';
            error.textContent = '';
          }, 1000);
         };
}