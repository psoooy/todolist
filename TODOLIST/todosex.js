const containerEl = document.querySelector(".container");
const addFormEl = document.querySelector(".container .add-list");
// const addFormEl = containerEl?.querySelector(".add-list");
const inputEl = addFormEl?.querySelector("input");
const todoListEl = containerEl?.querySelector(".list--wrap");

const todoList = [];

const createListItem = (text) => {
    return {
        id: Date.now(),
        text,
        isDone: false,
    };
};

addFormEl.addEventListener("submit", (event) => {
    event.preventDefault(); // 웹 브라우저의 기본 동작을 막음

    const value = inputEl.value;

    if (!value) {
        return;
    }

    todoList.push(createListItem(value));

    inputEl.value = "";

    render(todoList);
});

const render = (todoList) => {
    todoListEl.innerHTML = "";

    todoList.forEach((todo) => {
        // checkboxEl. =
        const itemEl = document.createElement("li"); // <li>
        itemEl.dataset.id = todo.id;
        const checkboxEl = document.createElement("input");
        const txtEl = document.createElement("div");
        itemEl.innerText = todo.text; // <li>text <input txt></li>
        checkboxEl.type = "checkbox"; // <input>

        itemEl.append(checkboxEl);

        todoListEl.append(itemEl);
    });
};

console.log(todoListEl);

/**
 * form의 기본동작 -> 서버에 데이터를 보내면서 특정 페이지로 이동하거나 새로고침 됌
 */
