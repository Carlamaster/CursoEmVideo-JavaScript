//aula 16 curso em video - função

function parimp(n) {
    if(n%2==0){
        return 'Par'
    }else{
        return 'Impar'
    }
}
/*
let res = parimp (4)
console.log(res)
*/
console.log(parimp(11))
//_______________________________

function soma(n1=0, n2=0){
    return n1 + n2
}
console.log(soma( 5))

//_______________________________

let v = function(x){
    return x*2
}
console.log(v(5))

//_______________________________
function fatorial(f) {
    let fat = 1
    for(let c = f; c > 1; c--){
    fat *= c
    }
return fat
}
console.log(fatorial(5))

//_______________________________
// recursividade
function fatorial2 (nu){
    if (nu == 1){
        return 1
    }else {
        return nu * fatorial2(nu-1)
    }
}
console.log(fatorial2(5))
