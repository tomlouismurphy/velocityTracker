class Pitch {
	constructor(pitchCount, type, velocity, inStrikeZone, inning, pitcher, batter, countBalls, countStrikes, batterSwing, batterContact, batterFair, reachedBase){
		this.pitchCount = pitchCount;
		this.type = type;
		this.velocity = velocity;
		this.inStrikeZone = inStrikeZone;
		this.inning = inning;
		this.pitcher = pitcher;
		this.batter = batter;
		this.countBalls = countBalls;
		this.countStrikes = countStrikes;
		this.batterContact = batterContact;
		this.batterFair = batterFair;
		this.reachedBase = reachedBase;
	}
}

const pitch001may3 = new Pitch(1, 'FT', 91.5, true, 1, 'David Price', 'Delino DeShields', 0, 0, false, false, false, false);
const pitch002may3 = new Pitch(2, 'FT', 91.8, true, 1, 'David Price', 'Delino DeShields', 0, 1, false, false, false, false);
const pitch003may3 = new Pitch(3, 'FC', 88.7, false, 1, 'David Price', 'Delino DeShields', 0, 2, false, false, false, false);
const pitch004may3 = new Pitch(4, 'FC', 88.8, false, 1, 'David Price', 'Delino DeShields', 1, 2, false, false, false, false);
const pitch005may3 = new Pitch(5, 'FC', 88.1, true, 1, 'David Price', 'Delino DeShields', 2, 2, true, true, false, false);
const pitch006may3 = new Pitch(6, 'FC', 88.1, true, 1, 'David Price', 'Delino DeShields', 2, 2, true, false, false, false);

const pitch007may3 = new Pitch(7, 'FF', 91.7, true, 1, 'David Price', 'Shin-Soo Choo', 0, 0, true, true, false, false);
const pitch008may3 = new Pitch(8, 'FT', 91.7, false, 1, 'David Price', 'Shin-Soo Choo', 0, 1, false, false, false, false);
const pitch009may3 = new Pitch(9, 'FF', 92, false, 1, 'David Price', 'Shin-Soo Choo', 1, 1, false, false, false, false);
const pitch010may3 = new Pitch(10, 'FT', 92.3, true, 1, 'David Price', 'Shin-Soo Choo', 2, 1, false, false, false, false);
const pitch011may3 = new Pitch(11, 'FT', 93, true, 1, 'David Price', 'Shin-Soo Choo', 2, 2, true, true, true, false);

const pitch012may3 = new Pitch(12, 'FT', 92.5, true, 1, 'David Price', 'Isiah Kiner-Falefa', 0, 0, false, false, false, false);
const pitch013may3 = new Pitch(13, 'FF', 92.1, false, 1, 'David Price', 'Isiah Kiner-Falefa', 0, 1, false, false, false, false);
const pitch014may3 = new Pitch(14, 'CH', 84.8, true, 1, 'David Price', 'Isiah Kiner-Falefa', 1, 1, true, true, true, false);

const pitch015may3 = new Pitch(15, 'FF', 91.3, true, 2, 'David Price', 'Nomar Mazara', 0, 0, false, false, false, false);
const pitch016may3 = new Pitch(16, 'FF', 92.1, true, 2, 'David Price', 'Nomar Mazara', 0, 1, true, true, true, false);

const pitch017may3 = new Pitch(17, 'FT', 92.2, true, 2, 'David Price', 'Joey Gallo', 0, 0, true, true, false, false);
const pitch018may3 = new Pitch(18, 'FF', 91.7, false, 2, 'David Price', 'Joey Gallo', 0, 1, false, false, false, false);
const pitch019may3 = new Pitch(19, 'FT', 92.1, false, 2, 'David Price', 'Joey Gallo', 1, 1, false, false, false, false);
const pitch020may3 = new Pitch(20, 'FF', 93.1, false, 2, 'David Price', 'Joey Gallo', 2, 1, false, false, false, false);
const pitch021may3 = new Pitch(21, 'CH', 84.6, true, 2, 'David Price', 'Joey Gallo', 3, 1, false, false, false, false);
const pitch022may3 = new Pitch(22, 'CH', 85.7, false, 2, 'David Price', 'Joey Gallo', 3, 2, true, true, false, false);
const pitch023may3 = new Pitch(23, 'FT', 93.1, true, 2, 'David Price', 'Joey Gallo', 3, 2, true, true, false, false);
const pitch024may3 = new Pitch(24, 'FT', 93.1, false, 2, 'David Price', 'Joey Gallo', 3, 2, false, false, false, true);

const pitch025may3 = new Pitch(25, 'FF', 92.1, false, 2, 'David Price', 'Jurickson Profar', 0, 0, false, false, false, false);
const pitch026may3 = new Pitch(26, 'FT', 92.7, true, 2, 'David Price', 'Jurickson Profar', 1, 0, true, true, true, true);

const pitch027may3 = new Pitch(27, 'FF', 92.6, true, 2, 'David Price', 'Renato Nunez', 0, 0, false, false, false, false);
const pitch028may3 = new Pitch(28, 'FF', 92.6, true, 2, 'David Price', 'Renato Nunez', 0, 1, true, true, true, false);

const pitch029may3 = new Pitch(29, 'CH', 84.7, false, 2, 'David Price', 'Robinson Chirinos', 0, 0, false, false, false, false);
const pitch030may3 = new Pitch(30, 'CH', 85.4, true, 2, 'David Price', 'Robinson Chirinos', 1, 0, true, false, false, false);
const pitch031may3 = new Pitch(31, 'FC', 87.6, true, 2, 'David Price', 'Robinson Chirinos', 1, 1, true, true, false, false);
const pitch032may3 = new Pitch(32, 'FC', 90.5, false, 2, 'David Price', 'Robinson Chirinos', 1, 2, false, false, false, false);
const pitch033may3 = new Pitch(33, 'FT', 92.5, true, 2, 'David Price', 'Robinson Chirinos', 2, 2, true, true, false, false);
const pitch034may3 = new Pitch(34, 'FC', 89.3, false, 2, 'David Price', 'Robinson Chirinos', 2, 2, false, false, false, false);
const pitch035may3 = new Pitch(35, 'CH', 85.3, false, 2, 'David Price', 'Robinson Chirinos', 3, 2, true, false, false, false);
