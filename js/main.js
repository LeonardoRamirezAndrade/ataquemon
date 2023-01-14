function startGame() {
    let buttonPetsPlayer = document.getElementById('button-pets')
    buttonPetsPlayer.addEventListener('click', selectPlayerPet)   
}

function selectPlayerPet() {
    let inputShirov = document.getElementById('Shirov')
    let inputKarpov = document.getElementById('Karpov')
    let inputAnand = document.getElementById('Anand')
    let spanPlayerPet = document.getElementById('players-pet')


    if (inputShirov.checked) {
        spanPlayerPet.innerHTML = " Shirov "
    }  else if (inputKarpov.checked) {
        spanPlayerPet.innerHTML = " Karpov "
    }  else if (inputAnand.checked) {
        spanPlayerPet.innerHTML = " Anand "
    }
     else {
        alert('Tienes que seleccionar alguna mascota')
     }
     OponnetPet()
}

function OponnetPet(){
    let randomAttack = random(1, 3)
    let spanOponnetPet = document.getElementById('opponents-pet')

    if (randomAttack == 1) {
        spanOponnetPet.innerHTML = " Shirov "
    }   else if (randomAttack == 2) {
            spanOponnetPet.innerHTML = " Karpov "
        }   else {
                spanOponnetPet.innerHTML = " Anand "
        }
}

window.addEventListener('load', startGame)

function random(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

