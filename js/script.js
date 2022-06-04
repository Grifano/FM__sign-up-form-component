// Form Validation
const firstName = document.getElementById("fName");
const lastName = document.getElementById("lName");
const email = document.getElementById("email");
const password = document.getElementById("password");

const setError = (el) => {
  const inputControl = el.parentElement;
  const errorTextholder = inputControl.querySelector(".sign-up__error");
  const elName = el.name;

  // Converting the element name to the string for output message
  function convertElementName() {
    let convElName = elName.replace(/([a-z])([A-Z])/g, "$1 $2");
    return convElName[0].toUpperCase() + convElName.slice(1);
  }

  if (elName)
    switch (elName) {
      case "email":
        errorTextholder.innerText = "Looks like this is not an email";
        break;

      default:
        errorTextholder.innerText = `${convertElementName()} cannot be empty`;
        break;
    }
};
