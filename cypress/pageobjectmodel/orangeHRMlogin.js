class logindata {
  usernameInput() {
    return 'input[name="username"]';
  }
  passwordInput() {
    return 'input[type="password"]';
  }
  submitButton() {
    return 'button[type="submit"]';
  }
  errorMessage() {
    return "Invalid credentials";
  }

logincreads(username,password){
  cy.get(this.usernameInput()).type(username)
   cy.get(this.passwordInput()).type(password)
   cy.get(this.submitButton()).click()
}
}

const login = new logindata();
export default login;
