//business Logic
function celsiusTofah(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitTocel(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

//user interface logic
const celsius = prompt("Enter celsius");
const fahrenheit = prompt("Enter fahrenheit");

window.alert('The result of function fah: ' + celsiusTofah(celsius) + '.\n' +
    'The result of function cel: ' + fahrenheitTocel(fahrenheit).toFixed(2) + '.');
