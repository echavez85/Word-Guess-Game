// List of word choices (Drag Names)
var dragNames = ["bebe zahara benet", "nina flowers", "rebecca glasscock", "shannel", "ongina", "jade sotomayor", "akashia", "tammie brown", "porkchop", "tyra sanchez", "raven", "jujubee", "tatianna", "pandora boxx", "jessica wild", "sahara davenport", "morgan mcmichaels", "sonique", "mystique", "nicole paige brooks", "shangela", "raja", "manila luzon", "alexis mateo", "yara sofia", "carmen carrera", "delta work", "stacy layne matthews", "mariah", "india ferrah", "mimi imfurst", "phoenix", "venus dlite", "sharon needles", "chad michaels", "phi phi ohara", "latrice royale", "kenya michaels", "dida ritz", "willam", "jiggly caliente", "milan", "madame laqueer", "the princess", "lashauwn beyond", "alisa summers", "jinkx monsoon", "alaska", "roxxxy andrews", "detox", "coco montrese", "alyssa edwards", "ivy winters", "jade jolie", "lineysha sparx", "vivienne pinay", "honey mahoganey", "monica beverly hillz", "serena chacha", "penny tration", "bianca del rio", "adore delano", "courtney act", "darienne lake", "bendelacreme", "joslyn fox", "trinity k bonet", "laganja estranja", "milk", "gia gunn", "april carrion", "vivacious", "magnolia crawford", "kelly mantle", "violet chachki", "ginger minj", "pearl", "kennedy davenport", "katya zamolodchikova", "trixie mattel", "miss fame", "jaidynn diore fierce", "max", "kandy ho", "mrs kasha davis", "jasmine masters", "sasha belle", "tempest dujour", "bob the drag queen", "kim chi", "naomi smalls", "chi chi devayne", "derrick barry", "thorgy thor", "robbie turner", "acid betty", "naysha lopez", "cynthia lee fontaine", "dax exclamationpoint", "laila mcqueen", "sasha velour", "peppermint", "shea coulee", "trinity taylor", "alexis michelle", "nina bonina brown", "valentina", "farrah moan", "aja", "eureka ohara", "charlie hides", "kimora blac", "jaymes mansfield", "aquaria", "kameron michaels", "asia ohara", "miz cracker", "monet x change", "the vixen", "monique heart", "blair st clair", "mayhem miller", "dusty ray bottoms", "yuhua hamasaki", "kalorie karbdashian williams", "vanessa vanjie mateo"];

// Other variables
var guessesLeft = 9;
var lettersGuessed = [];
var chosenQueen = [];
var mysteryQueen = [];


// How to start the game (Click or press any key)




// Randomly choose a name from list and display only underscores based on length of the name.
window.onload = function() {
    var mysteryQueen = dragNames[Math.floor(Math.random() * dragNames.length)];
    chosenQueen.push(mysteryQueen);
    console.log(chosenQueen[0]);
}

var answerArray = [];
    for (var i = 0; i < mysteryQueen.length; i++) {
    chosenQueen[i] = "_";
}

var remainingLetters = mysteryQueen.length;

// Player inputs guesses.
document.onkeyup = function(event) {
    var playerGuess = event.key;
    lettersGuessed.push(playerGuess);
    console.log(chosenQueen[0]);


// Correct guesses should be displayed in place of underscores above.
    // if((playerGuess === chosenQueen[i]) && ( guessesLeft > 0)) {
    //     guessesLeft = 9;
    //     computerGuess.length = 0;
    //     var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    //     computerGuess.push(compGuess);
    //     console.log(computerGuess [0]);
    };



// Wrong guesses will be put in a separate section. 


// Each wrong guess will decrease the number of guesses left.


// If the full name is guessed and guesses are greater than 0, new random word is chosen for player.


// If guesses left equals 0, display game over and allow player to choose to restart.