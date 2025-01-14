function computer() {
    //generate random number from 0 to 2
    return Math.floor(Math.random() * 10) % 3 // return  a number as 1 --> rock
    // 2 --> paper
    // 3 --> scissor
}

function player() {
    while (true) {
        let choice = prompt('rock, paper or scissor ');

        //swap the player choice to a number  
        if (choice.toLowerCase() === 'rock') {
            return 0; // 0 means rock
        } else if (choice.toLowerCase() === 'paper') {
            return 1; // 1 means paper
        } else if (choice.toLowerCase() === 'scissor') {
            return 2 // 2 means scissor
        } else {
            console.warn('your choice is not correct') // this for tell the player is writing
            // a wrong choice  and keeping the loop turned.
        }
    }

}

function playground(player, comp) {
    // here I made the game tell who's the winner or if there is a tie
    if (player === comp) {
        return 'Tie';
    } else if (player === 0 && comp === 3) {
        return 'player';
    } else if (player === 3 && comp === 0) {
        return 'comp'
    } else if (player > comp) {
        return 'player'
    } else if (player < comp) {
        return 'comp'
    }


}

let compScore = 0;
let playerScore = 0;
for (let i = 0; i < 5; i++) {
    //the game of 5 rounds
    let winner = playground(player(), computer());
    if (winner === 'Tie') { // this for tie
        compScore++;
        playerScore++;
    } else if (winner === 'player') { // point for player
        playerScore++;
    } else if (winner === 'comp') { // point for computer
        compScore++;
    }
    console.log(`Player: ${playerScore} - Computer: ${compScore}`) // print the score 
}