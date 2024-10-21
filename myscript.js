function validateForm()
{
    const name=document.getElementById("name").value;
    const address=document.getElementById("address").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const subject=document.getElementById("subject").value;
    const agree=document.getElementById("agree").checked;



    const nameError=document.getElementById("name-error");
    const addressError=document.getElementById("address-error");
    const emailError=document.getElementById("email-error");
    const passwordError=document.getElementById("password-error");
    const subjectError=document.getElementById("subject-error");
    const agreeError=document.getElementById("agree-error");

    nameError.textContent="";
    addressError.textContent="";
    emailError.textContent="";
    passwordError.textContent="";
    subjectError.textContent="";
    agreeError.textContent="";


    let isValid=true;

   if(name === "" || /\d/.test(name))
   {
    nameError.textContent="Please enter your name properly";
    isValid=false;
   }

   if(address === "")
    {
     addressError.textContent="Please enter your address";
     isValid=false;
    }

    if(email === ""|| !email.includes("@") )
    {
     emailError.textContent="Please enter a valid email id";
     isValid=false;
    }

    if(password === ""|| password.length < 8 )
    {
        passwordError.textContent="Please enter a password with atleast 8 charcters";
        isValid=false;
    }
    if(subject === "" )
    {
        subjectError.textContent="Please enter your course.";
        isValid=false;
    }

    if(!agree)
    {
        agreeError.textContent="Please agree to the above information";
        isValid=false;
    }


    return isValid;

}


function loginCheck()
{
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;

    const emailError=document.getElementById("email-error");
    const passwordError=document.getElementById("password-error");

    emailError.textContent="";
    password.textContent="";

    
    let isValid=true;

    if(email === "" || !email.includes("@"))
    {
        emailError.textContent="Provide a valid email id.";
        isValid=false;
    }

    if(password ==="" || password.length < 8)
    {
        passwordError.textContent="Enter a valid password.";
        isValid=false;
    }

    return isValid;

}