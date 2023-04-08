let namee = prompt("Enter your name");
let int = prompt("Enter a number that you wanna convert");

document.getElementById("usr").innerHTML= namee;
document.getElementById("num").innerHTML= int;

let c=con1();
function con1(){
    let CtoF = parseInt(int) * 9 / 5 + 32;
    return document.getElementById("cel").innerHTML = CtoF; CtoF;
}
let d=con2();
function con2(){
    let FtoC = (parseInt(int) - 32) * 5 / 9;
    return document.getElementById("far").innerHTML = FtoC; FtoC;
}
con1();
con2();
