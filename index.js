let nameField = document.querySelector('#name');
let userInput = "";
var userInputArray = [];
function itemConstructor(inputArray) {
  let newContainer = document.querySelector('#todoListContainer');
  let newElement = document.createElement('div');
  newElement.innerHTML = inputArray[(inputArray.length - 1)];
  newContainer.appendChild(newElement);
  return;
};
nameField.addEventListener(
  "input", 
  (eventObject) => {userInput = eventObject.target.value}
);
let btn = document.querySelector('#btn');
btn.addEventListener("click", () => {
  userInputArray.push(userInput);
  itemConstructor(userInputArray);
  //console.log(userInputArray);
});