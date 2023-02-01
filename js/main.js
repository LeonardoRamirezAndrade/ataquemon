let playerAttack
let oponnetAttack 
let playerLife = 3
let oponnetLife = 3

function startGame() {
    let buttonPetsPlayer = document.getElementById('button-pets')
    buttonPetsPlayer.addEventListener('click', selectPlayerPet)   
    let buttonFire =document.getElementById('button-fire')
    buttonFire.addEventListener('click', fireAttack)
    let buttonWater =document.getElementById('button-water')
    buttonWater.addEventListener('click', waterAttack)
    let buttonGround =document.getElementById('button-ground')
    buttonGround.addEventListener('click', groundAttack)
}

function selectPlayerPet() {
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

    if (playerAttack == oponnetAttack) {
        return 'Draw'
        
    }   else if (playerAttack == 'fire' && oponnetAttack == 'ground') {
            oponnetLife--
            spanOponnetPet.innerHTML = oponnetLife
            return 'You win'
            }   else if (playerAttack == 'water' && oponnetAttack == 'fire') {
                    oponnetLife--
                    spanOponnetPet.innerHTML = oponnetLife
                    return 'You win'

                    } else if (playerAttack == 'ground' && oponnetAttack == 'water') {
                        oponnetLife--
                        spanOponnetPet.innerHTML = oponnetLife
                        return 'You win'
                        } else {
                            playerLife--
                            spanPlayersPet.innerHTML = playerLife
                            return 'You lose'
                            }
}

window.addEventListener('load', startGame)

function random(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

