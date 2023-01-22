var num = [5, 1, 2, 4, 3]

//visualizar elemento
console.log(num)

//visualizar posição
console.log(`mostra a posição 0 que é: ${num[0]}`)

//coloca os elementos em ordem crescente
num.sort()

//add com posição obrigadoria
num[3] = 6

//add elemento sem especificar posição no final 
num.push(7,0)

console.log('como ficou após add elementos no array: ' + num)

//contar quantos elementos tem dentro do array
console.log(`mostra a quantidade de elementos dentro do array: ${num.length}`)



//vetor na tela


for(let pos=0;pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

// so funcionana com arrays e objetos
for (let pos in num) {
    console.log(num[pos])
}

//buscar valores
let busc = num.indexOf(7)
console.log('buscando onde esta o numero "7", mostra a posição: '+ busc )

let b = num.indexOf(9)
if (b == -1) {
    console.log('O valor não foi encontrado!')  
}else{
console.log('busca o valor: ', b)
}