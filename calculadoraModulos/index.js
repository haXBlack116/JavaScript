const main = document.querySelector('main');
const root = document.querySelector(':root');
const input = document.getElementById('input');
const resultInput = document.getElementById('result');
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];
import {calculate, clear, keyDown} from "./calculate.js";
import copyToClipBoard from "./copyToClipBoard.js";
import switchTheme from "./switchTheme.js";

document.querySelectorAll('.charKey').forEach(function(charKeyBtn) {
    charKeyBtn.addEventListener('click', function() {
        const value = charKeyBtn.dataset.value;
        input.value += value;
    })
})

document.getElementById('clear').addEventListener('click', clear)
input.addEventListener('keydown', keyDown)
document.getElementById('equal').addEventListener('click', calculate);
document.getElementById('copyToClipboard').addEventListener('click', copyToClipBoard)
document.getElementById('themeSwitcher').addEventListener('click', switchTheme)
