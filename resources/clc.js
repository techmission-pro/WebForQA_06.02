document.querySelector('.clc-clct').addEventListener('click', function(){
    const num1 = document.querySelector('[name="num1"]').value;
    const num2 = document.querySelector('[name="num2"]').value;
    const opr = document.querySelector('[name="opr"]').value;

    let rslt;
    if(opr === 'plus'){
        rslt = parseInt(num1) + parseInt(num2);
    } else if(opr === 'minus'){
        rslt = parseInt(num1) - parseInt(num2);
    } else if(opr === 'multiply'){
        rslt = parseInt(num1) * parseInt(num2);
    } else if(opr === 'divide'){
        rslt = parseInt(num1) / parseInt(num2);
    } else {
        console.error('Smthng wrng');
        alert('Wrong operation is selected');
    }
    document.querySelector('.clc-rslt').value = rslt;
});