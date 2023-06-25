let count1 = 0;
let count2 = 0;
var button1;
var button1;
const experiments = [];

function updateVariables() {
    button1 = document.getElementById("button-1").innerHTML;
    button2 = document.getElementById("button-2").innerHTML; //update the global variable
}

function firstCounter() {
    count1++;
    document.getElementById('counter-1').innerHTML = count1;
}

function secondCounter() {
    count2++;
    document.getElementById('counter-2').innerHTML = count2;
}

function changeMenu() {
    var select = document.getElementById('selector').value;
    console.log(select);

    if (select === "Maturity") {
        document.getElementById('button1').innerHTML = "Adult";
        document.getElementById('button2').innerHTML = "Juvenile";
        document.getElementById('counter-1').innerHTML = 0;
        document.getElementById('counter-2').innerHTML = 0;

    } else if (select === "Sex") {
        document.getElementById('button1').innerHTML = "Male";
        document.getElementById('button2').innerHTML = "Hermaphrodite";
        document.getElementById('counter-1').innerHTML = 0;
        document.getElementById('counter-2').innerHTML = 0;
    } else if (select === "Coordination") {
        document.getElementById('button1').innerHTML = "Coordinated";
        document.getElementById('button2').innerHTML = "Coordinated";
        document.getElementById('counter-1').innerHTML = 0;
        document.getElementById('counter-2').innerHTML = 0;
    } else if (select === "Mutant") {
        document.getElementById('button1').innerHTML = "Nominal";
        document.getElementById('button2').innerHTML = "Mutant";
        document.getElementById('counter-1').innerHTML = 0;
        document.getElementById('counter-2').innerHTML = 0;
    }
}

function reset() {
    document.getElementById('counter-1').innerHTML = 0;
    document.getElementById('counter-2').innerHTML = 0;
    count1 = 0;
    count2 = 0;
}

function done() {
    var name = document.getElementById('experiment').innerHTML
    var Dish = document.getElementById('Petri-Dish').innerHTML
    var count1 = document.getElementById('counter-1').innerHTML
    var count2 = document.getElementById('counter-2').innerHTML
    debugger

    button1 = document.getElementById('button-1').innerHTML
    button2 = document.getElementById('button-2').innerHTML
    debugger
    let result = name + ' ' + Dish + ' ' + button1 + ': ' + count1 + ' ' + button2 + ': ' + count2

    experiments.push(result)
    document.getElementById('result').innerHTML = experiments
    debugger
    reset()
    debugger
}