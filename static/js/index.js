//wait for the event
document.addEventListener("DOMContentLoaded", function() {
  // related to user icon element
  var userIcon = document.getElementById("user-icon");

  // click event
  userIcon.addEventListener("click", function() {
      // Redirect to the login page
      window.location.href = "/login";
  });
});
  