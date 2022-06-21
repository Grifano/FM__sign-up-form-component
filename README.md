# Frontend Mentor - Intro component with sign up form

This is a solution to the [Design preview for the Intro component with sign up form coding challenge](./design/desktop-preview.jpg).
Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
    - [My Process](#my-process)
      - [Build with](#built-with)
      - [What I learned](#what-i-learned)
      - [Continued Development](#continued-development)
      - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![](./images/ScreenShot.jpg)

### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/intro-component-with-sign-up-form-using-html5-validation-and-javascrip-95xmyInDko)
- Live Site URL: [Live](https://grifano.github.io/FM__sign-up-form-component/)

## My process

### Built with

- Semantic HTML5 markup
- HTML5 Validation
- CSS custom properties
- SASS/SCSS
- JavaScript
- Flexbox
- Grid CSS
- Responsive Web Design

### What I learned

After a lot of research, and making a hole in my head 🥴. I find that a better solution for validating the email input is an HTML5 feature as a "pattern" attribute. Also, "title" to add some custom message.

```html
<label for="email">Email</label>
<input
  id="email"
  class="sign-up__input"
  type="email"
  name="email"
  placeholder="Email Address"
  pattern="^[a-zA-Z]+@[a-zA-Z.-]+\.[a-z]{2,4}$"
  title="Are you shure that is something like that name@email.com?"
/>
```

JS!JS!JS! At least I start making something funny! As I expect... I do know NOTHING!!! But, something I know now 😁 And this is a lot of new things, like Arrow Functions, Regular Expressions, working with EventListener, and forEach... oh! a lot of new things.
I decide to use the forEach method to iterate through all inputs.
the checkedFormInputs is help me to decide when execute a submit method. As they had to be executet only when all inputs will be filed with data.
So, I fill this array with string "valid" only if the getCheckForm() return true.

```js
form.addEventListener("submit", (e) => {
  const checkedFormInputs = [];
  e.preventDefault();
  formInputs.forEach((input) => {
    if (getCheckForm(input)) {
      checkedFormInputs.push("valid");
    }
  });
  if (formInputs.length === checkedFormInputs.length) {
    form.submit();
  }
});
```

### Continued development

I believe, that it's possible to complete this challenge more efficiently. But, I decided to go further and pick up another challenge to continue practicing with JavaScript.  
I'm focusing on improving my programming skills with HTML&CSS and JavaScript. My plan is to get comfortable with the basics before I going to dive into the Frontend framework/library like React, Angular, Vue, etc.
I hope that such amzing tools like [Frontend Mentor](https://www.frontendmentor.io/), [freeCodeCamp](https://www.freecodecamp.org/learn) and [Uxcel](https://uxcel.com?invite=EE4PBID94EEH) help me with my this.

### Useful resources

[Frontend Mentor](https://www.frontendmentor.io/) - Get a challenge and try to make them as close to a mockup as you can.  
[Uxcel](https://uxcel.com?invite=EE4PBID94EEH) - improv UX/UI Design skills, by reading the article and check your new knowledge by passing a quiz.

## Author

- Website - [Serhii "Gr[i]fano" Orlenko"](https://grifano.webflow.io/)
- Frontend Mentor - [@Grifano](https://www.frontendmentor.io/profile/Grifano)
- Twitter - [@Grifano](https://twitter.com/OrlenkoSerhii)
- LinkedIn - [@Grifano](https://www.linkedin.com/in/serhii-orlenko-44aaa4a3/)

<!-- ## Acknowledgments -->
