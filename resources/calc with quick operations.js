document.querySelector('.calc-calculate').addEventListener('click', function(){
	const num1 = +document.querySelector('[name="num1"]').value;
	const num2 = +document.querySelector('[name="num2"]').value;
	const op = document.querySelector('[name="op"]').value;

	let rezult;

	if (op === 'plus') {
		rezult = num1 + num2;
	} else if (op === 'minus'){
		rezult = num1 - num2;
	}else if (op === 'multiply'){
		rezult = num1 * num2;
	}else if (op === 'divide'){
		rezult = num1 / num2;
	} else {
		console.error('Wrong op!');
		alert('Wrong operation is selected');
	}


	document.querySelector('.calc-result').value = rezult;
});