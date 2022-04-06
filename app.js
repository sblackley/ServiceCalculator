// Global variables, may change if let works within scope
var greenBaysValue = 0;
var yellowBaysValue = 0;
var redBaysValue = 0;
var currentPercentage = 0;
var targetPercentage = 0;
var targetBays = 0;



// Use bay values to calculate current service percentage
function calculateCurrentPercentage() {
    let total = parseInt(greenBaysValue) + parseInt(yellowBaysValue) + parseInt(redBaysValue);
    let green = parseInt(greenBaysValue) + parseInt(yellowBaysValue);
   
    if (greenBaysValue > 1 && yellowBaysValue > 1 && redBaysValue > 1) {


        currentPercentageOutput = document.getElementById('currentPercentageOutput');
        currentPercentage = ((green/total) * 100);
        currentPercentageOutput.textContent = currentPercentage;
        
    }
    else {
        document.getElementById('currentPercentageOutput').textContent = "";
    }
}

function calculateBaysPerEmployee() {
    let numEmployees = parseInt(document.getElementById('numEmployees').value);
    
    if (numEmployees >= 1) {
        document.getElementById('baysPerEmployeeOutput').textContent = targetBays/Math.floor(numEmployees);
    }
}

function calculateTargetBays() {

    if (currentPercentage > 1) {
        let total = parseInt(greenBaysValue) + parseInt(yellowBaysValue) + parseInt(redBaysValue);
        let completedBays = greenBaysValue;

        targetPercentage = parseInt(document.getElementById("targetPercentage").value);
        if (targetPercentage > currentPercentage) {
            targetBays = ((targetPercentage/100) * total) - completedBays;
            console.log(targetBays);
            parseInt(document.getElementById('targetPercentageOutput').textContent) = targetBays;
        }
        else {
            document.getElementById('targetPercentageOutput').textContent = "";
        }
    }

}

// Update variable with value of targetPercentage text field
function updateTargetPercentage() {
    if (currentPercentage > 1) {
        targetPercentage = document.getElementById("targetPercentage").value;
        if (targetPercentage > currentPercentage) {
            document.getElementById("targetPercentageOutput").textContent = targetPercentage;
        }
    }
}

// Update variable with value of greenBays text field
function updateGreen() {
    greenBaysValue = document.getElementById('greenBays').value;
    console.log(greenBaysValue);
    calculateCurrentPercentage();
}

// Update variable with value of yellowBays text field
function updateYellow() {
    yellowBaysValue = document.getElementById('yellowBays').value;
    console.log(yellowBaysValue);
    calculateCurrentPercentage();
}

// Update variable with value of redBays text field
function updateRed() {
    redBaysValue = document.getElementById('redBays').value;
    console.log(redBaysValue);
    calculateCurrentPercentage();
}

// Perform after page is completely loaded
window.onload = function() {
    
   
}



/*  const greenBays = document.getElementById("greenBays");
    const yellowBays = document.getElementById("yellowBays");
    const redBays = document.getElementById("redBays");
    const greenBaysOutput = document.getElementById("greenBaysOutput");
    const yellowBaysOutput = document.getElementById("yellowBaysOutput");
    const redBaysOutput = document.getElementById("redBaysOutput"); 
    
    if (greenBays) {
        greenBays.addEventListener('input', e => {
            greenBaysOutput.textContent = e.target.value;
            console.log(greenBays.value);
        });
    }

    if (yellowBays) {
        yellowBays.addEventListener('input', e => {
            yellowBaysOutput.textContent = e.target.value;
        });
    }

    if (redBays) {
        redBays.addEventListener('input', e => {
            redBaysOutput.textContent = e.target.value;
        });
    }
    
    let currentPercentageOutput = document.getElementById("currentPercentage");
    let currentPercentage = (greenBays.value + yellowBays.value) / (greenBays.value + yellowBays.value + redBays.value) * 100;
    currentPercentageOutput.textContent = currentPercentage;
    
    */



