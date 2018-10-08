const display = document.querySelector('.display');

document.querySelectorAll('.but')
    .forEach( el => el.addEventListener('click', ddisplay )); 
   
document.querySelector('.clear')   
    .addEventListener('click', clear);
    
document.querySelector('.equal')   
    .addEventListener('click', calc); 
    
document.querySelector('.backspace')   
    .addEventListener('click', back); 

//Виводить цифри на дисплей    
function ddisplay(e) {
    const button = e.target;
    display.value += button.innerText;
}

//=  
function calc() {
    let val = eval(display.value);
        if (val === Infinity || val === -Infinity ) {
        val = 'Do not divide by zero!';
         }
    display.value = val;
}

//С 
function clear() {
    display.value = "";
}

//<=
function back() {
    display.value = display.value.slice(0, -1);
}