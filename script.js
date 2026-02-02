function validateForm(event) {
    // Prevent the form from submitting automatically
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const mobile = document.getElementById("mobile");

    let isValid = true;

    // Validate Name
    if (name.value.trim() === "") {
        setErrorFor(name, "Name cannot be blank");
        isValid = false;
    } else {
        setSuccessFor(name);
    }

    // Validate Email
    if (email.value.trim() === "") {
        setErrorFor(email, "Email cannot be blank");
        isValid = false;
    } else if (!isEmail(email.value.trim())) {
        setErrorFor(email, "Not a valid email");
        isValid = false;
    } else {
        setSuccessFor(email);
    }

    // Validate Password
    if (password.value.trim() === "") {
        setErrorFor(password, "Password cannot be blank");
        isValid = false;
    } else if (password.value.length < 6) {
        setErrorFor(password, "Password must be min 6 characters");
        isValid = false;
    } else {
        setSuccessFor(password);
    }

    // Validate Mobile
    if (mobile.value.trim() === "") {
        setErrorFor(mobile, "Mobile number cannot be blank");
        isValid = false;
    } else if (mobile.value.length !== 10 || isNaN(mobile.value)) {
        setErrorFor(mobile, "Enter valid 10-digit number");
        isValid = false;
    } else {
        setSuccessFor(mobile);
    }

    // If all validations pass, submit the form (or show success)
    if (isValid) {
        alert("Registration Successful!");
        // HTMLFormElement.prototype.submit.call(document.getElementById("form")); 
    }
    return isValid;
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}