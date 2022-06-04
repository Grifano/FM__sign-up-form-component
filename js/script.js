// Form Validation
const firstName = document.getElementById("fName");
const lastName = document.getElementById("lName");
const email = document.getElementById("email");
const password = document.getElementById("password");
//
// const setError = (element, message) => {
//   const inputControl = element.parentElement;
//   const errorDisplay = inputControl.querySelector(".sign-up__error");

//   errorDisplay.innerText = message;
//   element.style.color = "#ff7a7a";
//   element.classList.add("error");
//   element.classList.remove("success");
// };

// setError(lastName, "Something");

const setError = (el) => {
  const inputControl = el.parentElement;
  const errorTextholder = inputControl.querySelector(".sign-up__error");
  const elName = el.name;

  switch (elName) {
    case "email":
      errorTextholder.innerText = "Looks like this is not an email";
      break;

    default:
      errorTextholder.innerText = `${convertElementName(
        elName
      )} cannot be empty`;
      break;
  }
};
// Converting the element name to the string for output message
const convertElementName = (element) => {
  const splitElName = element.replace(/([a-z])([A-Z])/g, "$1 $2");
  return splitElName[0].toUpperCase() + splitElName.slice(1);
};

setError(firstName);
