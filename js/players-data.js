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

