const input = document.getElementById('input')

function append(number) {
    input.value += number;
}
function calculate() {
    try {
    input.value = eval(input.value);
    } catch(error) {
        input.value = input.value
    }
}
function clearDisplay() {
    input.value = '';
}
