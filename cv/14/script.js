function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector(`div#res`)
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genêro = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 3){
                //bb
                img.setAttribute('src', '14/bebezinho.jpg')
            } else if (idade < 7) {
                //cPeq
                img.setAttribute('src', '14/criancaPeq.jpg')
            } else if (idade < 10) {
                //cGrd
                img.setAttribute('src', '14/criancaGrd.jpg')
            } else if (idade < 13) {
                //preAdol
                img.setAttribute('src', '14/preAdolescente.jpg')
            } else if (idade < 18) {
                //adulto
                img.setAttribute('src', '14/adolecente.jpg')
            } else if (idade < 30) {
                //adulto
                img.setAttribute('src', '14/jovens.jpg')
            } else if (idade < 59) {
                //adulto
                img.setAttribute('src', '14/adultos.jpg')
            } else {
                //idoso
                img.setAttribute('src', '14/idosos.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 3){
                //bb
                img.setAttribute('src', '14/bebezinho.jpg')
            } else if (idade < 7) {
                //cPeq
                img.setAttribute('src', '14/criancaPeq.jpg')
            } else if (idade < 10) {
                //cGrd
                img.setAttribute('src', '14/criancaGrd.jpg')
            } else if (idade < 13) {
                //preAdol
                img.setAttribute('src', '14/preAdolescente.jpg')
            } else if (idade < 18) {
                //adulto
                img.setAttribute('src', '14/adolecente.jpg')
            } else if (idade < 30) {
                //adulto
                img.setAttribute('src', '14/jovens.jpg')
            } else if (idade < 59) {
                //adulto
                img.setAttribute('src', '14/adultos.jpg')
            } else {
                //idoso
                img.setAttribute('src', '14/idosos.jpg')
            } 
        }
        res.style.textAlign = 'center'
       res.innerHTML = `Detectamos que você é ${gênero} e tem ${idade} anos.`
       res.appendChild(img)
    }
}