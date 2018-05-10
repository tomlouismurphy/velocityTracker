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
		const $newdiv = $('<div></div>');
		const $newtitle = $('<h4></h4>');
		$newtitle.text(e.target.innerText);
		$newdiv.append($newtitle);
		$('.selectedPitcher').append($newdiv);
	})
}

viewGamesList();