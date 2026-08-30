const form = document.getElementById("userForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;

    const user = {
        name: name,
        lastName: lastName
    };

    const jsonUser = JSON.stringify(user);

    document.getElementById("result").textContent = jsonUser;
});