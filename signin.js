function todoappof()
  
{
console.log('todoappof')
valid= true;
var v= true;


const uname = document.getElementById('username');
const password = document.getElementById('pass');


if(uname.value.trim() === '') {
  valid = false;
   setErrorFor(uname, 'Username cannot be blank');
 } else if (uname.value.trim()!= "admin") {
   setErrorFor(uname, 'Not a valid username');
   valid = false;

 } 
 else {
   setSuccessFor(uname," ");
 }



// ########################################## Main Pass ###########################################################

 if(password.value.trim() === '') {
         setErrorFor(password, 'Password cannot be blank');
         valid = false;
 }
  else if(password.value.trim() === "12345"){
     setSuccessFor(password," ");
 }
 else{
         setErrorFor(password," Password not valid ");
         valid = false;
 }
 

 
// #####################################################################################################
if (v=valid){
  console.log('call delay')
  ;}
    return valid;
    
    
}

// ###################################### Fn for error mssg ###############################################################



    
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-check error';
  small.innerText = message;
}

function setSuccessFor(input,message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-check success';
  small.innerText = message;
    
}
