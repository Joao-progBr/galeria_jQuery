$(document).ready(function(){
    // console.log(document.querySelector("header button"))
    // console.log($("#btn-cancelar"))

    $("header button").click(function(){
        $("form").toggle()
    })

    $("#btn-cancelar").on("click", function(){
        $("form").hide()
    })

    $("form").on("submit", function(e){
        e.preventDefault()
        const enderecoImagemNova = $("#endereco-imagem-nova").val()
        const novoItem = $("<li style='display: none'></li>")
        $(`<img src="${enderecoImagemNova}" />`).appendTo(novoItem)
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoImagemNova}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </>
        `).appendTo(novoItem)
        $(novoItem).appendTo("ul")
        $(novoItem).fadeIn(1500)
        $("#endereco-imagem-nova").val("")

    })

    

    // $("header button").click(function(){
    //     alert("Expandir formulário")
    // })

    // $("form").on("submit", function(e){
    //     e.preventDefault()
    // })
})

