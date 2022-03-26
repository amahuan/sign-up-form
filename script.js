const avatarSelection=document.getElementById('avatarSelection');
const buttons=document.querySelectorAll('input[type="radio"]');
const customAvatarSelection=document.getElementById("custom");
const fileUpload=document.querySelector('input[type="file"]');
const alias=document.getElementById('alias');
const emalil=document.getElementById('email');
const phone=document.getElementById('phone');
const password=document.getElementById('password');
const passwordConf=document.getElementById('passwordConfirmation');

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
 
 fileUpload.addEventListener("change", function (event) {
 if(document.getElementById("avatar").value != "") {
     customAvatarSelection.src="images/old-guard-ava.jpg";
     avatarSelection.innerHTML="YOU HAVE SELECTED: <b>ANDROMACHE</b>";
     document.getElementById('your-own').checked=true;
 }
});

// const radioButtons = document.querySelectorAll('input[name="size"]');
//         btn.addEventListener("click", () => {
//             let selectedSize;
//             for (const radioButton of radioButtons) {
//                 if (radioButton.checked) {
//                     selectedSize = radioButton.value;
//                     break;
//                 }
//             }

// if(document.getElementById('neo').checked){
//     avatarSelection.innerHTML="YOU HAVE SELECTED: <em>NEO</em>";
// }
// else if(document.getElementById('trinity').checked){
//     avatarSelection.textContent+="TRINITY";
// }
// else if(document.getElementById('morpheus').checked){
//     avatarSelection.textContent+="MORPHEUS";
// }
// else if (document.getElementById('agents').checked){
//     avatarSelection.textContent+="AGENT SMITH";
// }
