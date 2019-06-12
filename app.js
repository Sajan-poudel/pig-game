
/*
Game rules hai guys:

there are two players.

ani they are supposed to roll the dice.

and they can roll as many as they want until the dice show 1

while rolling each time the point is added up .

as soon dice show 1 the whole holded points will be zero .

as the player thinks its risky to roll many times. they can hold their point which is added to total score.

if any player achive >= 100 they they are consider as winner...

yo game pahilai nai xa hai 

this game is called pig game.......

*/

var scores, roundScore, onPlayer, dice, game_running;

init();



document.querySelector('.btn-roll').addEventListener('click', function(){
	if (game_running){
		var dice = document.querySelector('.dice');
		dice.style.display = 'block';
		
		var num = Math.ceil(Math.random() * 6);
		dice.src = 'dice-'+num+'.png';
		

		if (num !== 1){
			roundScore += num;
			document.getElementById('current-' + onPlayer).textContent = roundScore;
		} else {

			change_player();
		}
	}
	
});

document.querySelector('.btn-hold').addEventListener('click', function(){
	if (game_running){
		scores[onPlayer] += roundScore;
		document.getElementById('score-' + onPlayer).textContent = scores[onPlayer];

		if (scores[onPlayer] >= 100){
			document.querySelector('#name-' + onPlayer).textContent = 'WINNER!!';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-' + onPlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + onPlayer + '-panel').classList.remove('active');
			game_running = false;
		} else{
			change_player();
		}
	}
	
});

document.querySelector('.btn-new').addEventListener('click', init);

function change_player(){
	onPlayer === 0 ? onPlayer = 1 : onPlayer = 0;
	roundScore = 0;
	document.getElementById('current-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	document.querySelector('.dice').style.display = 'none';
}

function init(){
	scores = [0, 0];
	roundScore = 0;
	onPlayer = 0;
	game_running =  true;


	dice = document.querySelector('.dice');
	dice.style.display = 'none';

	document.getElementById('score-0').textContent = '0';

	document.getElementById('score-1').textContent = '0';

	document.getElementById('current-0').textContent = '0';

	document.getElementById('current-1').textContent = '0';

	document.getElementById('name-0').textContent = "Player 1";
	document.getElementById('name-1').textContent = 'Player 2';

	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}




