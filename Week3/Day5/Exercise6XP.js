(function(numberOfChildren, partnerName, location, jobTitle) {

    let fortune = document.getElementById("fortune");

    fortune.textContent =
        `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numberOfChildren} kids.`;

})(2, "Sarah", "London", "Developer");