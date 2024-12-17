function Validation(values){
    let error ={}
    if (values.username ===""){
        error.username ="username cannot be empty";
    }
    else if (values.username.length<3 ){
        error.username = "username must contain atleast 3 characters"
    }
    else {
        error.username =""
    }
    if(values.email ===""){
        error.email = "Email should not be empty";
       
    }
     else{
         error.email =""
     }

    if(values.password ===""){
        error.password = "Password should not be empty";
    }
    else if (values.password.length < 8){
        error.password = "Password must be at least 8 characters";
    }
    else{
         error.password =""
    }
    if(values.repeatpassword ===""){
       error.repeatpassword = "You must Repeat Password";
    }
    else if (values.repeatpassword!== values.password){
        error.repeatpassword = "Passwords do not match";
    }
    else{
         error.repeatpassword =""
    }
    return error;

}
export default Validation;