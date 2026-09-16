const chalk = require("chalk");

function colorfulMessage() {
    console.log(
        chalk.green.bold(
            "Node.js is awesome!"
        )
    );

    console.log(
        chalk.blue(
            "I am learning Node.js modules."
        )
    );

    console.log(
        chalk.yellow(
            "This is my Daily Challenge!"
        )
    );
}

module.exports = colorfulMessage;