const usernameInput = document.getElementById('usernameInput');

usernameInput.addEventListener('keyup', function (e) {
  e.preventDefault;
  let username = e.target.value.toLowerCase();
  console.log(username);
});