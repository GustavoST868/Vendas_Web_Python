//wait for the event
document.addEventListener('DOMContentLoaded', function () {
    var registerLink = document.querySelector('.register-link a');

    registerLink.addEventListener('click', function (event) {
        event.preventDefault(); 

        // Redirect to the register page
        window.location.href = '/register'; 
    });
});
