//This function passes all pitchers into 
//a nav menu on the main page

const populatePitcherList = () => {
	for (let i = 0; i < startingPitchers.length; i++){
		const $newdiv = $('<div></div>');
		$newdiv.addClass('soxPitcher');
		const $newtext = $('<p></p>');
		$newtext.text(startingPitchers[i].name);
		$newdiv.append($newtext);
		$('.pitcherMenu').append($newdiv);
	}
}

populatePitcherList();

const viewGamesList = () => {
	$('.soxPitcher').on('click', (e) => {
		$('.selectedPitcher').empty();
		const $newdiv = $('<div></div>');
		const $newtitle = $('<h4></h4>');
		$newtitle.text(e.target.innerText);
		$newdiv.append($newtitle);
		for (let i = 0; i < startingPitchers.length; i++){
			if (startingPitchers[i].name === e.target.innerText){
				for (let j = 0; j < startingPitchers[i].gamesStarted.length; j++){
					const $newp = $('<p></p>');
					$newp.text(startingPitchers[i].gamesStarted[j].date);
					$newdiv.append($newp);
				}
			} else {
				;
			}
		}
		$('.selectedPitcher').append($newdiv);
	})
}

viewGamesList();