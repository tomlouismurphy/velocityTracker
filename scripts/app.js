//This function passes all pitchers into 
//a nav menu on the main page

const populatePitcherList = () => {
	for (let i = 0; i < startingPitchers.length; i++){
		const $newdiv = $('<div></div>');
		const $newtext = $('<p></p>');
		$newtext.text(startingPitchers[i].name);
		$newdiv.append($newtext);
		$('.pitcherMenu').append($newdiv);
	}
}

populatePitcherList();