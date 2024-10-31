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

function renderData() {
    // Create an unordered list tag
    let costumesContainerList = document.createElement("ul");
    // Removes the existing content from the element
    costumesContainer.innerText = "";

    dataArray.forEach((costume) => {
        // Verify what we are working with
        console.log(costume);
    
        // Create the list element
        let newCostumeEntry = document.createElement("li");
        
        // Add the value to the HTML element
        newCostumeEntry.innerText = costume;
    
        // Add a button to each entry that removes it from the list
        let removeButton = document.createElement("button");
    
        // Add a placeholder value/ name to the button
        // removeButton.innerText = "Remove" + costume;
        removeButton.innerText = `Remove ${costume}`;
    
        removeButton.onclick = (() => removeCostumeFromDataList(costume));
        // Add the element to the container
        costumesContainerList.appendChild(newCostumeEntry);
    
        // Add the element to the container
        newCostumeEntry.appendChild(removeButton);

    });
    // Add the container to the HTML Page
    costumesContainer.appendChild(costumesContainerList);
}


function removeCostumeFromDataList (targetItemToRemove) {
    dataArray = dataArray.filter((costume) => costume != targetItemToRemove);
    renderData();
}

function addCostumeToDataList(event, targetInputId) {
    // Find the form element that needs validation
    let formElement = document.getElementById("costumesInputForm");

    // Use the form element.checkValidity() method to save the result
    let isFormValid = formElement.checkValidity();

    // Do a conditional based on the result
    if (!isFormValid){
        formElement.reportValidity();
        return;
    }

    // Prevent the form from doing its default behaviour (refreshing the page)
    event.preventDefault();
    console.log("Add costume to the list function is running!");

    // Find the input text field based on targetInputId
    let targetTextInput = document.getElementById(targetInputId);

    // Get the value from the field
    console.log(targetTextInput.value);
    // Append or push to the dataArray
    dataArray.push(targetTextInput.value);

    // Alert after submit - method 1
    // alert("Submitted a new entry: " + targetTextInput.value);

    // Clear out the input field text
    targetTextInput.value = "";

    // Focus on the text field to enable quick data entry
    targetTextInput.focus();

    // Alert after submit - method 2
    alert("Submitted a new entry: " + dataArray[dataArray.length - 1]);

    // renderData function call to update the page
    renderData();
}

// Find the form from the event
let formInputButton = document.getElementById("formInputButton");
formInputButton.addEventListener("click", (event) => addCostumeToDataList(event, "costumeInputText"));