const usr_name  = document.getElementById("usr_name");
const usr_email = document.getElementById("usr_email");
const usr_birth = document.getElementById("usr_birth");
const usr_psswd = document.getElementById("usr_psswd");
const usr_confirm_psswd = document.getElementById("usr_confirm_psswd");
const usr_gender = document.getElementById("usr_gender");
const usr_state = document.getElementById("usr_state");

function save_acc() {
    let check_login = 1; // 1 to sucessfull login / 0 to failed login

    let name = usr_name.value;
    if(name.length > 12) {
        check_login = 0;
        document.getElementById("name_rtn").innerHTML = "Name is to big!";
    }

    let email = usr_email.value;
    let birth = usr_birth.value;
    let psswd = usr_psswd.value
    let c_psswd = usr_confirm_psswd.value;
    let gender = usr_gender.value;
    let state = usr_gender;

    
}