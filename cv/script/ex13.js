
function  carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Bem vindo, agora são ${hora} horas.`
if (hora >= 0 && hora <= 12){
    img.src = "img/manha.png"
    document.body.style.background = '#87cefa'
}else if (hora >= 12 && hora <= 18){
    img.src = "img/tarde.png"
    document.body.style.background ='#3f053271'
}else {
    img.src = "img/anoitecer.png"
    document.body.style.background = '#10033f7'
}
}