const headers = document.querySelector('.header');
const content1 = document.querySelector('#content1');

headers.addEventListener('click', function(e) {
    const loginButton = document.querySelector('.loginbutton');
    const signupButton = document.querySelector('.signupbutton');

    if (e.target === loginButton) {
        content1.innerHTML = "Login Successful";
    }
    if (e.target === signupButton) {
        content1.innerHTML = "Signup Successful";
    }
});
