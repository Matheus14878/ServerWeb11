async function sortear(){
    //valores
    const totalResultados = Number(document.querySelector('#totalResultadosInput').value)



    const menorValor = Number(document.querySelector('#menorValorInput').value)


    const maiorValor = Number(document.querySelector('#maiorValorInput').value)



    for(let j = 0; j < 10; j++){



    // Limpar dados HTML
    const elementoHTMLResultValues = document.querySelector('.results-values')
    elementoHTMLResultValues.innerHTML= ''



    for(let i =0;i<totalResultados; i++){

    // gerar número

    const resultado = Math.floor(Math.random() * (maiorValor - menorValor + 1))


    //gerar HTML

    const elementoHTMLDoResultado = document.createElement('div')

    elementoHTMLDoResultado.classList.add('result-value')
    elementoHTMLDoResultado.innerText = resultado



    // add valor no html

    elementoHTMLResultValues.append(elementoHTMLDoResultado)

    }
    await wait(20)

    }
        }

    function wait(tempo){
        return new Promise((resolve) => {
            setTimeout(() => resolve(), tempo)
        })
    }