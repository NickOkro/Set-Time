// time update every second
let t = setInterval(timeUpdate,1000);

function timeUpdate(){
    let today = new Date();
    let time = today.getHours() + " : " + today.getMinutes();
    document.getElementById('box-header').innerHTML = time;
}

// time selection generation

    //hours
var numH;
var unselectedHours = document.getElementById('non-selected-hours');

for(let i = 0; i < 24; i++){
    if(i < 10){
        i = '0' + i;
    } else {
        i = i;
    }
    numH = document.createElement("DIV");
    numH.classList.add('non-selected-num');
    if(i == 1){
        numH.classList.add('highlighted-num');
    }
    numH.innerHTML = i;
    unselectedHours.appendChild(numH);
}

    // minutes
var numM;
var unselectedMinutes = document.getElementById('non-selected-minutes');    
for(let i = 0; i < 60; i++){
    if(i < 10){
        i = '0' + i;
    } else {
        i = i;
    }
    numM = document.createElement("DIV");
    numM.classList.add('non-selected-num');
    if(i == 1){
        numM.classList.add('highlighted-num');
    }
    numM.innerHTML = i;
    unselectedMinutes.appendChild(numM);
}
// time selection
let numHeight = 60;
let hIndex = 1;
let mIndex = 1;
let newSelectionH = hIndex;
let newSelectionM = mIndex;
selectionHours = document.getElementById('non-selected-hours').children;
selectionMinutes = document.getElementById('non-selected-minutes').children;
let scrollPosH = -numHeight * newSelectionH;
let scrollPosM = -numHeight * newSelectionM;
    // select hours on click
document.getElementById('non-selected-hours').addEventListener('click', function(e) {
    let target = e.target;   
    for(let i = 0; i < selectionHours.length; i++){
        if(target === selectionHours[i]){
            selectionHours[newSelectionH].classList.remove("highlighted-num");
            newSelectionH = i;
            console.log(newSelectionH);
            selectionHours[newSelectionH].classList.add("highlighted-num");
            scrollPosH = -numHeight * (newSelectionH - 1);
            document.getElementById('non-selected-hours').style.marginTop = scrollPosH + 'px';
            break
        }
    }
}, false);
    // select minutes on click
document.getElementById('non-selected-minutes').addEventListener('click', function(e) {
    let target = e.target;   
    for(let i = 0; i < selectionMinutes.length; i++){
        if(target === selectionMinutes[i]){
            selectionMinutes[newSelectionM].classList.remove("highlighted-num");
            newSelectionM = i;
            console.log(newSelectionM);
            selectionMinutes[newSelectionM].classList.add("highlighted-num");
            scrollPosM = -numHeight * (newSelectionM - 1);
            document.getElementById('non-selected-minutes').style.marginTop = scrollPosM + 'px';
            break
        }
    }
}, false);
// set time function
function setTime() {
    document.getElementById('selected-hours').innerHTML = selectionHours[newSelectionH].innerHTML;
    document.getElementById('selected-minutes').innerHTML = selectionMinutes[newSelectionM].innerHTML;
}

