function even() {
    const a = prompt(`which number do you want to print? 1) even 2) odd.`);
    if (a == "1") {
        let limit = parseInt(prompt(`how much do you want to print even numbers?`));
        for (i = 0; i <= limit; i += 2) {
            document.write(`<center><h1>${i}<br></h1></center>`);
        }
    }
    else if (a == "2") {
        let limit = parseInt(prompt(`how much do you want to print odd numbers?`));
        for (j = 1; j <= limit; j += 2) {
            document.write(`<center><h1><br>${j}</br></h1></center>`);
        }
    }
    else{
        alert(`invalid input! try later.`);
    }
}



function divide() {
    var a = prompt("enter first number to divide");
    var b = prompt("enter second number to divide with");
    if (isFinite(a / b)) {
        alert(`value is approx ${a / b}`);
    }
    else {
        alert(`division is not possible due to infinite value,try later!`);
    }
}