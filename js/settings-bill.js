// get a reference to the sms or call radio buttons
const billItemTypeWithSettingsElem = document.querySelector(".billItemTypeWithSettings");
// get refences to all the settings fields
const callCostSettingElem = document.querySelector(".callCostSetting");
const smsCostSettingElem = document.querySelector(".smsCostSetting");
const warningLevelSettingElem = document.querySelector(".warningLevelSetting");
const criticalLevelSettingElem = document.querySelector(".criticalLevelSetting");

const callTotalSettingsElem = document.querySelector(".callTotalSettings");
const smsTotalSettingsElem = document.querySelector(".smsTotalSettings");
const totalSettingsElem = document.querySelector(".totalSettings");
//get a reference to the add button
const addBtnSettingsElem = document.querySelector(".addBtnSettings");
//get a reference to the 'Update settings' button
const updateSettingsElem = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
var callCostSetting = 0;
var smsCostSetting = 0;
var warningLevelSetting = 0;
var criticalLevelSetting = 0;
// create a variables that will keep track of all three totals.
var callTotalSettings = 0;
var smsTotalSettings = 0;
var totalCostSettings = 0;
//add an event listener for when the 'Update settings' button is pressed
updateSettingsElem.addEventListener('click', settingsUpdateBill);
//add an event listener for when the add button is pressed
addBtnSettingsElem.addEventListener('click',settingsAddBill);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
function settingsUpdateBill(){
    var callCost = callCostSettingElem.value;
    var smsCost = smsCostSettingElem.value;
    var warningLevel = warningLevelSettingElem.value;
    var criticalLevel = criticalLevelSettingElem.value;

    if (callCost) {
        callCostSetting = Number(callCost);
    }
    if (smsCost) {
        smsCostSetting = Number(smsCost);
    }
    if (warningLevel) {
        warningLevelSetting = Number(warningLevel);
    }
    if (criticalLevel) {
        criticalLevelSetting = Number(criticalLevel);
    }
    totalSettingsElem.classList.remove("warning");
    totalSettingsElem.classList.remove("danger");
    if (warninglevelSetting && criticalLevelSetting) {
        if (totalCostSettings >= criticalLevelSetting) {
            totalSettingsElem.classList.add("danger");
        }
        else if (totalCostSettings >= warningLevelSetting && totalCostSettings <= criticalLevelSetting) {
            totalSettingsElem.classList.add("warning");
        }
    }
}
function settingsAddBill(){

    var settingsCheckedRadio = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (settingsCheckedRadio) {
        var billItemTypeWithSettings = settingsCheckedRadio.value;
        if (billItemTypeWithSettings === "call") {
            callTotalSettings += callCostSetting;
        }
        else if (billItemTypeWithSettings === "sms") {
            smsTotalSettings += smsCostSetting;
        }
    }
    callTotalSettingsElem.innerHTML = callTotalSettings.toFixed(2);
    smsTotalSettingsElem.innerHTML = smsTotalSettings.toFixed(2);
    var totalCostSettings = callTotalSettings + smsTotalSettings;
    totalSettingsElem.innerHTML = totalCostSettings.toFixed(2);
    
    totalSettingsElem.classList.remove("warning");
    totalSettingsElem.classList.remove("danger");
    if (totalCostSettings >= criticalLevelSetting) {
        totalSettingsElem.classList.add("danger");
    }
     else if (totalCostSettings >= warningLevelSetting && totalCostSettings <= criticalLevelSetting) {
        totalSettingsElem.classList.add("warning");
    }
}
