function userchecker()
 {
    let user=document.getElementById("user").value;
    if (user.length<8) {
        document.getElementById("length").innerHTML=`<img src="ressource/cross.png" class="icon ">Username must be at least 8 caractere long`;
    }
    else {
        document.getElementById("length").innerHTML=`<img src="ressource/checked.png" class="icon ">Length > 8 `
    }
    if (user.charAt(0).toUpperCase()!=user.charAt(0)|| user.length==0 ) {
        document.getElementById("Majus").innerHTML=`<img src="ressource/cross.png" class="icon ">First caractere must be capital letters`;
    }
    else {
        document.getElementById("Majus").innerHTML=`<img src="ressource/checked.png" class="icon "> 1 letter is a capital `
    }
    if (user.indexOf(" ")!=-1) {
        document.getElementById("space").innerHTML=`<img src="ressource/cross.png" class="icon ">Username can't contain spaces`;
    } 
    else {
        document.getElementById("space").innerHTML=`<img src="ressource/checked.png" class="icon ">No spaces`
    }
    if ((user.length>=8) && (user.charAt(0).toUpperCase()==user.charAt(0)) && (user.indexOf(" ")==-1)) {    
        document.getElementById("error-name").classList.remove("show")
    }
    else {
        document.getElementById("error-name").classList.add("show")
        return 0;
    }
   
 }
function passchecker() {
    let pass=document.getElementById("pass").value
    document.getElementById("error-pass").style.display="block"
    if (pass.length<8) {
        document.getElementById("passlength").innerHTML=`<img src="ressource/cross.png" class="icon ">Password must be at least 8 caractere long`;
    }
    else {
        document.getElementById("passlength").innerHTML=`<img src="ressource/checked.png" class="icon "> Length > 8 `
    }
    if (pass.charAt(0)!=pass.charAt(0).toUpperCase()) {
        document.getElementById("passupper").innerHTML=`<img src="ressource/cross.png" class="icon ">Password must contain at least 1 capital letter`;
    }
    else {
        document.getElementById("passupper").innerHTML=`<img src="ressource/checked.png" class="icon "> Contain At least 1 capital letter`
    }
    if (pass.length>=8 && pass.charAt(0)==pass.charAt(0).toUpperCase()) {
        document.getElementById("error-pass").style.display="none"
        return 1;
    }
    else {
        return 0;
    }
    



}

function checker() {
    if (userchecker()==0 || passchecker()==0) {
        return false
    }
    else {
        return true
    }


}