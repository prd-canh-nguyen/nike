export const checkMail = (mail) => {
  switch (mail) {
    case "":
      return "Please enter a valid email address.";
    default:
      if (mail.slice(mail.length - 10) !== "@gmail.com") {
        return "Email is incorrect.";
      }
      return null;
  }
};

export const checkPassword = (password) => {
  switch (password) {
    case "":
      return "Please enter a valid password.";
    default:
      return null;
  }
};

export const checkFirstName = (firstName) => {
  switch (firstName) {
    case "":
      return "Please enter a valid firstName.";
    default:
      return null;
  }
};

export const checkLastName = (lastName) => {
  switch (lastName) {
    case "":
      return "Please enter a valid lastName.";
    default:
      return null;
  }
};

export const checkSex = (sex) => {
  switch (sex) {
    case "":
      return "Please enter a valid sex.";
    default:
      return null;
  }
};
