var greenBaysValue = 0;
var yellowBaysValue = 0;
var redBaysValue = 0;
var currentPercentage = 0;
var targetPercentage = 0;
var targetBays = 0;



///////// Current Percentage /////////

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

////////// Target Percentage //////////

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

            document.getElementById('targetPercentageOutput').textContent = targetBays.toFixed(1) + " bays to reach " + document.getElementById('targetPercentage').value + "%";
            
            
            calculateBaysPerEmployee(); 
        }
        
        else {

            document.getElementById('targetPercentageOutput').textContent = "---";
        
        }
    }

}

////////// Bays Per Employee ////////////

function calculateBaysPerEmployee() {

    let numEmployees = parseInt(document.getElementById('numEmployees').value);
    
    if (numEmployees >= 1) {
    
        document.getElementById('baysPerEmployeeOutput').textContent = (targetBays/Math.floor(numEmployees)).toFixed(1);

        //calculateTargetBaysTomorrow(); - Function disabled pending fix
    }
    else {
    
        document.getElementById('baysPerEmployeeOutput').textContent = "---";
    
    }
}

//////////// Max bays within 2.5/hr ////////////

function maxBays() {

    let numEmployees = parseInt(document.getElementById('numEmployees').value);

    if (numEmployees >= 1) {

        document.getElementById('maxBaysOutput').textContent = 2.5 * numEmployees * 6.5;

    }

    else {

        document.getElementById('maxBaysOutput').textContent = "---";

    }
}


/* ISSUE: Yellow bays turn red after 3 days, not 1. Green bays turn yellow after 12 days. (Depending on store tier)
Need to find a way to get the actual number of yellow bays that turn red the next day. */

///////////// Function disabled until fix is found ///////////////////

/*function calculateTargetBaysTomorrow() {
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
*/



// Update variable with value of greenBays text field
function updateGreen() {
    greenBaysValue = document.getElementById('greenBays').value;
    
    calculateCurrentPercentage();
    calculateTargetBays();
}

// Update variable with value of yellowBays text field
function updateYellow() {
    yellowBaysValue = document.getElementById('yellowBays').value;
    
    calculateCurrentPercentage();
    calculateTargetBays();
}

// Update variable with value of redBays text field
function updateRed() {
    redBaysValue = document.getElementById('redBays').value;
    
    calculateCurrentPercentage();
    calculateTargetBays();
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