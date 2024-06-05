let thesolve = document.getElementById("thesolve");
let putnum = document.getElementById("putnum");

function solver() {

    let nums = putnum.value;
    let ar = [...nums];
    let seen = new Set();
    let mainNums = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let output = document.createElement('div');
    output.id = 'output';
    output.innerHTML = '<button id="close-btn" title="Close Button" onclick="closeDialog()">✖</button>'
    let solvecon = document.createElement('div');
    solvecon.id = 'solvecon';

    for (var i = 0; i < ar.length; i++) {
        if (seen.has(ar[i])) {
            continue;
        }
        seen.add(ar[i]);
    }
    
    for (let j = 0; j < mainNums.length; j++) {
        if (!seen.has(mainNums[j])) {
            solvecon.innerHTML += '<p id="solves">' + mainNums[j] + '</p>';
        }
    }


    output.appendChild(solvecon)
    document.body.appendChild(output)
}

function closeDialog() {
    output.remove()
  }
putnum.addEventListener('keypress',  function (e) {
    if (e.key === 'Enter') {
      solver();
    }})

