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
        currentPercentageOutput.textContent = currentPercentage.toFixed(1) + "%";
    }

    else {
        document.getElementById('currentPercentageOutput').textContent = "---";
    }
}

function calculateBaysPerEmployee() {

    let numEmployees = parseInt(document.getElementById('numEmployees').value);
    
    if (numEmployees >= 1) {
    
        document.getElementById('baysPerEmployeeOutput').textContent = (targetBays/Math.floor(numEmployees)).toFixed(1);

        calculateTargetBaysTomorrow();
    }
    else {
    
        document.getElementById('baysPerEmployeeOutput').textContent = "---";
    
    }
}

function calculateTargetBays() {
    // Current percentage has already been calculated; bay numbers have been parsed and set
    if (currentPercentage > 1) {
    
        let total = parseInt(greenBaysValue) + parseInt(yellowBaysValue) + parseInt(redBaysValue);
        
        let completedBays = parseInt(greenBaysValue) + parseInt(yellowBaysValue);

        // Store target percentage user input
        targetPercentage = parseInt(document.getElementById("targetPercentage").value);

        if (targetPercentage > currentPercentage) {
            
            targetBays = ((targetPercentage/100) * total) - completedBays;
            
            // Update page with target bays
            document.getElementById('targetPercentageOutput').textContent = targetBays.toFixed(1);
            
        }
        else {

            document.getElementById('targetPercentageOutput').textContent = "---";
        
        }
    }

}

function calculateTargetBaysTomorrow() {
    // Target bays are calculated
    let numEmployees = parseInt(document.getElementById('numEmployees').value);

    if (targetBays > 1) {
        
        let total = parseInt(greenBaysValue) + parseInt(yellowBaysValue) + parseInt(redBaysValue);
        let targetBaysNextDay = ((targetPercentage/100) * total) - parseInt(greenBaysValue)
        document.getElementById('targetBaysNextDayOutput').textContent = targetBaysNextDay;
        
        if (numEmployees >= 1) {

            // Calculate number of bays per employee needed to reach by tomorrow
            document.getElementById('baysPerEmployeeNextDayOutput').textContent = (targetBaysNextDay/Math.floor(numEmployees)).toFixed(1);
        
        }
        else {
        
            document.getElementById('baysPerEmployeeNextDayOutput').textContent = "---";
        
        }
        
    }
}

function maxBays() {
    let numEmployees = parseInt(document.getElementById('numEmployees').value);

    if (numEmployees > 1) {
        document.getElementById('maxBaysOutput').textContent = 2.5 * numEmployees * 8;
    }
    else {
        document.getElementById('maxBaysOutput');
    }
}


// Update variable with value of greenBays text field
function updateGreen() {
    greenBaysValue = document.getElementById('greenBays').value;
    
    calculateCurrentPercentage();
}

// Update variable with value of yellowBays text field
function updateYellow() {
    yellowBaysValue = document.getElementById('yellowBays').value;
    
    calculateCurrentPercentage();
}

// Update variable with value of redBays text field
function updateRed() {
    redBaysValue = document.getElementById('redBays').value;
    
    calculateCurrentPercentage();
}




/* 

// Update variable with value of targetPercentage text field
function updateTargetPercentage() {
    if (currentPercentage > 1) {
        targetPercentage = document.getElementById("targetPercentage").value;
        if (targetPercentage > currentPercentage) {
            document.getElementById("targetPercentageOutput").textContent = targetPercentage;
        }
    }
}
*/