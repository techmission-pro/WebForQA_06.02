document.querySelector('.clc-clct').addEventListener('click', function(){
    const num1 = document.querySelector('[name="num1"]').value;
    const num2 = document.querySelector('[name="num2"]').value;
    const sum = parseInt(num1) + parseInt(num2);
    document.querySelector('.clc-rslt').value = sum;
});