var greenBaysValue = 0;
var yellowBaysValue = 0;
var redBaysValue = 0;
var currentPercentage = 0;
var targetPercentage = 0;
var targetBays = 0;



//////////// Current Percentage ////////////

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

//////////// Target Percentage ////////////

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

            document.getElementById('targetPercentageOutput').textContent = Math.ceil(targetBays) + " bays to reach " + document.getElementById('targetPercentage').value + "%";
            
            calculateBaysPerEmployee(); 
        }
        
        else {

            document.getElementById('targetPercentageOutput').textContent = "---";
        
        }
    }

}

//////////// Bays Per Employee ////////////

function calculateBaysPerEmployee() {

    let numEmployees = parseInt(document.getElementById('numEmployees').value);
    
    if (numEmployees >= 1) {
    
        document.getElementById('baysPerEmployeeOutput').textContent = Math.ceil(targetBays/Math.floor(numEmployees));

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

        document.getElementById('maxBaysOutput').textContent = Math.ceil(2.5 * numEmployees * 7.5);

    }

    else {

        document.getElementById('maxBaysOutput').textContent = "---";
        

    }
}

//////////// Percentage Effect ////////////

function percentageEffect() {
    let yellowBaysChanging = parseInt(document.getElementById('nextDayBays').value);
    let numEmployees = parseInt(document.getElementById('numEmployees').value);

    if (greenBaysValue >= 1 && yellowBaysValue >= 1 && redBaysValue >=1 && yellowBaysChanging >= 1 && numEmployees >= 1) {
        let totalBays = parseInt(greenBaysValue) + parseInt(yellowBaysValue) + parseInt(redBaysValue);
        let totalGreen = parseInt(greenBaysValue) + parseInt(yellowBaysValue) - yellowBaysChanging;
        let nextDayPercentage = ((totalGreen/totalBays) * 100);
        
        // Total negative effect 

        let negativeEffect = currentPercentage - nextDayPercentage;   
        document.getElementById('nextDayEffectOutput').textContent = "-" + negativeEffect.toFixed(1) + "%";
        

        // Bays to maintain target percentage
        document.getElementById('targetBaysNextDayOutput').textContent = Math.ceil(targetBays + yellowBaysChanging);
        document.getElementById('baysPerEmployeeNextDayOutput').textContent = Math.ceil((targetBays + yellowBaysChanging) / numEmployees);
        


    }
    else {
        document.getElementById('nextDayEffectOutput').textContent = "---";
        document.getElementById('targetBaysNextDayOutput').textContent = "---";
        document.getElementById('baysPerEmployeeNextDayOutput').textContent = "---";
    }
}

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
