// ==========================================
// EXERCISE 1 - COLORS
// ==========================================

const colors1 = [
    "Blue",
    "Green",
    "Red",
    "Orange",
    "Violet",
    "Indigo",
    "Yellow"
];

colors1.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`);
});

if (colors1.includes("Violet")) {
    console.log("Yeah");
} else {
    console.log("No...");
}


// ==========================================
// EXERCISE 2 - COLORS #2
// ==========================================

const colors2 = [
    "Blue",
    "Green",
    "Red",
    "Orange",
    "Violet",
    "Indigo",
    "Yellow"
];

const ordinal = ["th", "st", "nd", "rd"];

colors2.forEach((color, index) => {

    let number = index + 1;

    let suffix =
        number === 1 ? ordinal[1] :
        number === 2 ? ordinal[2] :
        number === 3 ? ordinal[3] :
        ordinal[0];

    console.log(`${number}${suffix} choice is ${color}.`);
});


// ==========================================
// EXERCISE 3 - ANALYZING
// ==========================================

// ------ 1 ------

const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = [
    "bread",
    ...vegetables,
    "chicken",
    ...fruits
];

console.log(result);

// Output:
// [
//   'bread',
//   'carrot',
//   'potato',
//   'chicken',
//   'apple',
//   'orange'
// ]


// ------ 2 ------

const country = "USA";

console.log([...country]);

// Output:
// ['U', 'S', 'A']


// ------ BONUS ------

let newArray = [...[,,]];

console.log(newArray);

// Output:
// [undefined, undefined]


// ==========================================
// EXERCISE 4 - EMPLOYEES
// ==========================================

const users = [
    {
        firstName: "Bradley",
        lastName: "Bouley",
        role: "Full Stack Resident"
    },
    {
        firstName: "Chloe",
        lastName: "Alnaji",
        role: "Full Stack Resident"
    },
    {
        firstName: "Jonathan",
        lastName: "Baughn",
        role: "Enterprise Instructor"
    },
    {
        firstName: "Michael",
        lastName: "Herman",
        role: "Lead Instructor"
    },
    {
        firstName: "Robert",
        lastName: "Hajek",
        role: "Full Stack Resident"
    },
    {
        firstName: "Wes",
        lastName: "Reid",
        role: "Instructor"
    },
    {
        firstName: "Zach",
        lastName: "Klabunde",
        role: "Instructor"
    }
];


// 1. map()

const welcomeStudents = users.map((user) => {
    return `Hello ${user.firstName}`;
});

console.log(welcomeStudents);


// 2. filter()

const fullStackResidents = users.filter((user) => {
    return user.role === "Full Stack Resident";
});

console.log(fullStackResidents);


// 3. Bonus - filter + map

const residentLastNames = users
    .filter((user) => user.role === "Full Stack Resident")
    .map((user) => user.lastName);

console.log(residentLastNames);


// ==========================================
// EXERCISE 5 - STAR WARS
// ==========================================

const epic = [
    "a",
    "long",
    "time",
    "ago",
    "in a",
    "galaxy",
    "far far",
    "away"
];

const starWarsSentence = epic.reduce((sentence, word) => {
    return sentence + " " + word;
});

console.log(starWarsSentence);


// ==========================================
// EXERCISE 6 - EMPLOYEES #2
// ==========================================

const students = [
    {
        name: "Ray",
        course: "Computer Science",
        isPassed: true
    },
    {
        name: "Liam",
        course: "Computer Science",
        isPassed: false
    },
    {
        name: "Jenner",
        course: "Information Technology",
        isPassed: true
    },
    {
        name: "Marco",
        course: "Robotics",
        isPassed: true
    },
    {
        name: "Kimberly",
        course: "Artificial Intelligence",
        isPassed: false
    },
    {
        name: "Jamie",
        course: "Big Data",
        isPassed: false
    }
];


// 1. Students that passed

const passedStudents = students.filter((student) => {
    return student.isPassed === true;
});

console.log(passedStudents);


// 2. Bonus - filter + forEach

students
    .filter((student) => student.isPassed === true)
    .forEach((student) => {
        console.log(
            `Good job ${student.name}, you passed the course in ${student.course}`
        );
    });