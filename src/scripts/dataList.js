// Declare the data to display in the front-end
let dataArray = [
    "Frankenstein",
    "Vampire",
    "Chucky",
    "Max Verstappen",
    "Wednesday",
    "Voldermort",
    "T-Rex",
    "Gremlin Gizmo",
    "Joker",
    "Clowns"
];

dataArray.forEach((costume) => {
    console.log(costume);
});

let costumeContainer = document.getElementById("costumeContainer");

costumeContainer.innerText = "Hello World";