const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const ulEl = document.querySelector('ul');

function addGoal() {
    const enteredValue = inputEl.value;
    const listItemEl = document.createElement('li');
    listItemEl.textContent = enteredValue;
    ulEl.appendChild(listItemEl);
    inputEl.value = "";
}

buttonEl.addEventListener('click', addGoal);