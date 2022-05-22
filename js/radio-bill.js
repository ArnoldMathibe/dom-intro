const callTotalTwoElem = document.querySelector('.callTotalTwo');
const smsTotalTwoElem = document.querySelector('.smsTotalTwo');
const totalTwoElem = document.querySelector('.totalTwo');
// get a reference to the sms or call radio buttons
const billItemTypeRadioElem = document.querySelector('.billItemTypeRadio');
//get a reference to the add button
const radioBillAddbtnElem = document.querySelector('.radioBillAddBtn');
//create a variable that will keep track of the total bill
var callsTotalTwo = 0;
var smsTotalTwo = 0;
//add an event listener for when the add button is pressed
radioBillAddbtnElem.addEventListener('click', radioBillTotal);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
function radioBillTotal(){
    // get the value entered in the billType textfield
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value;
        // billItemType will be 'call' or 'sms'
        // update the correct total
        if (billItemType === "call"){
            callsTotalTwo += 2.75;
        }
        else if (billItemType === "sms"){
            smsTotalTwo += 0.75;
        }
    }
    
    //update the totals that is displayed on the screen.
    callTotalTwoElem.innerHTML = callsTotalTwo.toFixed(2);
    smsTotalTwoElem.innerHTML = smsTotalTwo.toFixed(2);
    var totalCostTwo = callsTotalTwo + smsTotalTwo;
    totalTwoElem.innerHTML = totalCostTwo.toFixed(2);
    
    //color the total based on the criteria
    if (totalCostTwo >= 50){
        // adding the danger class will make the text red
        totalTwoElem.classList.add("danger");
    }else if (totalCostTwo >= 30){
        totalTwoElem.classList.add("warning");
    }
    
}