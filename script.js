function plus() {
    let x = document.getElementById("numb1").value;
    let y = document.getElementById("numb2").value;

    let plus = parseInt(x) + parseInt(y);
    // alert(plus);
    document.getElementById("result").value = plus
}

function minus() {
    let x = document.getElementById("numb1").value;
    let y = document.getElementById("numb2").value;

    let minus = parseInt(x) - parseInt(y);
    // alert(minus);
    document.getElementById("result").value = minus
}

function times() {
    let x = document.getElementById("numb1").value;
    let y = document.getElementById("numb2").value;

    let times = parseInt(x) * parseInt(y);
    // alert(times);
    document.getElementById("result").value = times
}

function devide() {
    let x = document.getElementById("numb1").value;
    let y = document.getElementById("numb2").value;

    let devide = parseInt(x) / parseInt(y);
    // alert(devide);
    document.getElementById("result").value = devide
}