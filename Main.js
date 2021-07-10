var audioYame = new Audio('./audio/Yamete Kudasai.mp3');

document.getElementById('not').ondblclick = function() {
    audioYame.play(); }


var audioNonono = new Audio('./audio/jojo no no.mp3'); 
var audioNo = new Audio('./audio/no.mp3');

document.getElementById('no').ondblclick = function() {
    audioNonono.play(); }

document.getElementById('no').onclick = function() {
    audioNo.play(); }
