console.log("Cals js file is working!")
function calculate(){
console.log('Function calculate is work!')
const num1 = +document.querySelector("[name=num1]").value;
const num2 = +document.querySelector("[name=num2]").value;
const selectOperation = document.querySelector("[name=operation]").value
console.log('num1', num1)
console.log('num2', num2)
console.log("selectOperation", selectOperation)
let result;

if (selectOperation === "plus") {
	result = num1 + num2
} else if(selectOperation === "minus"){
	result = num1 - num2
} else if(selectOperation === "multiply"){
	result = num1 * num2
} else if(selectOperation === "divide"){
	result = num1 / num2
} else {
console.error("Error!!!");
alert("Error!")
}

document.querySelector('.calc-result').value = result
}



document.querySelector(".calc-calculate").addEventListener("click", function(){
	calculate();
} )


document.querySelector("[name=operation]").addEventListener("change", function(){
	calculate();
} )

document.querySelector("[name=num1]").addEventListener("input", function(){
	calculate();
} )

document.querySelector("[name=num2]").addEventListener("input", function(){
	calculate();
} )

