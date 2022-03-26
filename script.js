const avatarSelection=document.getElementById('avatarTitle');
const buttons=document.querySelectorAll('input[type="radio"]');
const customAvatarSelection=document.getElementById("custom");
const fileUpload=document.querySelector('input[type="file"]');
const alias=document.getElementById('alias');
const emalil=document.getElementById('email');
const phone=document.getElementById('phone');
const password=document.getElementById('password');
const passwordConf=document.getElementById('passwordConfirmation');
const passwordError=document.getElementById('password-error');
const passwordConfirmError=document.getElementById('password-conf-error');
const form=document.querySelector('form');

//changes the name of the avatar based on selection/radio button click
buttons.forEach((button) => {
button.addEventListener('click',()=>{
    if(document.getElementById('neo').checked){
        avatarSelection.innerHTML="YOU HAVE SELECTED: <b>NEO</b>";
    }
    else if(document.getElementById('trinity').checked){
        avatarSelection.innerHTML="YOU HAVE SELECTED: <b>TRINITY</b>";
    }
    else if(document.getElementById('morpheus').checked){
        avatarSelection.innerHTML="YOU HAVE SELECTED: <b>MORPHEUS</b>";
    }
    else if (document.getElementById('agents').checked){
        avatarSelection.innerHTML="YOU HAVE SELECTED: <b>AGENT SMITH</b>";
    }
    else if (document.getElementById('your-own').checked){
        avatarSelection.innerHTML="YOU HAVE SELECTED: <b>ANDROMACHE</b>";
    }
});
})
 
//when a new image is uploaded, the new image is uploaded as the 5th radio button and is the selected avatar
 fileUpload.addEventListener("change", function (event) {
 if(document.getElementById("avatar").value != "") {
     customAvatarSelection.src="images/old-guard-ava.jpg";
     avatarSelection.innerHTML="YOU HAVE SELECTED: <b>ANDROMACHE</b>";
     document.getElementById('your-own').checked=true;
 }
});

//shows error if email is not valid
email.addEventListener('input',function(event){
    if(email.checkValidity() === false){
        email.classList.add('error');
    }
    else {
        email.classList.remove('error');
    }
});

//shows error if phone number is not valid and doesn't follow pattern
phone.addEventListener('input',function(event){
    if(phone.validity.patternMismatch){
        phone.classList.add('error');
    }
    else {
        phone.classList.remove('error');
    }
});

//checks validity of password to ensure requirements are met; indicates which requirements are not met, if any
password.addEventListener('input',function(event){
    if(password.validity.patternMismatch){
        password.classList.add('error');
        const currentValue = password.value;
        const regExpCap = /[A-Z]/g;
        const regExpDig = /[0-9]/g;
        const regExpChar= /[#?!@$%^&*-]/;
        let result = '';

        if (regExpCap.test(currentValue)){
          result += '';
        } else {
          result += `Missing at least 1 capital letter. `;
          result += '\n';
        }
        
        if (regExpDig.test(currentValue)){
          result += '';
        } else {
          result += 'Missing at least 1 number. ';
          result += '\n';
        }

        if (regExpChar.test(currentValue)){
            result += '';
          } else {
            result += 'Missing at least 1 special character. ';
            result += '\n';
          }
        
        if (currentValue.length < 9){
          result += 'Password must be at least 8 characters. '
          result += '\n';
        } else {
          result += '';
        }

        passwordError.textContent = result;

      } else {
        passwordError.textContent = '';
        password.classList.remove('error');
    }
});

//confirms that the second password entry matches the first
passwordConf.addEventListener('input',function(event) {
    if(passwordConf.value!==password.value&&passwordConf.value!==''){
        passwordConfirmError.textContent="Password does not match. Re-enter password";
        passwordConf.classList.add('error');
    }
    else {
        passwordConf.classList.remove('error');
        passwordConfirmError.textContent = '';
    }
});
