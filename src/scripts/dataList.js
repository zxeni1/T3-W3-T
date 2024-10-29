// Declare the data to display in the front-end
let dataArray = [
    "Frankenstein",
    "Dracula",
    "Vampire",
    "Chucky",
    "Max Verstappen",
    "Wednesday",
    "Voldemort",
    "T-Rex",
    "Gremlin Gizmo",
    "Joker",
    "Clowns"
];

let costumesContainer = document.getElementById("costumeContainer");

// Create an unordered list tag
let costumesContainerList = document.createElement("ul");

function renderData() {
    // Removes the existing content from the element
    costumesContainerList.innerHTML = ""; // Use innerHTML to clear the list

    dataArray.forEach((costume) => {
        // Verify what we are working with
        console.log(costume);
    
        // Create the list element
        let newCostumeEntry = document.createElement("li");
        
        // Add the value to the HTML element
        newCostumeEntry.innerText = costume;
    
        // Add a button to each entry that removes it from the list
        let removeButton = document.createElement("button");
        removeButton.innerText = `Remove ${costume}`;
    
        removeButton.onclick = () => {
            removeCostumeFromDataList(costume);
            renderData(); // Re-render the list after removal
        };
        
        // Add the elements to the container
        newCostumeEntry.appendChild(removeButton);
        costumesContainerList.appendChild(newCostumeEntry);
    });
}

// Add the container to the HTML Page
costumesContainer.appendChild(costumesContainerList);

// Call renderData to initially populate the list
renderData();

function removeCostumeFromDataList(targetItemToRemove) {
    dataArray = dataArray.filter((costume) => costume !== targetItemToRemove);
}

