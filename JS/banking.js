// Add Event Handler In Deposit Button
document.getElementById('deposit-button').addEventListener('click',function(){
    // get the amount Deposited
    const inputDeposit = document.getElementById('input-deposit');
    const depositAmountText = inputDeposit.value;
    const depositAmount = parseFloat(depositAmountText);
    
    const totalDeposit = document.getElementById('total-deposit');
    const previousDepositAmountText = totalDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const newDepositAmount = previousDepositAmount + depositAmount;
    totalDeposit.innerText = newDepositAmount;

    // Total Balance
    const totalBalance = document.getElementById('total-balance');
    const previousBalanceAmountText = totalBalance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountText);
    const newBalanceAmount = previousBalanceAmount + depositAmount;
    totalBalance.innerText = newBalanceAmount;


    // clear input deposit field
    inputDeposit.value = '';
})

// Add Event Handler In Withdraw Button
document.getElementById('withdraw-button').addEventListener('click',function(){
    const inputWithdraw = document.getElementById('input-withdraw');
    const withdrawAmountText = inputWithdraw.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    // set withdraw Total
    const totalWithdraw = document.getElementById('total-withdraw');
    const previousWithdrawAmountText = totalWithdraw.innerText;
    const previousWithdrawAmount= parseFloat(previousWithdrawAmountText);
    const newWithdrawAmount = previousWithdrawAmount + withdrawAmount;
    totalWithdraw.innerText = newWithdrawAmount;
    
    // Total Balance
    const totalBalance = document.getElementById('total-balance');
    const previousBalanceAmountText = totalBalance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountText);
    const newBalanceAmount = previousBalanceAmount - withdrawAmount;
    totalBalance.innerText = newBalanceAmount;


    // clear input deposit field
    inputWithdraw.value = '';
})
