document.querySelector('.creat__post__form').addEventListener('submit', isCorrectPost);

function isCorrectPost(event) {
    event.preventDefault();

    let element = document.querySelector('.creat__post__form');
    let main_text = element.main_text.value;

    if (main_text.length <= 0) {
        return false;
    }

    let postContainer = document.getElementById('post__container');
    let newPost = document.createElement('div');
    newPost.className = 'post';

    let textElement = document.createElement('p');
    textElement.textContent = main_text;
    newPost.appendChild(textElement);

    let isAnonymous = element.anon.checked;
    let hideDate = element.date.checked;

    if (isAnonymous) {
        let anonymousLabel = document.createElement('p');
        anonymousLabel.textContent = "(Анонимно)";
        newPost.appendChild(anonymousLabel);
    }

    if (hideDate) {
        let dateHiddenLabel = document.createElement('p');
        dateHiddenLabel.textContent = "(Дата скрыта)";
        newPost.appendChild(dateHiddenLabel);
    } else {
        let date = new Date().toLocaleString('ru-RU', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        let dateElement = document.createElement('p');
        dateElement.textContent = date;
        newPost.appendChild(dateElement);
    }

    postContainer.appendChild(newPost);
    element.main_text.value = '';
}

document.querySelector('.creat__post__input').addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 105) + 'px';
});
