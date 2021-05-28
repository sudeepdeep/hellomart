
const form = document.querySelector('.form-details');
const heading = document.querySelector('.heading h1')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(form.name.value);
    heading.textContent = "Hello " + form.name.value
    form.name.value = ""
    form.email.value = ""
    login.textContent = 'Logged In'
});