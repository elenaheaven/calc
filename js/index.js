const display = document.querySelector('.display');

document.querySelectorAll('.but')
    .forEach( el => el.addEventListener('click', Display )); 
   
document.querySelector('.clear')   
    .addEventListener('click', Clear);
    
document.querySelector('.equal')   
    .addEventListener('click', Calc); 
    
document.querySelector('.backspace')   
    .addEventListener('click', Back); 

//Виводить цифри на дисплей    
function Display(e) {
    const button = e.target;
    display.value += button.innerText;
}

//=  
function Calc() {
    let val = eval(display.value);
        if (val === Infinity, val === -Infinity ) {
        val = 'Do not divide by zero!';
         }
    display.value = val;
}

//С 
function Clear() {
    display.value = "";
}

//<=
function Back() {
    display.value = display.value.slice(0, -1);
}