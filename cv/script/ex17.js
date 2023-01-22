function contar() {
    let nt = document.getElementById('txtn')
    let res = document.getElementById('res')
    
   
    if (nt.value.length == 0) {
    
        alert('[ERRO!] Por favor, Digite um numero.')

    }else{
        let  r = Number(nt.value)
        let c = 1
        res.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${r} X ${c} = ${r*c}`
            item.value = `tab${c}`
            res.appendChild(item)
            c++
        }
        
    }

}