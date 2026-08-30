function isAnagram(string1, string2) {

    const word1 = string1
        .toLowerCase()
        .replaceAll(" ", "")
        .split("")
        .sort()
        .join("");

    const word2 = string2
        .toLowerCase()
        .replaceAll(" ", "")
        .split("")
        .sort()
        .join("");

    return word1 === word2;
}


console.log(isAnagram("Astronomer", "Moon starer"));

console.log(isAnagram("School master", "The classroom"));

console.log(isAnagram("The Morse Code", "Here come dots"));

console.log(isAnagram("Hello", "World"));