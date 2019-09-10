var socket = io("http://localhost:3000");

var imgFoco = document.getElementById('imFoco');
var btnfoco  = document.getElementById('btnFoco');
var estado = false ;
socket.on("estado", function (data) {
    estado = data
    console.log(data)
    if (estado){
       
        imgFoco.src='./img/lampOn.gif'
        btnfoco.innerHTML="Apagar"
    }
    else {
    
    imgFoco.src ='./img/lampOff.gif'
    btnfoco.innerHTML="Encender"
    }
   


});


 
var   onStart = function(){
    if (!estado){
        estado = true; 
        imgFoco.src='./img/lampOn.gif'
        btnfoco.innerHTML="Apagar"
    }
    else {
    estado = false ; 
    imgFoco.src ='./img/lampOff.gif'
    btnfoco.innerHTML="Encender"
    }
    socket.emit("estado", estado);
}