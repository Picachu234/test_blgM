document.getElementById('register__form').addEventListener('submit', DataVerification);

const specialCharRegex = /[!@#$%^&*(),.?":{}|<>/']/;

function DataVerification() {
    event.preventDefault();

    let elements = document.getElementById('register__form')

    let name_user = elements.name.value;
    let login_user = elements.login.value;
    let password_user = elements.password.value;
    let re_password_user = elements.re_password.value;
    let email_user = elements.e_mail.value;

    if (name_user.length < 4 || name_user.length > 12 || specialCharRegex.test(name_user)) {
        document.getElementById('li--mistake__name').innerHTML = "Некорректное имя";
        return false;
    } else
        document.getElementById('li--mistake__name').innerHTML = "";

    if (login_user.length < 4 || login_user.length > 12 || specialCharRegex.test(login_user)) {
        document.getElementById('li--mistake__login').innerHTML = "Некорректный логин";
        return false;
    } else
        document.getElementById('li--mistake__login').innerHTML = "";

    if (password_user.length < 6) {
        document.getElementById('li--mistake__password').innerHTML = "Некорректный пароль";
        return false;
    } else
        document.getElementById('li--mistake__password').innerHTML = "";

    if (password_user !== re_password_user) {
        document.getElementById('li--mistake__repassword').innerHTML = "Пароли не совпадают";
        return false;
    } else
        document.getElementById('li--mistake__repassword').innerHTML = "";

    if (email_user.length < 6 || !email_user.includes('.') || !email_user.includes('@')) {
        document.getElementById('li--mistake__email').innerHTML = "Некорректная эл.почта";
        return false;
    } else
        document.getElementById('li--mistake__email').innerHTML = "";

    console.log("Все данные корректны.");
    return true;
}


