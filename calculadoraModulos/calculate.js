export function calculate() {
    const resultInput = document.querySelector("#result")
    resultInput.value = 'ERROR';
    resultInput.classList.add('error');
    const result = eval(input.value);
    resultInput.value = result;
    resultInput.classList.remove('error');   
}

export function clear() {
    input.value = '';
    input.focus();
}

export function keyDown(ev) {
    ev.preventDefault();
    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key;
        return;
    }
    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0,-1);
    }
    if (ev.key === 'Enter') {
        calculate();
    }
}