function myMove() {

    let box = document.getElementById("animate");

    let position = 0;


    let interval = setInterval(function () {

        if (position >= 350) {

            clearInterval(interval);

        } else {

            position = position + 1;

            box.style.left = position + "px";

        }

    }, 1);

}