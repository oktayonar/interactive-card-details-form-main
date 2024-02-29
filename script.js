document.querySelector("#number").addEventListener("click", function (e) {
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
  e.preventDefault();
});

document.querySelector("#month").addEventListener("click", function (e) {
  const numberValue = [];
  numberValue.push(document.querySelector("#number").value);

  if (numberValue != "") {
    if (numberValue[numberValue.length - 1].length === 19) {
      document.querySelector("#card-number").innerHTML =
        numberValue[numberValue.length - 1];
    } else {
      alert("Please Enter Number in a Valid Format(exp: 1111 1111 1111 1111)");
    }
  } else if (numberValue == "") {
    document.querySelector(
      "#card-number"
    ).innerHTML = `<p class="text-warning p-0 m-0">please enter the card number</p>`;
    document.querySelector("#card-number").classList.remove("fs-3");
    document.querySelector("#card-number").classList.add("fs-4");
  }
  e.preventDefault();
});

document.querySelector("#year").addEventListener("click", function (e) {
  const monthValue = [];
  monthValue.push(document.querySelector("#month").value);
  if (monthValue != "") {
    if (
      monthValue[monthValue.length - 1] > 0 &&
      monthValue[monthValue.length - 1] < 13
    ) {
      document.querySelector("#cardMonth").innerHTML =
        monthValue[monthValue.length - 1];
    } else {
      alert("Please Enter Number in a Valid Format (01-12)");
    }
  } else if (monthValue == "") {
    document.querySelector("#cardMonth").innerHTML = `!!`;
    document.querySelector("#cardMonth").classList.add("text-warning", "fs-3");
  }
  e.preventDefault();
});

document.querySelector("#cvc_input").addEventListener("click", function (e) {
  const yearValue = [];
  const nowyear = new Date();
  yearValue.push(document.querySelector("#year").value);

  if (yearValue != "") {
    if (
      yearValue[yearValue.length - 1] > nowyear.getFullYear() - 2000 &&
      yearValue[yearValue.length - 1] < 100
    ) {
      document.querySelector("#cardYear").innerHTML =
        yearValue[yearValue.length - 1];
    } else {
      alert("Please Enter Number in a Valid Format(24-99)");
    }
  } else if (yearValue == "") {
    document.querySelector("#cardYear").innerHTML = `!!`;
    document.querySelector("#cardYear").classList.add("text-warning", "fs-3");
    document.querySelector("#cardMonth").innerHTML = `!!`;
    document.querySelector("#cardMonth").classList.add("text-warning", "fs-3");
  }
});

document.body.addEventListener("click", function (e) {
  const cvcValue = [];
  cvcValue.push(document.querySelector("#cvc_input").value);
  if (cvcValue != "") {
    if (
      cvcValue[cvcValue.length - 1] > 99 &&
      cvcValue[cvcValue.length - 1] < 1000
    ) {
      document.querySelector("#cvc").innerHTML = cvcValue[cvcValue.length - 1];
      document.querySelector("#cvc").classList.remove("text-warning", "fs-3");
    } else {
      var alerted = localStorage.getItem("alerted") || "";
      if (alerted != "yes") {
        alert("My alert.");
        localStorage.setItem("alerted", "yes");
      }
    }
  }
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
    alert("Please Fill in All Information");
  } else {
    alert("Your Card Has Been Created");
  }
});
