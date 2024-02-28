function nameInputvalue() {
  let nameValue;
  nameValue = document.querySelector("#name").value;

  document
    .querySelector("#cardName")
    .insertAdjacentText("beforeend", nameValue);
}
nameInputvalue();
