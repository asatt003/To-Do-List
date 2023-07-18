let nameField = document.querySelector('#name');
let userInput = "";
let list = [];
if (nameField) {
nameField.addEventListener(
    "input", 
    (eventObject) => {userInput = eventObject.target.value}
);
let btn = document.querySelector('#btn');
btn.addEventListener("click", () => console.log(userInput));
}