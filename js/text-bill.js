// get a reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector(".billTypeText");

//get a reference to the add button
const addToBillBtnElement = document.querySelector(".addToBillBtn");

const callsTotalElem = document.querySelector(".callTotalOne");
const smsTotalElem = document.querySelector('.smsTotalOne');
const totalCostElem = document.querySelector('.totalOne');
//create a variable that will keep track of the total bill
// these variables are global and defined outside of the Add button event listener.
var callsTotal = 0;
var smsTotal = 0;

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value.trim();

    // update the correct total
    if (billTypeEntered === "call" || billTypeEntered === "Call" || billTypeEntered === "CALL"){
        callsTotal += 2.75;
    }
    else if (billTypeEntered === "sms" || billTypeEntered === "SMS"){
        smsTotal += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);
    
    //color the total based on the criteria
    
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElem.classList.add("warning");
    }
}
//add an event listener for when the add button is pressed
addToBillBtnElement.addEventListener('click', textBillTotal);