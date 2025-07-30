document.getElementById("entrance__form").addEventListener("submit", isCorrectData);

function isCorrectData() {
    let elements = document.getElementById("entrance__form");

    let login = elements.login.value;
    let password = elements.password.value;

    let data = new DataView();

    if (login !== data.login || password !== data.password) {
        return false;
    }

    if (password === data.password && login === data.login) {
        return true;
    }

    return false;
}

if (isCorrectData()) {
    window.Entrance();
    console.log('Удачный вход');
}
else {
    console.log('Неудачный вход');
    document.getElementById("li--mistake").innerHTML = 'Неправильный логин или пароль';
}