




function validate(){
    var name = document.getElementById("username").value;
    var email = document.getElementById("form3Example3").value;
    var password = document.getElementById("formTextExample2").value;
    var confirmPassword = document.getElementById("confirmpass").value;
    var errorMassage = document.getElementById("error");


errorMassage.style.color="#fff";
errorMassage.style.textAlign="center";
errorMassage.style.backgroundColor="red";
errorMassage.style.padding="10px";
errorMassage.style.transition="all 1s ease";
errorMassage.style.marginBottom="20px"

    if(name==""&& email==""&& password==""&& confirmPassword==""){
        errorMassage.innerHTML="Please Enter Data";
        return false;
    }else if (name.length<5 || name.length>15){
        errorMassage.innerHTML="Please Enter 5-15 Character In User Name";
        return false;
    }else if (email.indexOf("@")=="-1"){
        errorMassage.innerHTML="Please Enter Valid E-mail";
        return false;
    }else if(password.length<=8){
        errorMassage.innerHTML="Please Enter AtLeast 8Character";
        return false;
    }else if(password != confirmPassword){
        errorMassage.innerHTML="Please Matching Password";
        return false;
    }else{
        return true;
    }
}