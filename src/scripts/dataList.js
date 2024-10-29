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

let costumeContainer = document.getElementById("costumeContainer");

// Create an unordered list tag
let costumeContainerList = document.createElement("ul");


// costumeContainer.innerText = "Hello World";

dataArray.forEach((costume) => {
    // Verify what we are working with
    console.log(costume);

    // Create the list element
    let newCostumeEntry = document.createElement("li");

    // Add the value to html element 
    newCostumeEntry.innerText = costume;

    // Add a buttpm to each entry to remove
    let removeButton = document.createElement("button");

    // Add a placeholder value or name to the button
    removeButton.innerText = `Remove ${costume}`;

    // Add the element to the container
    costumeContainerList.appendChild(newCostumeEntry);

    // Remove button
    costumeContainerList.appendChild(removeButton);
});

// Add the container to the HTML page
costumeContainer.appendChild(costumeContainerList);