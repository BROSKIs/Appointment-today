document.getElementById("theForm").onsubmit = validate;

function validate(){
    clearErrors();
    isValid = true;

    let fname = document.getElementById("fname").value.trim();
    if(!fname){
        isValid = false;
        document.getElementById("fname-error").style.display = "inline-block";
    }
    let lname = document.getElementById("lname").value.trim();
    if(!lname){
        isValid = false;
        document.getElementById("lname-error").style.display = "inline-block";
    }

    return isValid;
}

function clearErrors(){
    let errors = document.getElementsByClassName("err");
    for(let i=0; i<errors.length; i++){
        errors[i].style.display = "none";
    }
}