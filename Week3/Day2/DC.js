// Exercise - Solar System

const planets = [
    {
        name: "Mercury",
        color: "gray",
        moons: 0
    },
    {
        name: "Venus",
        color: "orange",
        moons: 0
    },
    {
        name: "Earth",
        color: "blue",
        moons: 1
    },
    {
        name: "Mars",
        color: "red",
        moons: 2
    },
    {
        name: "Jupiter",
        color: "brown",
        moons: 95
    },
    {
        name: "Saturn",
        color: "gold",
        moons: 146
    },
    {
        name: "Uranus",
        color: "lightblue",
        moons: 28
    },
    {
        name: "Neptune",
        color: "darkblue",
        moons: 16
    }
];

const section = document.querySelector(".listPlanets");

for (let planet of planets) {

    // Create planet
    let planetDiv = document.createElement("div");

    planetDiv.classList.add("planet");

    planetDiv.style.backgroundColor = planet.color;

    planetDiv.textContent = planet.name;

    // Create moons
    for (let i = 0; i < planet.moons; i++) {

        let moon = document.createElement("div");

        moon.classList.add("moon");

        moon.style.top = Math.random() * 100 + "px";
        moon.style.left = Math.random() * 100 + "px";

        planetDiv.appendChild(moon);
    }

    // Add planet to section
    section.appendChild(planetDiv);
}