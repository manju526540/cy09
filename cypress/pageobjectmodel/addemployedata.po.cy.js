class addemployeePage{
    addemployeemenuIteam(){
        return "Add Employee"
    }
    FirstNameInput(){
        return 'input[class="oxd-input oxd-input--active orangehrm-firstname"]'
    }
    LastnameInput(){
        return 'input[name="lastName"]'
    }
    SubmitBtn(){
        return 'button[type="submit"]'
    }
    SuccesfullyMsg(){
        return 'Successfully Saved'
    }
}
const addemployee = new addemployeePage()
export default addemployee


