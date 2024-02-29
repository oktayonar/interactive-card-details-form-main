function nameInputvalue(event) {
  const nameValue = [];
  nameValue.push(document.querySelector("#name").value);

  if (nameValue != "") {
    document.querySelector("#cardName").innerHTML =
      nameValue[nameValue.length - 1];
  } else if (nameValue == "") {
    document.querySelector(
      "#cardName"
    ).innerHTML = `<p class="text-warning">please enter your name and surname!!!</p>`;
  }

  event.preventDefault();
}

function numberInputValue(event) {
  const numberValue = [];
  numberValue.push(document.querySelector("#number").value);
  const numberLength = numberValue[numberValue.length - 1].length;
  console.log(numberLength);

  if (numberLength === 19) {
    document.querySelector("#card-number").innerHTML =
      numberValue[numberValue.length - 1];
  } else if (numberValue == "") {
    document.querySelector(
      "#card-number"
    ).innerHTML = `<p class="text-warning p-0 m-0">please enter the card number</p>`;
    document.querySelector("#card-number").classList.remove("fs-3");
    document.querySelector("#card-number").classList.add("fs-4");
  } else {
    document.querySelector(
      "#card-number"
    ).innerHTML = `<p class="text-warning p-0 m-0">please enter in the correct format</p>`;
  }
  event.preventDefault();
}

function monthInputValue(event) {
  const monthValue = [];
  monthValue.push(document.querySelector("#month").value);
  if (monthValue != "") {
    document.querySelector("#cardMonth").innerHTML =
      monthValue[monthValue.length - 1];
  } else if (monthValue == "") {
    document.querySelector("#cardMonth").innerHTML = `!!`;
    document.querySelector("#cardMonth").classList.add("text-warning", "fs-3");
  }
  event.preventDefault();
}

function yearInputValue(event) {
  const yearValue = [];
  yearValue.push(document.querySelector("#year").value);
  if (yearValue != "") {
    document.querySelector("#cardYear").innerHTML =
      yearValue[yearValue.length - 1];
  } else if (yearValue == "") {
    document.querySelector("#cardYear").innerHTML = `!!`;
    document.querySelector("#cardYear").classList.add("text-warning", "fs-3");
    document.querySelector("#cardMonth").innerHTML = `!!`;
    document.querySelector("#cardMonth").classList.add("text-warning", "fs-3");
  }
  event.preventDefault();
}

document.body.addEventListener("click", function (event) {
  const cvcValue = [];
  cvcValue.push(document.querySelector("#cvc_input").value);
  if (cvcValue != "") {
    document.querySelector("#cvc").innerHTML = cvcValue[cvcValue.length - 1];
  }

  const nameValue = [];
  nameValue.push(document.querySelector("#name").value);

  if (nameValue != "") {
    document.querySelector("#cardName").innerHTML =
      nameValue[nameValue.length - 1];
  }

  const numberValue = [];
  numberValue.push(document.querySelector("#number").value);
  if (numberValue != "") {
    document.querySelector("#card-number").innerHTML =
      numberValue[numberValue.length - 1];
  }

  const monthValue = [];
  monthValue.push(document.querySelector("#month").value);
  if (monthValue != "") {
    document.querySelector("#cardMonth").innerHTML =
      monthValue[monthValue.length - 1];
  }

  const yearValue = [];
  yearValue.push(document.querySelector("#year").value);
  if (yearValue != "") {
    document.querySelector("#cardYear").innerHTML =
      yearValue[yearValue.length - 1];
  }
  event.preventDefault();
});

document.querySelector("#confirm").addEventListener("click", function () {
  let nameInput = document.querySelector("#name").value;
  let numberInput = document.querySelector("#number").value;
  let monthInput = document.querySelector("#month").value;
  let yearhInput = document.querySelector("#year").value;
  let cvcInput = document.querySelector("#cvc_input").value;
  if (
    nameInput == "" ||
    numberInput == "" ||
    monthInput == "" ||
    yearhInput == "" ||
    cvcInput == ""
  ) {
    alert("please fill in all information");
  } else {
    alert("your card has been created");
  }
  location.reload();
});
