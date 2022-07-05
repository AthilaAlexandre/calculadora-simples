function calcular(n1, n2){
    n1 = Number(document.getElementById('n1').value)
    n2 = Number(document.getElementById('n2').value)

    selector = document.getElementById('selector').value

    switch(selector){
        case '+':
            calculo = (n1 + n2)
            document.getElementById('resultado').innerHTML = `${n1} + ${n2} = ${calculo}`
            break

        case '+ ar':
            calculo = Math.round((n1 + n2))
            document.getElementById('resultado').innerHTML = `${n1} + ${n2} = ${calculo}`
            break

        case '-':
            calculo = (n1 - n2)
             document.getElementById('resultado').innerHTML = `${n1} - ${n2} = ${calculo}`
            break

        case '- ar':
            calculo = Math.round((n1 - n2))
            document.getElementById('resultado').innerHTML = `${n1} - ${n2} = ${calculo}`
            break

        case '*':
            calculo = (n1 * n2)
            document.getElementById('resultado').innerHTML = `${n1} x ${n2} = ${calculo}`
            break
        
        case '* ar':
            calculo = Math.round((n1 * n2))
            document.getElementById('resultado').innerHTML = `${n1} x ${n2} = ${calculo}`
            break  

         case '/':
            calculo = (n1 / n2)
            if(Number.isNaN(calculo)){
                document.getElementById('resultado').innerHTML = `Insira um divisível válido!`
            }else{document.getElementById('resultado').innerHTML = `${n1} / ${n2} = ${calculo}`}
            break
        
        case '/ ar':
            calculo = Math.round((n1 / n2))
            if(Number.isNaN(calculo)){
                document.getElementById('resultado').innerHTML = `Insira um divisível válido!`
            } else {
                document.getElementById('resultado').innerHTML = `${n1} / ${n2} = ${calculo}`
            break}
    }
}


