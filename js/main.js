let playerAttack
let oponnetAttack 
let playerLife = 3
let oponnetLife = 3
let winMessage = 'You win'
let loseMessage = 'You lose'

function startGame() {
    let sectionStart = document.getElementById('decide-attack')
    sectionStart.style.display = 'none'

    let sectionRestart = document.getElementById('restart')
    sectionRestart.style.display = 'none'

    let buttonPetsPlayer = document.getElementById('pets-button')
    buttonPetsPlayer.addEventListener('click', selectPlayerPet)   
    let buttonFire =document.getElementById('fire-button')
    buttonFire.addEventListener('click', fireAttack)
    let buttonWater =document.getElementById('water-button')
    buttonWater.addEventListener('click', waterAttack)
    let buttonGround =document.getElementById('ground-button')
    buttonGround.addEventListener('click', groundAttack)

    let restartButton = document.getElementById('restart')
    restartButton.addEventListener('click', restartGame)


}

function selectPlayerPet() {
    let sectionPet = document.getElementById('decide-pet')
    sectionPet.style.display = 'none'

    let sectionStart = document.getElementById('decide-attack')
    sectionStart.style.display = 'block'
    let inputShirov =document.getElementById('Shirov')
    let inputKarpov =document.getElementById('Karpov')
    let inputAnand =document.getElementById('Anand')
    let spanPlayersPet =document.getElementById('players-pet')


    if (inputShirov.checked) {
        spanPlayersPet.innerHTML = " Shirov "
    }  else if (inputKarpov.checked) {
        spanPlayersPet.innerHTML = " Karpov "
    }  else if (inputAnand.checked) {
        spanPlayersPet.innerHTML = " Anand "
    }
     else {
        alert('Tienes que seleccionar alguna mascota')
     }
     OponnetPet()
}

function OponnetPet(){
    let randomAttack = random(1, 3)
    let spanOponnetsPet = document.getElementById('opponents-pet')

    if (randomAttack == 1) {
        spanOponnetsPet.innerHTML = " Shirov "
    }   else if (randomAttack == 2) {
            spanOponnetsPet.innerHTML = " Karpov "
        }   else {
                spanOponnetsPet.innerHTML = " Anand "
        }
}

function fireAttack() {
    playerAttack = 'fire'
    randomAttackOpponent()
}

function waterAttack() {
    playerAttack = 'water'
    randomAttackOpponent()
}

function groundAttack() {
    playerAttack = 'ground'
    randomAttackOpponent()
}

function createMessage() {
    let sectionMessage = document.getElementById('message')
    let message = document.createElement('p')
    message.innerHTML = `your pet attacked with ${playerAttack} & opponet's pet attacked with ${oponnetAttack}- The result is:  ${combat()}`  
    sectionMessage.appendChild(message)

}

function createFinalMessage(finalResult) {
    let sectionMessage = document.getElementById('message')
    let message = document.createElement('p')
    message.innerHTML = finalResult
    sectionMessage.appendChild(message)

     
    let buttonFire =document.getElementById('fire-button')
    buttonFire.disabled = true
    let buttonWater =document.getElementById('water-button')
    buttonWater.disabled = true
    let buttonGround =document.getElementById('ground-button')
    buttonGround.disabled = true

    let sectionRestart = document.getElementById('restart')
    sectionRestart.style.display = 'block'

}


function randomAttackOpponent() {
    let randomAttack = random(1, 3)
    if (randomAttack == 1) {
        oponnetAttack = 'fire'
    }   else if (randomAttack == 2) {
            oponnetAttack = 'water'
        }   else {
                oponnetAttack = 'ground'
        }
    createMessage()     
}

function combat() {
    let spanOponnetPet = document.getElementById('opponentLife')
    let spanPlayersPet = document.getElementById('playerLife')
    

    if (playerLife < 1 || oponnetLife < 1) {
        reviewLife()
    }
    if (playerAttack == oponnetAttack) {
        return 'Draw'
        
    }   else if (playerAttack == 'fire' && oponnetAttack == 'ground') {
            oponnetLife--
            spanOponnetPet.innerHTML = oponnetLife
            return winMessage
            }   else if (playerAttack == 'water' && oponnetAttack == 'fire') {
                    oponnetLife--
                    spanOponnetPet.innerHTML = oponnetLife
                    return winMessage


                    } else if (playerAttack == 'ground' && oponnetAttack == 'water') {
                        oponnetLife--
                        spanOponnetPet.innerHTML = oponnetLife
                        return winMessage

                        } else {
                            playerLife--
                            spanPlayersPet.innerHTML = playerLife
                            return loseMessage
                        }
}



function reviewLife() {
    let finalResult
    if (playerLife == 0) {
        finalResult = 'Your pet is dead, You lose'
    }   else if (oponnetLife == 0) {
            finalResult = 'Congratulations, You win'
        }
    createFinalMessage(finalResult)
}

function restartGame() {
    location.reload()
}

window.addEventListener('load', startGame)

function random(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

