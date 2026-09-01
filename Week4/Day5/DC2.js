// ==========================================
// DAILY CHALLENGE 2 - MORSE CODE
// ==========================================

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;


// ==========================================
// FUNCTION 1 - toJs()
// Convert JSON string to JavaScript object
// ==========================================

function toJs() {

    return new Promise((resolve, reject) => {

        const morseJS = JSON.parse(morse);

        if (Object.keys(morseJS).length === 0) {

            reject("Error: Morse object is empty.");

        } else {

            resolve(morseJS);
        }
    });
}


// ==========================================
// FUNCTION 2 - toMorse()
// Ask user for word/sentence
// ==========================================

function toMorse(morseJS) {

    return new Promise((resolve, reject) => {

        const userInput = prompt("Enter a word or sentence:");

        const text = userInput.toLowerCase();

        const morseTranslation = [];


        for (let character of text) {

            // Ignore spaces between words
            if (character === " ") {
                continue;
            }


            if (morseJS[character]) {

                morseTranslation.push(morseJS[character]);

            } else {

                reject(`Error: Character "${character}" does not exist in Morse code.`);

                return;
            }
        }


        resolve(morseTranslation);
    });
}


// ==========================================
// FUNCTION 3 - joinWords()
// Display Morse translation on DOM
// ==========================================

function joinWords(morseTranslation) {

    const result = document.getElementById("result");

    result.innerHTML = morseTranslation.join("<br>");
}


// ==========================================
// CHAIN THE FUNCTIONS
// ==========================================

toJs()

    .then((morseJS) => toMorse(morseJS))

    .then((morseTranslation) => joinWords(morseTranslation))

    .catch((error) => {

        document.getElementById("result").textContent = error;

    });