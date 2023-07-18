let nameField = document.querySelector('#name');
let userInput = "";
var userInputArray = [];
function storeInput(input) {
    //console.log(`input : ${input}`);
    return userInputArray.push(input);
};
nameField.addEventListener(
    "input", 
    (eventObject) => {userInput = eventObject.target.value}
);
let btn = document.querySelector('#btn');
btn.addEventListener("click", () => {
    storeInput(userInput);
    console.log(userInputArray);
});
  //console.log(userInputArray);