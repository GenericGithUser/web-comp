//greet
function greet(){
    let name = "";
    if (confirm("Do you wish to remain anonyomous?")==true){
        document.getElementById('greet').innerHTML = "Welcome To My Site!";
    }
    else{
        name = prompt("Please Enter your Name (must no exceed 12 characters)");
        if (name.length >= 12){
            if(confirm("name exceeded 12 characters try again")==true){
                name = prompt("Please Enter your Name (must not exceed 12 characters)");
            }
            else{
                name = prompt("Please Enter your Name (must not exceed 12 characters)");
            }
            document.getElementById('name').innerHTML = name;
    
        }
        document.getElementById('name').innerHTML = name;
    
    }
    
}
greet()




//MOBILE NAVBAR
function nav(){
    let a = document.getElementById('navmob');
    if (a.style.maxHeight === 300 + "px"){
        a.style.maxHeight = 0 + "px";
    }
    else{
        a.style.maxHeight = 300 + "px";
    }
}