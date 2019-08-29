var output = document.getElementById("result");

function calculate(number) {
    var keyIn = number.innerHTML;
    if (keyIn == "=") {
        output.innerHTML = eval(output.innerHTML);
    } else if (keyIn == "C") {
        output.innerHTML = 0;
    } else {
        if (output.innerHTML == "0") {
            if ((keyIn == ".") || (keyIn > 0)) {
                output.innerHTML = keyIn;
            }
        } else {

            if (!isNaN(keyIn)) {
                output.innerHTML += keyIn;
            } else {
                if (!isNaN(output.innerHTML.charAt(output.innerHTML.length - 1))) {
                    output.innerHTML += keyIn;
                } else {
                    output.innerHTML = output.innerHTML.slice(0, output.innerHTML.length - 1) + keyIn;
                }
            }
        }
    }
}



