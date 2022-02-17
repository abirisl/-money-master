// all input value item

function inputBtn(total){
    const totalCost= document.getElementById(total +'-input');
    const totalValue= totalCost.value;
    const errorMessage= document.getElementById('error-input')
    if(totalValue>0){
        errorMessage.style.display='none';
        return totalValue;
       
    }
    else {
        errorMessage.style.display='block';
        return inputBtn();
    }
    
}
// total Amount item

function totalAmount(amount,totalCostAmount,){
    const totalcost= document.getElementById(amount+'-total');
    let totalCostInner= totalcost.innerText;
    totalcost.innerText=totalCostAmount;
    totalCostAmount= totalCostInner;
}



// calculate button.......

document.getElementById('btn').addEventListener('click', function totalBalanceValue(){

     const foodCost= inputBtn('food');
    const rentCost= inputBtn('rent');
    const colthCost= inputBtn('cloth');
    const totalCostAmount=parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(colthCost);
     totalAmount('expens',totalCostAmount);
    const incomeInput= inputBtn('income')
    const totalBalance= parseFloat(incomeInput) - totalCostAmount;
    totalAmount('balance', totalBalance); 
    const errorMessage= document.getElementById('error-msg');
    if(totalCostAmount>totalBalance){
        errorMessage.style.display='block';    
    }
    else{
        errorMessage.style.display='none';

    }
   
})

// save button.......

document.getElementById('save-btn').addEventListener('click', function(){

    const incomeInput= inputBtn('income');
    const saveInput= inputBtn('save');
    const saveTotal= parseFloat(incomeInput) * parseFloat(saveInput) / 100;


    totalAmount('save',saveTotal);

    const totalBalance= document.getElementById('balance-total').innerText;
    const saveTotalAmount= document.getElementById('save-total').innerText;
    let remainingTotal=  totalBalance - saveTotalAmount;
   
    if(remainingTotal>0){
        totalAmount('remaining', remainingTotal);
    }
   
})