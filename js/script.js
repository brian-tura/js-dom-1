const lampadina = document.getElementById('lampadina');
const bottone = document.getElementById('btn');

bottone.addEventListener('click', function() {
    if(lampadina.scroll.includes('yellow')){
        lampadina.src = '../img/white_lamp.png';
        btn.textContent = 'Accendi';
    }
    else {
        lampadina.src='../img/yellow_lamp.png';
        
    }
})