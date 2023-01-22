function calcular(){
    var txtv = window.document.querySelector('input#txtvel');
    var res = window.document.querySelector('div#res')
    var vel = Number(txtv.value)  
    res.innerHTML = `<p> Sua velocidade atual e de <strong>${vel} km/h, </strong> em uma via de 60km/h.</p>`



    if (vel > 60) {
        res.innerHTML += '<b> Ultrapassou o limite permitido !!! </b><br><img src="img/carfast.gif" alt="Multado" width="50%" loop="1">'
        
    } else {
        res.innerHTML += '<i>Você esta no limite permitido <br><img src="img/carlose.gif" alt="Certo" width="50%"></i>'    
    }

    res.innerHTML += '<p> Dirija sempre com cuidado!</p>'
}