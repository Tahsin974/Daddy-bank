// add button handler
document.getElementById('submit-button').addEventListener('click',
function(){

    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;


    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;


    // check email and password
    if(userEmail == 'sontan@gmail.com'&& userPassword == 'secretpad'){
        console.log('user valid');
        document.body.style.backgroundColor = 'white'
        window.location.href="banking.html";
        
    }
    else{
        document.body.style.backgroundColor = 'red'
        
    }
    
})