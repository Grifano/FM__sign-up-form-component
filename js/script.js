// Form Validation
const firstName = document.getElementById("fName");
const lastName = document.getElementById("lName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("signUpForm");
const inputControl = form.querySelector(".sign-up__error-msg");
let messages = ["Error msg 1"];

form.addEventListener("submit", (e) => {
  if (messages.length > 0) {
    e.preventDefault();

    form.querySelectorAll("input").forEach((input) => {
      getCheckForm(input);
    });
  }
});

const setError = (el) => {
  const inputControl = el.parentElement;
  const errorTextholder = inputControl.querySelector(".sign-up__error-msg");
  const elName = el.name;

  // Converting the element name to the string for output message
  function convertElementName() {
    let convElName = elName.replace(/([a-z])([A-Z])/g, "$1 $2"); //? What is "$1 $2" do?
    return convElName[0].toUpperCase() + convElName.slice(1);
  }

  // Add an error icon to the input
  el.classList.add("error");
  messages.push("Error msg");

  if (elName) {
    switch (elName) {
      case "email":
        errorTextholder.innerText = "Looks like this is not an email";
        break;

      default:
        errorTextholder.innerText = `${convertElementName()} cannot be empty`;
        break;
    }
  }
};
const setSuccess = (el) => {
  const inputControl = el.parentElement;
  const errorTextholder = inputControl.querySelector(".sign-up__error-msg");
  const elName = el.name;

  // Converting the element name to the string for output message
  function convertElementName() {
    let convElName = elName.replace(/([a-z])([A-Z])/g, "$1 $2");
    return convElName[0].toUpperCase() + convElName.slice(1);
  }

  // Remove an error icon to the input
  el.classList.remove("error");
  messages.pop();
  // Set required attribute for element
  errorTextholder.innerText = "";
};
function getCheckForm(el) {
  if (el.value === "") {
    setError(el);
  } else {
    setSuccess(el);
  }
}
