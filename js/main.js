function hitung() {
    let angka1 = parseFloat(document.getElementById("angka1").value);
    let operator = document.getElementById("operator").value;
    let angka2 = parseFloat(document.getElementById("angka2").value);
    let hasil;
    switch (operator) {
        case "+":
            hasil = angka1 + angka2;
            break;
        case "-":
            hasil = angka1 - angka2;
            break;
        case "*":
            hasil = angka1 * angka2;
            break;
        case "/":
            hasil = angka1 / angka2;
            break;
    }
    document.getElementById("hasil").innerHTML = hasil;
}

