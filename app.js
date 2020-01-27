
var scores, roundScore, activePlayer , gamePlaying ;

init();

var diceDom= document.querySelector('.dice');

diceDom.style.display= 'none';


document.querySelector('.btn-roll').addEventListener( 'click' , function(){
    if(gamePlaying){
        var dice = Math.floor(Math.random() * 6) + 1;
        diceDom.style.display= 'block';
        diceDom.src= 'dice-' + dice + '.png ';
    
        if(dice !== 1){
            roundScore = roundScore + dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }   
        else{
            nextPlayer();
        }
    }
   
});

document.querySelector('.btn-hold').addEventListener( 'click' , function() {

    if(gamePlaying){
        scores[activePlayer] = scores[activePlayer] + roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        if(scores[activePlayer] >= 20){
            document.querySelector('#name-' + activePlayer).textContent='Winner!';
            diceDom.style.display='none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');    
            gamePlaying = false;
        }
        else{
            nextPlayer();
        }
    }
    
});

document.querySelector('.btn-new').addEventListener( 'click' , init );

function nextPlayer() {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.querySelector('#current-0').textContent = '0'; 
        document.querySelector('#current-1').textContent = '0'; 
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        diceDom.style.display='none';
}

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');    
    document.querySelector('.player-1-panel').classList.remove('winner');    
    document.querySelector('.player-0-panel').classList.remove('active');    
    document.querySelector('.player-1-panel').classList.remove('active');    
    document.querySelector('.player-0-panel').classList.add('active');    
}


















