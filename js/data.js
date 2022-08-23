// function getPlayersNamesById(playerNameId) {
//     const playerName = document.getElementById(playerNameId);
//     playerName = playerNameElement.innerText;


//     const playersListElement = document.getElementById('players-list');
//     const li = document.createElement('li');
//     li.innerText = playerName;
//     playersListElement.appendChild(li);
//     // return li;
// }

let count = 0;


document.getElementById('p1-button').addEventListener('click', function () {

    if (count >= 5) {
        alert("cannot add more");
        return;

    }
    count++;
    const playerNameElement = document.getElementById('p1-name');
    playerName = playerNameElement.innerText;


    const playersListElement = document.getElementById('players-list');
    const li = document.createElement('li');
    li.innerText = playerName;
    playersListElement.appendChild(li);
    document.getElementById('p1-button').disabled = true;
})

document.getElementById('p2-button').addEventListener('click', function () {

    if (count >= 5) {
        alert("cannot add more");
        return;
    }
    count++;
    const playerNameElement = document.getElementById('p2-name');
    playerName = playerNameElement.innerText;


    const playersListElement = document.getElementById('players-list');
    const li = document.createElement('li');
    li.innerText = playerName;
    playersListElement.appendChild(li);
    document.getElementById('p2-button').disabled = true;
})

document.getElementById('p3-button').addEventListener('click', function () {

    if (count >= 5) {
        alert("cannot add more");
        return;
    }
    count++;
    const playerNameElement = document.getElementById('p3-name');
    playerName = playerNameElement.innerText;


    const playersListElement = document.getElementById('players-list');
    const li = document.createElement('li');
    li.innerText = playerName;
    playersListElement.appendChild(li);
    document.getElementById('p3-button').disabled = true;
})

document.getElementById('p4-button').addEventListener('click', function () {

    if (count >= 5) {
        alert("cannot add more");
        return;
    }
    count++;
    const playerNameElement = document.getElementById('p4-name');
    playerName = playerNameElement.innerText;


    const playersListElement = document.getElementById('players-list');
    const li = document.createElement('li');
    li.innerText = playerName;
    playersListElement.appendChild(li);
    document.getElementById('p4-button').disabled = true;
})

document.getElementById('p5-button').addEventListener('click', function () {

    if (count >= 5) {
        alert("cannot add more");
        return;
    }
    count++;
    const playerNameElement = document.getElementById('p5-name');
    playerName = playerNameElement.innerText;


    const playersListElement = document.getElementById('players-list');
    const li = document.createElement('li');
    li.innerText = playerName;
    playersListElement.appendChild(li);
    document.getElementById('p5-button').disabled = true;
})

document.getElementById('p6-button').addEventListener('click', function () {

    if (count >= 5) {
        alert("cannot add more");
        return;
    }
    count++;
    const playerNameElement = document.getElementById('p6-name');
    playerName = playerNameElement.innerText;


    const playersListElement = document.getElementById('players-list');
    const li = document.createElement('li');
    li.innerText = playerName;
    playersListElement.appendChild(li);
    document.getElementById('p6-button').disabled = true;
})

let currentPlayerExp = 0;
document.getElementById('calculate-button').addEventListener('click', function () {
    const perPlayerInputField = document.getElementById('per-playerInputField');
    const perPlayerInputString = perPlayerInputField.value;
    const perPlayerInput = parseInt(perPlayerInputString);

    const perPlayerCalc = perPlayerInput * count;

    const playerExpensesElement = document.getElementById('player-expense');
    const previousPlayerExpenseString = playerExpensesElement.innerText;
    const previousPlayerExpense = parseInt(previousPlayerExpenseString);
    const currentPlayerExpense = previousPlayerExpense + perPlayerCalc;
    playerExpensesElement.innerText = currentPlayerExpense;
    currentPlayerExp = currentPlayerExpense;
})


document.getElementById('calc-total-button').addEventListener('click', function () {
    const managerField = document.getElementById('manager-field');
    const managerInputString = managerField.value;
    const managerInput = parseInt(managerInputString);
    console.log(managerInput);
    const coachField = document.getElementById('coach-field');
    const coachInputString = coachField.value;
    const coachInput = parseInt(coachInputString);
    console.log(coachInput);
    const totalCalc = parseInt(currentPlayerExp) + managerInput + coachInput;

    const inTotalElement = document.getElementById('total');
    const previousInTotalString = inTotalElement.innerText;
    const previousInTotal = parseInt(previousInTotalString);
    const currentInTotal = totalCalc + previousInTotal;
    inTotalElement.innerText = currentInTotal;
})

