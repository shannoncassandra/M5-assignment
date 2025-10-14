function rockPaperScissors() {
    let rpsYou = prompt('Pick rock, paper, or scissors!')
    let rpsComp = (Math.floor(Math.random() * 3) + 1) 
    
    if (rpsComp === 1) {
        rpsComp = 'rock'
    } else if (rpsComp === 2) {
        rpsComp = 'paper'
    } else if (rpsComp === 3) {
        rpsComp = 'scissors'
    } else {
        console.log('That is not an option!')
    }

    if (rpsComp === rpsYou) {
        console.log(`We tied! You picked ${rpsYou} and I picked ${rpsComp}`)
    } else if (rpsComp === 'scissors' && rpsYou === 'rock') {
        console.log(`You win! You picked ${rpsYou} and I picked ${rpsComp}`)
    } else if (rpsComp === 'scissors' && rpsYou === 'paper') {
        console.log(`You lose! You picked ${rpsYou} and I picked ${rpsComp}`)
    } else if (rpsComp === 'paper' && rpsYou === 'rock') {
        console.log(`You lose! You picked ${rpsYou} and I picked ${rpsComp}`)
    } else if (rpsComp === 'paper' && rpsYou === 'scissors') {
        console.log(`You win! You picked ${rpsYou} and I picked ${rpsComp}`)
    } else if (rpsComp === 'rock' && rpsYou === 'paper') {
        console.log(`You win! You picked ${rpsYou} and I picked ${rpsComp}`)
    } else if (rpsComp === 'rock' && rpsYou === 'scissors') {
        console.log(`You lose! You picked ${rpsYou} and I picked ${rpsComp}`)
    } else {
        console.log('That is not an option!')
    }
}
rockPaperScissors()