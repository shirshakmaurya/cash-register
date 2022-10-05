var billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
// console.log(billAmount.value);
// console.log(cashGiven.value);
console.log("a value")

const noOfNotes = document.querySelectorAll(".no-of-notes")


const availableNotes = [2000,500,100,20,10,5,1]

checkButton.addEventListener("click", function cashAndBillValidator(){
    hideMessage();
    // console.log("clicked")
    if(billAmount.value > 0){
        if(parseInt(cashGiven.value) >= parseInt(billAmount.value)){
            const amountToReturn = cashGiven.value - billAmount.value;
            calculateChange(amountToReturn)

        }

        else{
            console.log(billAmount.value)
            console.log(cashGiven.value)
            showMessage("Invalid Bill Amount");
        }

    }
    else{
        // console.log(cashGiven.value);
        if( !(Number.isInteger(billAmount.value)) )
            showMessage("The bill Amount should be an Integer")
        else    
            showMessage( "The bill Amount should be positive");
    }
})

function calculateChange(amountToReturn){
    for(let i = 0;i<availableNotes.length;i++){
        const numberOfNotes = Math.trunc(amountToReturn/availableNotes[i]);
        amountToReturn %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
}