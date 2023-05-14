const root = document.documentElement;

const radios = document.querySelectorAll('input[name="team-pick"]');
const submit_btn = document.getElementById('submit-btn');
radios.forEach((radio) => radio.addEventListener('change', changeTheme));
submit_btn.addEventListener('click', passwordCheck);

let password_1 = document.getElementById("password");
let password_2 = document.getElementById("confirm-pass");



function passwordCheck(){

    
    if(password_1.value === password_2.value){
        password_2.setCustomValidity('');
    }
    else{
        password_2.setCustomValidity('Passwords do not match');
    }
}

function changeTheme(){
    root.className = this.value;
}

