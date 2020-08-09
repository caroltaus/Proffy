// procurar o botão Novo Horário
document.querySelector("#add-time")
// quando clicar no botão
.addEventListener('click',cloneField)

// executar uma ação (duplicar os campos de schedule)
function cloneField() {
    // acha os campos a serem duplicados e clona. True para que clone todos os filhos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    

    //pegar os campos e limpá-los
    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field) {  //loop
        //pegar o field atual e limpa
        field.value = ""
    })

    // colocar na pagina
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
    
}

