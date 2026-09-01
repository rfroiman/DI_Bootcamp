const loot = ["🗡️ Sword", "🛡️ Shield", "🧪 Potion", "💎 Diamond"];

function getRandomItem() {
    return loot[Math.floor(Math.random() * loot.length)];
}

function openLootBox(onOpen) {

    // Display a random item every 300 ms
    const interval = setInterval(() => {

        const item = getRandomItem();

        console.log(`Rolling: ${item}`);

    }, 300);


    // After 2 seconds
    setTimeout(() => {

        // Stop the animation
        clearInterval(interval);

        // Select the final prize
        const finalPrize = getRandomItem();

        // Pass the prize to the callback
        onOpen(finalPrize);

    }, 2000);
}


openLootBox((prize) => {
    console.log(`You received: ${prize}`);
});