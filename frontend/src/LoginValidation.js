function validation(values){

    let error = {};
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
    return error;

}
export default validation;
