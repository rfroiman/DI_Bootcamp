let form = document.getElementById("MyForm");

let radius = document.getElementById("radius");

let volume = document.getElementById("volume");


form.addEventListener("submit", function(event) {

    event.preventDefault();


    let radiusValue = Number(radius.value);


    if (isNaN(radiusValue) || radiusValue < 0) {

        alert("Please enter a valid radius.");

    } else {

        let result =
            (4 / 3) *
            Math.PI *
            radiusValue ** 3;


        volume.value = result.toFixed(2);

    }

});