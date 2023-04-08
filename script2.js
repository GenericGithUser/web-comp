
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

// function expand(){
//     document.getElementById('test').style.maxHeight= 400 +"px";
// }
// function collapse(){
//     document.getElementById('test').style.maxHeight= 0 +"px";
// }