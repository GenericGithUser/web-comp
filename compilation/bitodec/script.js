let usr = prompt("Please type your name:");
let num = prompt("Enter a decimal number");
let ans = '';

if (num < 1){
	confirm("Number is a negative please try again")
}
else{
	dectobi(num);
	function dectobi(val){
		let conv ='';
		while (val > 0){
			conv += (val%2);
			val = Math.floor(val/2);
		}
		return ans = conv;
	}

	document.write('<div class="header"><h1>Decimal to Binary converter</h1></div>')
	document.write('<div class="main"><h2>Hello '+'<span class="emp">' +usr +'</span>' +',you have inputed '
	+'<span class=emp>' +num +'</span>' +', and its equivalent to binary is '+'<span class="emp">' +ans +'</span>' +'</h2>');
	
}



