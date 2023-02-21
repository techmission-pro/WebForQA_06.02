const input1 = document.querySelector('.fieldInput1');
const input2 = document.querySelector('.fieldInput2');
const operations = document.querySelector('.calc-op');
const result = document.querySelector('.fieldResult1');
const buttonResult = document.querySelector('.buttResult1');

function calculate () {   
const num1 = +input1.value;
const num2 = +input2.value;
const op = operations.value;

switch(op){
	
	case 'plus':
	result.value = num1 + num2;
	console.log("plus");
	break;
	
	case 'minus':
	result.value = num1 - num2;
	console.log("minus");
	break;
	
	case 'multiply':
	result.value = num1 * num2;
	console.log("multiply");
	break;
	
	case 'divede':
	if(input2.value==0){
		result.value = "Eror";
		alert("Error")
		break
	}else
		result.value = num1 / num2;
		console.log("divede");
		break;
	
}}

function onlyNumber(input){
	let val=input.value.replace(/\D/g,'');
	input.value=val;
};

	input1.addEventListener('input', function(){
	calculate();
});

	input2.addEventListener('input', function(){
	calculate();
});

operations.addEventListener('change', function(){
	calculate();
});

buttonResult.addEventListener('click', function(){
	calculate();
});

input1.oninput = function(){
	onlyNumber(this);
}

input2.oninput = function(){
	onlyNumber(this);
}

