
function plus() {
    let x = document.getElementById("numb1").value;
    let y = document.getElementById("numb2").value;

    let plus = parseInt(x) + parseInt(y);
    plus.onclick = result;
}

function result () {
    document.getElementById("result").innerHTML = 
}

// function plus() {
//     let plus = document.getElementById("numb1").value;
//     alert(plus);
// }