const lampadina = document.getElementById('lampadina');
const bottone = document.getElementById('btn');

bottone.addEventListener('click', function() {
    if(lampadina.src.includes('yellow')){
        lampadina.src = '../img/white_lamp.png';
        bottone.textContent = 'Accendi';
    }
    else {
        lampadina.src='../img/yellow_lamp.png';
        bottone.textContent = 'Spegni';   
    }
});