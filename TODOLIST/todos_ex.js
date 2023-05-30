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
        const itemEl = document.createElement("li"); // <li>
        itemEl.className = "list";
        const checkboxEl = document.createElement("input");
        checkboxEl.className = "dot";
        checkboxEl.type = "checkbox"; // <input>
        const txtEl = document.createElement("div");
        txtEl.className = "txt";
        itemEl.dataset.id = todo.id;
        txtEl.innerText = todo.text; // <li>text <input txt></li>
        checkboxEl.checked = todo.isDone;

        itemEl.append(checkboxEl);
        itemEl.append(txtEl);
        todoListEl.append(itemEl);
    });
};

console.log(todoListEl);

/**
 * form의 기본동작 -> 서버에 데이터를 보내면서 특정 페이지로 이동하거나 새로고침 됌
 *
 *
 * 1. 사용자가 발생시킨 EVENT를 감지할 수 있는 로직이 필요함
 * 2. 감지된 EVENT에서 특정 function을 실행시키는데, 그 fucntion에는 현재 내가 구현하고자하는 ui를 표현하고있는 자료구조를 생성 및 수정 및 삭제를 할 수 있을 것이다.
 * 3. 자료구조가 변경되면, 다시 render를 call한다.
 */
