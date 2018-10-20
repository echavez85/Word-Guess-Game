// List of word choices (Drag Names)
var dragNames = ["Bebe Zahara Benet", "Nina Flowers", "Rebecca Glasscock", "Shannel", "Ongina", "Jade Sotomayor", "Akashia", "Tammie Brown", "Porkchop", "Tyra Sanchez", "Raven", "Jujubee", "Tatianna", "Pandora Boxx", "Jessica Wild", "Sahara Davenport", "Morgan McMichaels", "Sonique", "Mystique", "Nicole Paige Brooks", "Shangela", "Raja", "Manila Luzon", "Alexis Mateo", "Yara Sofia", "Carmen Carrera", "Delta Work", "Stacy Layne Matthews", "Mariah", "India Ferrah", "Mimim Imfurst", "Phoenix", "Venus DLite", "Sharon Needles", "Chad Michaels", "Phi Phi Ohara", "Latrice Royale", "Kenya Michaels", "Dida Ritz", "Willam", "Jiggly Caliente", "Milan", "Madame LaQueer", "The Princess", "Lashauwn Beyond", "Alisa Summers", "Jinkx Monsoon", "Alaska", "Roxxxy Andrews", "Detox", "Coco Montrese", "Alyssa Edwards", "Ivy Winters", "Jade Jolie", "Lineysha Sparx", "Vivienne Pinay", "Honey Mahoganey", "Monica Beverly Hillz", "Serena ChaCha", "Penny Tration", "Bianca Del Rio", "Adore Delano", "Courtney Act", "Darienne Lake", "BenDeLaCreme", "Joslyn Fox", "Trinity K Bonet", "Laganja Estranja", "Milk", "Gia Gunn", "April Carrion", "Vivacious", "Magnolia Crawford", "Kelly Mantle", "Violet Chachki", "Ginger Minj", "Pearl", "Kennedy Davenport", "Katya Zamolodchikova", "Trixie Mattel", "Miss Fame", "Jaidynn Diore Fierce", "Max", "Kandy Ho", "Mrs Kasha Davis", "Jasmine Masters", "Sasha Belle", "Tempest Dujour", "Bob the Drag Queen", "Kim Chi", "Naomi Smalls", "Chi Chi Devayne", "Derrick Barry", "Thorgy Thor", "Robbie Turner", "Acid Betty", "Naysha Lopez", "Cynthia Lee Fontaine", "Dax Exclamationpoint", "Laila McQueen", "Sasha Velour", "Peppermint", "Shea Coulee", "Trinity Taylor", "Alexis Michelle", "Nina Bonina Brown", "Valentina", "Farrah Moan", "Aja", "Eureka Ohara", "Charlie Hides", "Kimora Blac", "Jaymes Mansfield", "Aquaria", "Kameron Michaels", "Asia Ohara", "Miz Cracker", "Monet X Change", "The Vixen", "Monique Heart", "Blair St Clair", "Mayhem Miller", "Dusty Ray Bottoms", "Yuhua Hamasaki", "Kalorie Karbdashian Williams", "Vanessa Vanjie Mateo"];

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

var chosenQueen = [];
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