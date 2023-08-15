const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const userData = {};

    formData.forEach((value, name) => {
        userData[name] = value;
    });

    if (!userData.email || !userData.password) {
        alert('All fields must be filled out.');
        return;
    }

    console.log(userData);


    event.target.reset();
});

