function avmxmn(){
    let a = document.getElementById('num').value;
    let spl = a.split(' ').map(Number);
    let b = 0;
    for (let i=0; i < spl.length; i++){
       b += spl[i]
    }
    let c = Math.floor(b / spl.length);
    document.getElementById('nua').innerHTML = spl.toString();
    document.getElementById('avg').innerHTML = c;
    document.getElementById('mx').innerHTML = Math.max(...spl);
    document.getElementById('mn').innerHTML = Math.min(...spl);
   
}