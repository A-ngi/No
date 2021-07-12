var audioYame = new Audio('./audio/Yamete Kudasai.mp3');

document.getElementById('not').ondblclick = function() {
    audioYame.play(); }


var audioNonono = new Audio('./audio/jojo no no.mp3'); 

document.getElementById('no').ondblclick = function() {
    audioNonono.play(); }

document.getElementById('no').onclick = function() {
    let numeroRandom = Math.random() ;    
    numeroRandom *= 500 ;
    Math.floor(numeroRandom) ;
    let total = numeroRandom + 'px' ;
    this.style.left=total ;
    let audioNo = new Audio('./audio/no.mp3');  
    audioNo.play() ; }