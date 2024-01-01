document.addEventListener("DOMContentLoaded", function() {
  // Get the user icon element by its id
  var userIcon = document.getElementById("user-icon");

  // Add a click event listener to the user icon
  userIcon.addEventListener("click", function() {
      // Redirect to the login page
      window.location.href = "/login";
  });
});
  