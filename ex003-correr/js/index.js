function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    var resposta = document.createElement('div')
    resposta.setAttribute('id','resposta')
    var  i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    var btn = document.getElementById('btn')


    if(inicio.value.length <= 0 || fim.value.length <= 0 || passo.value.length <= 0){
        alert('Preencha todos os campos!')
    } else if(Number(passo.value) == 0){
        alert(`Impossível contar com passo ${Number(passo.value)}`)
    } else if(Number(inicio.value) < Number(fim.value)){
        //Contagem crescente
        for(var c = i; c <= f; c += p){
            resposta.innerHTML += ` ${c} \u{1F449}`
        }
        resposta.innerHTML += ` \u{1F3C1}`

        


        
    } else{
        //Contagem decrescente
        for(var c = i; c >= f; c -= p){
            resposta.innerHTML += ` ${c} \u{1F449}`
        }
        resposta.innerHTML += ` \u{1F3C1}`

    }

    btn.setAttribute('disabled', 'true')

    setTimeout(function(){
        resposta.innerHTML = ''
        btn.removeAttribute('disabled')
    }, 5000)

    res.appendChild(resposta)
}


