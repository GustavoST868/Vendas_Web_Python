// index_js.js

document.addEventListener("DOMContentLoaded", function () {
    var userIcon = document.querySelector(".icon_user");
    userIcon.addEventListener("click", function () {
      var loginBox = document.querySelector(".login_box");
      loginBox.style.display = "block";
    });
  });
  