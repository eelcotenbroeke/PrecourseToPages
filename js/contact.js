contactList = [];

class person {
  constructor(firstName, lastName, email, comments, number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.comments = comments;
    this.number = number;
    contactList.push(this);
    console.log(contactList);
  }
}

document
  .getElementById("formData")
  .addEventListener("submit", function (event) {
    // event.preventDefault();
    firstNameVal = document.getElementById("firstName").value;
    lastNameVal = document.getElementById("lastName").value;
    emailVal = document.getElementById("inputEmail").value;
    commentsVal = document.getElementById("comments").value;
    numberVal = document.getElementById("integer").value;
    let newContactPerson = new person(
      firstNameVal,
      lastNameVal,
      emailVal,
      commentsVal,
      numberVal
    );
    console.log(newContactPerson);
    contactList.push(newContactPerson);
    let inputField = document.querySelectorAll(".form-control");
    deleteFormData(inputField);
    console.log(contactList);
  });

function deleteFormData(elementstoBeCleared) {
  elementstoBeCleared.forEach((item) => (item.value = ""));
}

let inputNodeList = document.querySelectorAll(".must");

function nodeList() {
  let counter = 0;
  inputNodeList.forEach((item) => {
    let itemValue = item.value;
    if (itemValue.length > 0) {
      counter++;
      if (counter == inputNodeList.length) {
        document.getElementById("formSubmit").removeAttribute("disabled");
      }
    } else {
      document.getElementById("formSubmit").setAttribute("disabled", "");
    }
  });
}
inputNodeList.forEach(() => {
  addEventListener("input", nodeList);
});
