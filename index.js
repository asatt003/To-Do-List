let nameField = document.querySelector('#name');
let userInput = { text: "", identifier: 0 };
let count = 0;
var userInputArray = [];
function itemConstructor(inputArray, count) {
  let newContainer = document.querySelector('#todoListContainer');
  let newElement = document.createElement('div');
  newElement.setAttribute("id", count);
  newElement.setAttribute("class", "Item");
  newElement.innerHTML = (inputArray[(inputArray.length - 1)]).text;
  newElement.addEventListener("click", () => newContainer.removeChild(newElement));
  newContainer.appendChild(newElement);
  return;
};
nameField.addEventListener(
  "input", 
  (eventObject) => {userInput.text = eventObject.target.value}
);
let btn = document.querySelector('#btn');
btn.addEventListener("click", () => {
  count++;
  userInput.identifier = count;
  userInputArray.push(userInput);
  itemConstructor(userInputArray, count);
  document.getElementById('name').value = "";
});
