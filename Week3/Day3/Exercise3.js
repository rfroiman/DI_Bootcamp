let allBoldItems;


function getBoldItems() {

    allBoldItems = document.querySelectorAll("strong");

}


function highlight() {

    for (let item of allBoldItems) {

        item.style.color = "blue";

    }

}


function returnItemsToDefault() {

    for (let item of allBoldItems) {

        item.style.color = "black";

    }

}


getBoldItems();


let paragraph = document.getElementById("sentence");


paragraph.addEventListener("mouseover", function() {

    highlight();

});


paragraph.addEventListener("mouseout", function() {

    returnItemsToDefault();

});