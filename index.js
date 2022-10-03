var billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
console.log(billAmount.value);
console.log(cashGiven.value);
console.log("a value")

const noOfNotes = document.querySelectorAll(".no-of-notes")


const availableNotes = [2000,500,100,20,10,5,1]

checkButton.addEventListener("click", function cashAndBillValidator(){
    console.log("clicked")
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            const amountToReturn = cashGiven.value - billAmount.value;
            calculateChange(amountToReturn)

        }

        else{
            message.innerText = "Invalid Bill Amount";
        }

    }
    else{
        console.log(cashGiven.value);
        message.innerText = "The bill Amount should be positive";
    }
})

function calculateChange(amountToReturn){
    for(let i = 0;i<availableNotes.length;i++){
        const numberOfNotes = Math.trunc(amountToReturn/availableNotes[i]);
        amountToReturn %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}