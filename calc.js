function solve(value) {
    var display = document.getElementById('display');

    if (value === '=') {
        try {
            
            let expression = display.value.replace(/\^/g, '**');
            
            display.value = eval(expression);
        } catch (error) {
            display.value = 'Error';
        }
    } else if (value === '<-') {
        Back();
    } else if (value === 'sq') {
        try {
            let currentValue = parseFloat(display.value);
            display.value = currentValue*currentValue;
        } catch (error) {
            display.value = 'Error';
        }
    } else {
        display.value += value;
    }
}

function cleardisplay() {
    document.getElementById('display').value = '';
}

function Back() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}