function findAnagrams(words) {

    const groups = {};

    words.forEach((word) => {

        const key = word
            .split("")
            .sort()
            .join("");

        if (groups[key]) {
            groups[key].push(word);
        } else {
            groups[key] = [word];
        }
    });

    return Object.values(groups);
}


const words = ["name", "mean", "man"];

const result = findAnagrams(words);

console.log(result);
