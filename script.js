let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let password2 = document.getElementById("password2");

    let isValid = true; // Flag to check if form is valid

    // Check username
    if (username.value.trim() === "") {
        onError(username, "Username cannot be empty");
        isValid = false;
    } else {
        onSuccess(username);
    }

    // Check email
    if (email.value.trim() === "") {
        onError(email, "Email cannot be empty");
        isValid = false;
    } else {
        onSuccess(email);
    }

    // Check password
    if (password.value.trim() === "") {
        onError(password, "Password cannot be empty");
        isValid = false;
    } else {
        onSuccess(password);
    }

    // Confirm password
    if (password2.value.trim() === "") {
        onError(password2, "Please confirm password");
        isValid = false;
    } else if (password.value.trim() !== password2.value.trim()) {
        onError(password2, "Passwords do not match");
        isValid = false;
    } else {
        onSuccess(password2);
    }

    // Prevent form submission if there are errors
    if (!isValid) {
        event.preventDefault();
    }
});

// Error function
function onError(input, message) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "visible";
    messageEle.style.color = "red";
    messageEle.innerText = message;
    parent.classList.add("error");
}

// Success function
function onSuccess(input) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "hidden";
    parent.classList.remove("error");
    parent.classList.add("success");
}
