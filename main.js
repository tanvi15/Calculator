let display = document.getElementById('display');
buttons = document.querySelectorAll('button');
let displayValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'x') {
            buttonText = '*';
            displayValue += buttonText;
            display.value = displayValue;
        }
        else if (buttonText == 'C') {
            displayValue = "";
            display.value = displayValue;
        }
        else if (buttonText == 'DEL') {
            display.value = display.value.slice(0, -1);
        }
        else if (buttonText == '=') {
            try {
                display.value = eval(displayValue);
            } catch (err) {
                alert("Invalid");
            }

        }
        else {
            displayValue += buttonText;
            display.value = displayValue;
        }
    })
}