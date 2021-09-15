const modal = document.querySelector('.container-login')
const login = document.querySelector('.login')
const fechar = document.querySelector('.fechar')




login.addEventListener('click', abrirModal )
fechar.addEventListener('clck', fecharModal)
window.addEventListener('click', foraModal)



function abrirModal(){
    modal.style.display = 'block'
}


function fecharModal() {
    modal.style.display = 'none'
}


function foraModal(e) {
    if(e.target == modal) {
        fecharModal()
    }
}