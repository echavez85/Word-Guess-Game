// List of word choices (Drag Names)
var dragNames = ["bebe zahara benet", "nina flowers", "rebecca glasscock", "shannel", "ongina", "jade sotomayor", "akashia", "tammie brown", "porkchop", "tyra sanchez", "raven", "jujubee", "tatianna", "pandora boxx", "jessica wild", "sahara davenport", "morgan mcmichaels", "sonique", "mystique", "nicole paige brooks", "shangela", "raja", "manila luzon", "alexis mateo", "yara sofia", "carmen carrera", "delta work", "stacy layne matthews", "mariah", "india ferrah", "mimi imfurst", "phoenix", "venus dlite", "sharon needles", "chad michaels", "phi phi ohara", "latrice royale", "kenya michaels", "dida ritz", "willam", "jiggly caliente", "milan", "madame laqueer", "the princess", "lashauwn beyond", "alisa summers", "jinkx monsoon", "alaska", "roxxxy andrews", "detox", "coco montrese", "alyssa edwards", "ivy winters", "jade jolie", "lineysha sparx", "vivienne pinay", "honey mahoganey", "monica beverly hillz", "serena chacha", "penny tration", "bianca del rio", "adore delano", "courtney act", "darienne lake", "bendelacreme", "joslyn fox", "trinity k bonet", "laganja estranja", "milk", "gia gunn", "april carrion", "vivacious", "magnolia crawford", "kelly mantle", "violet chachki", "ginger minj", "pearl", "kennedy davenport", "katya zamolodchikova", "trixie mattel", "miss fame", "jaidynn diore fierce", "max", "kandy ho", "mrs kasha davis", "jasmine masters", "sasha belle", "tempest dujour", "bob the drag queen", "kim chi", "naomi smalls", "chi chi devayne", "derrick barry", "thorgy thor", "robbie turner", "acid betty", "naysha lopez", "cynthia lee fontaine", "dax exclamationpoint", "laila mcqueen", "sasha velour", "peppermint", "shea coulee", "trinity taylor", "alexis michelle", "nina bonina brown", "valentina", "farrah moan", "aja", "eureka ohara", "charlie hides", "kimora blac", "jaymes mansfield", "aquaria", "kameron michaels", "asia ohara", "miz cracker", "monet x change", "the vixen", "monique heart", "blair st clair", "mayhem miller", "dusty ray bottoms", "yuhua hamasaki", "kalorie karbdashian williams", "vanessa vanjie mateo"];

// List of choices available to player. Included space as an option as a workaround for not being able to leave a space between first, middle, and last names.
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];

var gameStarted = false;
var currentWord;
var wordAsDashes;
var guessesLeft;
var lettersGuessed;
var numWins = 0;
var numLosses = 0;
var getNewWord;
var wordPlace;
var correctGuesses;
var wordAsArr = [];
var dashesArray = [];

// Default settings
function initialize() {
    gameStarted = true;
    lettersGuessed = [];
    correctGuesses = 0;
    wordPlace = Math.floor(Math.random() * dragNames.length);
    currentWord = dragNames[wordPlace];			//string
    guessesLeft = 22 - currentWord.length;		//longer words get less guesses
    wordAsDashes = makeIntoDashes(currentWord);	//string of dashes
    wordAsArr = currentWord.split('');			//array with letters
    dashesArray = wordAsDashes.split('');		//array with dashes
    document.getElementById("currentWord").innerHTML = wordAsDashes;
    document.getElementById("lettersGuessed").innerHTML = "--";
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
}

// Turn each name into underscores. Can't figure out how to leave spaces between names with more than one word. Found workaround mentioned above.
function makeIntoDashes(word) {
    var dashes = "";
    for (i = 0; i < word.length - 1; i++) {
        dashes += "_ ";
    }
    dashes += "_";
    return dashes;
}

// Main function that controls what to do with each keystroke
function playGame(letter) {
    var letter = letter.toLowerCase();

    // Checks if key is a letter in the name
    if (alphabet.indexOf(letter) > -1) {
        if (wordAsArr.indexOf(letter) > -1) {
            correctGuesses++;
            displayLetter(letter);
        }
        else {
            if (lettersGuessed.indexOf(letter) > -1) {
                return;
            }
            // Decrease guesses left if not letter in name
            else {
                guessesLeft--;
                document.getElementById("guessesLeft").innerHTML = guessesLeft;
                lettersGuessed.push(letter);
                document.getElementById("lettersGuessed").innerHTML = lettersGuessed.join(' ');
                if (guessesLeft == 0) {
                    alert("Sorry! The correct answer is " + currentWord);
                    initialize();
                    numLosses++;
                    document.getElementById("losses").innerHTML = numLosses;
                }
            }
        }
    }
}

// Displays letter if it's in word
function displayLetter(letter) {
    // for each char in wordAsDashes, if matches currentWord --> display
    for (i = 0; i < currentWord.length; i++) {
        if (letter == wordAsArr[i]) {
            dashesArray[i * 2] = letter;
            console.log(dashesArray);
        }
    }
    document.getElementById("currentWord").innerHTML = dashesArray.join("");
    checkForWin();
}

// Checks for win by looking for "_"
function checkForWin() {
    if (dashesArray.indexOf("_") === -1) {
        alert("You got it! The correct answer is " + currentWord);
        numWins++;
        document.getElementById("wins").innerHTML = numWins;
        initialize();
    }
}

document.onkeyup = function (event) {
    if (!gameStarted) {
        document.getElementById("letsPlay").innerHTML = "";
        initialize();
        document.getElementById("currentWord").innerHTML = wordAsDashes.split(",");
        console.log(currentWord);
        gameStarted = true;
    }
    else {
        playGame(event.key);
    }
}