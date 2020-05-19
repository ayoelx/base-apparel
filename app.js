// variable declarations 

let errorIcon = document.querySelector('.error-icon');
let errorText = document.querySelector('.error-text');
let userEmail = document.querySelector('#userEmail');

// check email validation
let validateEmail = () => {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(userEmail.value).toLowerCase());
}


let alertUser = () => {
    let isEmail = validateEmail();
    if (isEmail && userEmail.classList.contains('error')) {
        userEmail.classList.remove('error');
        errorIcon.style.visibility = 'hidden';
        errorText.style.visibility = 'hidden';
    } else if (!isEmail && !userEmail.classList.contains('error')) {
        userEmail.classList.add('error');
        errorText.style.visibility = 'visible';
        errorIcon.style.visibility = 'visible';
    }
}

document.querySelector('button').addEventListener("mousedown", alertUser);
