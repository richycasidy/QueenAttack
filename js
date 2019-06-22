 /* Some Rules
If CLICK 1 & CLICK 2 SHARE A CLASS of horizontal, vertical, diag.1 or diag. 2, alert(checkmate) when the 
button is pressed - do not alert if they share the class of red or black
On CLICK, let the Queen image be appended.
A different button should check if they can attack each other & another to refresh*/


// Queen icons
const blackQueen = '&#9819;';
const redQueen = '&#9813;';
// Array to keep store selected tile css classes;
let boxClass = [];
// Select all black buttons
let blacks = document.querySelectorAll('button.black');
// Select all red buttons
let reds = document.querySelectorAll('button.red');
// Select action buttons
const attackButton = document.querySelector('#attack');
const refreshButton = document.querySelector('#refresh');
// Track the number of queens placed on board
let queenCount = 0;

// Display queen icon on selected button
function showQueen(buttons) {
    // Loop through all same colored 
    buttons.forEach((item, index) => {
        item.addEventListener('click', () => { 
            if (queenCount < 2) { 
                if (queenCount == 0) {
                    item.innerHTML = blackQueen;
                    boxClass.push(item.classList);
                    queenCount++;
                } else {
                    item.innerHTML = redQueen;
                    boxClass.push(item.classList);
                    queenCount++;
                }
            }
        });
    });
}
// Instantiate the function to place queens on board
showQueen(blacks);
showQueen(reds);

// Show the checkmate direction when attack button is pressed
attackButton.addEventListener('click', () => {
    if(queenCount == 0) {
        alert('Please make moves first');
    }else if(queenCount == 1) {
        alert('Please move the opponent queen');
    }else {
        // Check match directions
        if(boxClass[0][1] === boxClass[1][1]) {
            alert('Horizontal checkmate');
        }else if (boxClass[0][2] === boxClass[1][2]) {
            alert('Vertical checkmate');
        }else if (boxClass[0][3] === boxClass[1][3]) {
            alert('Diagonal checkmate');
        }else if (boxClass[0][4] === boxClass[1][4]) {
            alert('Diagonal checkmate');
        }
        else{
            alert('No checkmate');
        }
    }
});

// Refresh the board
refreshButton.addEventListener('click', () => {
    window.location.reload();
});
