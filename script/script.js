// MODELO DE TESTE COPIA 1 // onclick="copy()"
    // function copy() {
    //     const texto = document.querySelector("a.linkedin").href;
    //     navigator.clipboard.writeText(texto)
    //         .then(() => {
    //             alert("Texto copiado!");
    //         })
    //         .catch(err => {
    //             console.error("Erro ao copiar o texto: ", err);
    //             alert("Falha ao copiar o texto!");
    //         })
    // }

// MODELO DE TESTE COPIA 2 - FLEXIVEL // onclick="copy(this.previousElementSibling)"
    function copy(element) {
        const texto = element.href;
        navigator.clipboard.writeText(texto)
            .then(() => {
                alert("Texto copiado!");
            })
            .catch(err => {
                console.error("Erro ao copiar o texto: ", err);
                alert("Falha ao copiar o texto!");
            });
    }


    // ------------------------------------------------------------------------

    //MODELO DE COPIA SIMPLES
    function copyData(element) {
        const texto = element.querySelector("p").textContent;
        navigator.clipboard.writeText(texto)
            .then(() => {
                alert("Texto copiado!");
            })
            .catch(err => {
                console.error("Erro ao copiar o texto: ", err);
                alert("Falha ao copiar o texto!");
            });
    }