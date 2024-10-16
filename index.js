window.addEventListener('DOMContentLoaded', (event) => {
    allInOne("donate-now-btn", "local-donation", "donation-amount", "Flood at Noakhali, Bangladesh");
    allInOne("donate-now-btn2", "local-donation2", "donation-amount2", "Flood at Feni, Bangladesh");
    allInOne("donate-now-btn3", "local-donation3", "donation-amount3", "Quota Movement Aid");
});

function allInOne(donateBtnId, localDonationId, donationAmountId, cause) {
    const donate = document.getElementById(donateBtnId);
    
    if (!donate) {
        console.error(`Button with ID ${donateBtnId} not found`);
        return;
    }

    donate.addEventListener('click', function() {
        const local = document.getElementById(localDonationId);
        const donationAmountElement = document.getElementById(donationAmountId);

        if (!donationAmountElement) {
            console.error(`Element with ID ${donationAmountId} not found`);
            return;
        }

        const donationAmount = parseFloat(donationAmountElement.value);

        if (isNaN(donationAmount) || donationAmount <= 0) {
            alert("Please enter a valid donation amount.");
            return;
        }

        // Update local donation total (increment)
        let currentLocalDonation = parseFloat(local.innerText) || 0;
        local.innerText = (currentLocalDonation + donationAmount).toFixed(2);

        console.log(`Donated Amount: ${donationAmount}`);

        // Update total donation balance (increment instead of decrement)
        let balance = parseFloat(document.getElementById('total-donation').innerText);

        if (isNaN(balance)) {
            alert("Invalid total balance.");
            return;
        }

        balance = balance - donationAmount;  // Increment total donation balance
        document.getElementById('total-donation').innerText = balance.toFixed(2); 
        console.log(`Updated Total Donation Balance: ${balance}`);

        document.getElementById(donationAmountId).value = '';

        // Add the donation to the history section
        addToHistory(donationAmount, cause);
    });

    function addToHistory(amount, cause) {
        const historyItem = document.createElement("div");
        historyItem.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500';
        historyItem.innerHTML = `
            <p class="text-lg text-black-500 font-bold">${amount} Taka is donated for ${cause}</p>
            <p class="text-xs text-gray-500">Date: ${new Date().toLocaleString()}</p>
        `;

        const historyContainer = document.getElementById('history-list');
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    }
}

const historyBtn = document.getElementById('history-btn');

historyBtn.addEventListener('click', function() {
    const mainSec = document.getElementById('mainSec');
    const historyList = document.getElementById('history-list');


    mainSec.classList.add('hidden');
    historyList.classList.remove('hidden');

     historyBtn.classList.add('bg-[#B4F461]','border','rounded-lg','px-2','py-1','border-black')
     document.getElementById('donation-btn').classList.remove('bg-[#B4F461]','border','rounded-lg','px-2','py-1','border-black')

});


const donationBtn = document.getElementById('donation-btn')

donationBtn.addEventListener('click',function(){

document.getElementById('mainSec').classList.remove('hidden')
donationBtn.classList.add('bg-[#B4F461]','border','rounded-lg','px-2','py-1','border-black')
document.getElementById('history-btn').classList.remove('bg-[#B4F461]','border','rounded-lg','px-2','py-1','border-black')
const historyList = document.getElementById('history-list');
historyList.classList.add('hidden');

})