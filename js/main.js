function calculator() {
    var str = document.getElementById('calc_input').value
    var size = str.length;
    var num1 = ``
    var num2 = ``
    var symbol = ``
    var x = 0
    for (var i = 0; i < size; i++) {
        if ((str.substr(i, 1) != '+') && (str.substr(i, 1) != '-') && (str.substr(i, 1) != 'x') && (str.substr(i, 1) != '/')) {
            num1 += str.substr(x, 1);
            x++
        }
        else {
            x = str.length
            symbol = str.substr(i, 1);
            num2 += str.substr(i + 1)
        }
    }

    function sum(n1, n2) {
        document.getElementById('calc_input').value = n1 + n2;
    }
    function subtract(n1, n2) {
        document.getElementById('calc_input').value = n1 - n2;
    }
    function multiply(n1, n2) {
        document.getElementById('calc_input').value = n1 * n2;
    }
    function division(n1, n2) {
        document.getElementById('calc_input').value = n1 / n2;
    }

    switch (symbol) {
        case '+':
            sum(Number(num1), Number(num2));
            break;
        case '-':
            subtract(Number(num1), Number(num2));
            break;
        case 'x':
            multiply(Number(num1), Number(num2))
            break;
        case '/':
            division(Number(num1), Number(num2));
            break;
    }

}