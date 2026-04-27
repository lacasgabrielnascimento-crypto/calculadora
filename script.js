const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
    btn.addEventListener('click', () => handleInput(btn.innerText));
});

fuction handleInput(value) {
    if (value === 'C') {
      display.innerText = '0';
    } else if (value ==='=') {
      try{
        display.innerText = eval(display.innerText
        
        )
    }   
    }

      )
}