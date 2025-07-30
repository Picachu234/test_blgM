"use strict"

const NAME =  document.getElementById('username');
const NICK = document.getElementById('nickname');
const COMMUNITY = document.getElementById('community');
const DESCRIPTION = document.getElementById('description');

const newName = "Сергей";
const newNick = "Gaspa";
const newCommunity = "Нет";
const newDescription = "Ахахахахахаах";

function UpdateUsername()
{
    NAME.textContent = `Имя: ${newName}`;
    NICK.textContent = `Никнейм: ${newNick}`;
    COMMUNITY.textContent = `Сообщество: ${newCommunity}`;
    DESCRIPTION.textContent = `${newDescription}`;
}

UpdateUsername();

