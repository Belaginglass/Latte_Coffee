document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('home').classList.add('selected');
});

function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
  }

  function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
  }

  function goToHomePage() {
    window.location.href = 'index.html';
  }

