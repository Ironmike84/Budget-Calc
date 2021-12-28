let bar1 = document.getElementById("bar1");
let bar2 = document.getElementById("bar2");
let bar3 = document.getElementById("bar3");
let bar4 = document.getElementById("bar4");
let housing = document.getElementById("housing").value;
let food = document.getElementById("food").value;
let utilities = document.getElementById("utilities").value;
let car = document.getElementById("car").value;
let bar1Button = document.getElementById("bar1Button");
let foodButton = document.getElementById("foodButton");
let utilitiesButton = document.getElementById("utilitiesButton");
let carButton = document.getElementById("carButton");
let total= document.getElementById("total").value;
let stamp = document.getElementById("stamp");
let housingTotal = document.getElementById("housingTotal");
let foodTotal = document.getElementById("foodTotal");
let utilTotal = document.getElementById("utilTotal");
let carTotal = document.getElementById("carTotal");
let totalExpenses = document.getElementById("totalExpenses");
let totalBar = document.getElementById("totalBar");
let dtiBar = document.getElementById("dtiBar");
let clear = document.getElementById("clear");
let totalIncome = document.getElementById("totalIncome");
let totalSavings = document.getElementById("savingsTotal").value;
let yearsButton = document.getElementById("yearsButton");
let years = document.getElementById("years").value;
let netButton = document.getElementById("netButton");
let retirmentCalc = document.getElementById("retirementCalc");



//-----------------------------------------------------------------------------------------------OBJECTS

let budget = [{
    total:"",
    housing:"",
    food:"",
    utilities:""
}]


let totals = [
    {
        totalHousing:"",
        totalFood:"",
        totalUtilities:"",
        totalCar:"",
        totalSavings:"",
}]


stamp.addEventListener("click", function(){
    let total= document.getElementById("total").value;
    document.getElementById("totalDollars").append(total);
    budget.push({total:total})
    totalIncome.style.width = (`${total/100}em`)
    totalIncome.append(`$${total}`)
})
//-----------------------------------------------------------------------------------------------DETAILS BOXES
bar1Button.addEventListener("click", function(){
appendHousing()
})

 foodButton.addEventListener("click", function(){
    appendFood()
 })

 utilitiesButton.addEventListener("click", function(){
     appendUtil()
 })

 carButton.addEventListener("click", function(){
    appendCar()
})

totalExpenses.addEventListener("click", function(){
        getTotal()
 })

//--------------------------------------------------------------------------------------------BAR APPEND FINANCE DETAILS

function appendHousing(){
    let total= parseInt(document.getElementById("total").value);
    let housing = parseInt(document.getElementById("housing").value);
    let housingCost =  total - housing 
    let percentage = Math.floor((housing / total) * 100)
    let box1 = document.getElementById("box1");

    console.log(`${percentage}%`)
    console.log(`Housing Cost:${housingCost}`);
    bar1.style.width = (`${percentage}%`);
    bar1.append(`${percentage}%`);
    housingTotal.append(`$${housingCost}`)
    budget.push({housing:housingCost})
    totals.push({totalHousing:housing})
    box1.append(` The total housing cost is $${housing}, Which is ${percentage}% of your total income.`)
 

}

function appendFood(){
 let afterHousing = budget[2].housing;
 let food = document.getElementById("food").value;
 let total= parseInt(document.getElementById("total").value);
 let box2 = document.getElementById("box2");
 let afterFood = afterHousing - food;
 let percentage = Math.floor((food / total) * 100); 
    
    bar2.style.width = (`${percentage}%`);
    bar2.append(`${percentage}%`)
    foodTotal.append(`$${afterFood}`)
    console.log(afterFood)
 console.log(`${percentage}%`)
 budget.push({food:afterFood})
 totals.push({foodTotal:food})
 box2.append(` The total housing cost is $${food}, Which is ${percentage}% of your total income.`)
}

function appendUtil(){
    let afterFood = budget[3].food;
    let utilities = document.getElementById("utilities").value;
    let total= parseInt(document.getElementById("total").value);
    let box3 = document.getElementById("box3");
    let afterUtil = afterFood - utilities
    let percentage = Math.floor((utilities / total) * 100);

    bar3.style.width = (`${percentage}%`);
    bar3.append(`${percentage}%`)
    utilTotal.append(`$${afterUtil}`);
    budget.push({utilities:afterUtil})
    totals.push({totalUtilities:utilities})
    box3.append(` The total housing cost is $${utilities}, Which is ${percentage}% of your total income.`)
}

function appendCar(){
    let afterUtil = budget[4].utilities;
    let car = document.getElementById("car").value;
    let total= parseInt(document.getElementById("total").value);
    let box4 = document.getElementById("box4");
    let afterCar = afterUtil - car
    let percentage = Math.floor((car / total)* 100)

    bar4.style.width = (`${percentage}%`);
    bar4.append(`${percentage}%`)
    carTotal.append(`$${afterCar}`)
    budget.push({car:car})
    totals.push({totalCar:car})
    box4.append(` The total housing cost is $${car}, Which is ${percentage}% of your total income.`)
}
//-----------------------------------------------------------------------------------------------TOTAL SECTION

function getTotal(){
    let housing = parseInt(document.getElementById("housing").value);
    let utilities = parseInt(document.getElementById("utilities").value);
    let car = parseInt(document.getElementById("car").value);
    let food = parseInt(document.getElementById("food").value);
    let totalBar = document.getElementById("totalBar");
    let total= parseInt(document.getElementById("total").value);
    let totalExpense = parseInt(housing + utilities + car + food)
    let percentage = Math.floor((totalExpense / total) * 100)
    let totalIncome = document.getElementById("incomeTotal");
    let expenseTotal = document.getElementById("expenseTotal");
    let yearlySaving = document.getElementById("yearlySavings");

    let dti = totalExpense / total
    
    dtiBar.style.width = (`${dti * 10}rem`)
    dtiBar.append(`${parseInt(dti*100)}%`)
    console.log(`DTI:${dti}`);
    console.log(totalExpense);
    totalBar.append(`$${totalExpense} -  ${percentage}%`)
    totalBar.style.width = (`${totalExpense/100}em`)    
    totals.push({totalExpense:totalExpense})
    let yearlyIncome=(total*12)
    let yearlyExpense=(totalExpense*12)
    let yearlySavings= yearlyIncome-yearlyExpense;

    totalIncome.append(` $${yearlyIncome}`)
    expenseTotal.append(` $${yearlyExpense}`)
    yearlySaving.append(` $${yearlySavings}`)
    totals.push({totalSavings:yearlySavings})
}
//---------------------------------------------------------------------------------------------- ADD MORE FINANCE EVENTS


//----------------------------------------------------------------------------------------------HOUSING
//-------------------------------------------HOUSING View TOGGLE BUTTON

let housingButton = document.getElementById('houseButton');
housingButton.addEventListener('click', function(){
    let housingAddTitleToggle = document.getElementById('housingAddTitleToggle');
    let housingAdd = document.getElementById('housingAdd');
    housingAdd.classList.toggle('housingHide');
    housingButton.classList.toggle('houseButtonToggle');
    
    housingAddTitleToggle.classList.toggle('housingAddTitle');

    
})

//-------------------------------------------------------------------------------------ADD & SEND HOUSING To INPUT
let addHousing = document.getElementById('addHousing');
addHousing.addEventListener('click', function(){
    let maintainence = parseInt(document.getElementById('maintainance').value);
    let propertyTaxes = parseInt(document.getElementById('propertyTaxes').value);
    let mortgageCost = parseInt(document.getElementById('mortgageCost').value);
    let totalHousing = document.querySelector('#housing');
    
    let total = maintainence + propertyTaxes+ mortgageCost
    totalHousing.value = total
    console.log(totalHousing)
})

//---------------------------------------------------------------------------------------------------------FOOD
//-------------------------------------------Food View TOGGLE BUTTON
let foodButton2 = document.getElementById('foodButton2');
foodButton2.addEventListener('click', function(){
    let foodAddTitleToggle = document.getElementById('foodAddTitleToggle');
    let foodAdd = document.getElementById('foodAdd');
    foodAdd.classList.toggle('foodHide');
    foodButton2.classList.toggle('foodButtonToggle');
    foodAddTitleToggle.classList.toggle('foodAddTitle');
    
})

//-------------------------------------------------------------------------------------ADD & SEND HOUSING To INPUT
let addFood = document.getElementById('addFood');
addFood.addEventListener('click', function(){
    let grocery = parseInt(document.getElementById('grocery').value);
    let dining = parseInt(document.getElementById('dining').value);
    let snacks = parseInt(document.getElementById('snacks').value);
    let alchohol = parseInt(document.getElementById('alchohol').value);
    let totalFood = document.querySelector('#food');

    let foodTotal = grocery + dining + snacks + alchohol
    totalFood.value = foodTotal;
    
    
})
//-----------------------------------------------------------------------------------------------------------UTILITIES
//-------------------------------------------Food View TOGGLE BUTTON
let utilButton = document.getElementById('utilButton');
utilButton.addEventListener('click', function(){
    let utilAddTitleToggle = document.getElementById('utilAddTitleToggle');
    let utilAdd = document.getElementById('utilAdd');
    utilAdd.classList.toggle('utilHide');
    utilButton.classList.toggle('utilButtonToggle');
    utilAddTitleToggle.classList.toggle('utilAddTitle');
    
})

//-------------------------------------------------------------------------------------ADD & SEND HOUSING To INPUT
let addUtil = document.getElementById('addUtil');
addUtil.addEventListener('click', function(){
    let electric = parseInt(document.getElementById('electric').value);
    let gas = parseInt(document.getElementById('gas').value);
    let water = parseInt(document.getElementById('water').value);
    let cable = parseInt(document.getElementById('cable').value);
    let totalUtil = document.querySelector('#utilities');


    let utilTotal = electric + gas + water + cable
    totalUtil.value = utilTotal;
    
    
})

//-----------------------------------------------------------------------------------------------------------CAR
//-------------------------------------------Food View TOGGLE BUTTON
let car2Button = document.getElementById('car2Button');
car2Button.addEventListener('click', function(){
    let carAddTitleToggle = document.getElementById('carAddTitleToggle');
    let carAdd = document.getElementById('carAdd');
    carAdd.classList.toggle('carHide');
    car2Button.classList.toggle('carButtonToggle');
    carAddTitleToggle.classList.toggle('carAddTitle');
    
})

//-------------------------------------------------------------------------------------ADD & SEND HOUSING To INPUT
let addCar = document.getElementById('addCar');
addCar.addEventListener('click', function(){
    let carGas = parseInt(document.getElementById('carGas').value);
    let maint = parseInt(document.getElementById('maint').value);
    let tires = parseInt(document.getElementById('tires').value);
    let payment = parseInt(document.getElementById('payment').value);
    let totalCar = document.getElementById('car');

    let carTotal = carGas+ maint + tires + payment
    totalCar.value = carTotal

    
})

//-----------------------------------------------------------------------------------------------BAR EVENTS

bar1.addEventListener("click", function(){
    // let totalHousing = totals[1].totalHousing
    box1.style.display = "block"
    // alert(`Total Housing is: $${totalHousing} `);
})

bar1.addEventListener("mouseleave", function(){
    box1.style.display = "none"
})

bar2.addEventListener("click", function(){
    // let totalFood = totals[2].foodTotal;
    box2.style.display = "block"
    // alert(`Total Food is: $${totalFood} `);
})

bar2.addEventListener("mouseleave", function(){
    box2.style.display = "none"
})

bar3.addEventListener("click", function(){
    // let totalUtil = totals[3].totalUtilities;
    box3.style.display = "block"
    // alert(`Total Utilities is: $${totalUtil} `);
})

bar3.addEventListener("mouseleave", function(){
    box3.style.display = "none"
})

bar4.addEventListener("click", function(){
    let box4 = document.getElementById("box4");
        box4.style.display = "block"
})

bar4.addEventListener("mouseleave", function(){
    let box4 = document.getElementById("box4");
    box4.style.display = "none"
})


//-----------------------------------------------------------------------------------------------

totalBar.addEventListener("click", function(){
    let totalExpense = totals[5].totalExpense;
    alert(`Total Expenses is: $${totalExpense}`);
})

//-----------------------------------------------------------------------------------------------CLEAR BUTTON

clear.addEventListener("click", function(){
    let inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = " ");
    document.getElementById("totalDollars").innerText = ("$ ")
    document.getElementById("housingTotal").innerText = ("Total: ")
    document.getElementById("foodTotal").innerText = ("Total: ")
    document.getElementById("utilTotal").innerText = ("Total: ")
    document.getElementById("carTotal").innerText = ("Total: ")
    bar1.innerText = "Housing "
    bar1.style.width = "60px"
    bar2.innerText = "Food "
    bar2.style.width = "60px"
    bar3.innerText = "Utilities "
    bar3.style.width = "60px"
    bar4.innerText = "Car "
    bar4.style.width = "60px"
    totalBar.style.width = "10px"
    totalBar.innerText = " "
    totalIncome.style.width = "10px"
    totalIncome.innerText = " "
    dtiBar.innerText = " "
    dtiBar.style.width = "10px"
})

//-----------------------------------------------------------------------------------------------SAVING CALCULATOR
yearsButton.addEventListener("click", function(){
    let years = document.getElementById("years").value;
    let savingsTotal = totals[6].totalSavings;
    let savingsBox = document.getElementById("savingsTotal")

    let totalSavings = savingsTotal * years
    console.log(totalSavings)
    savingsBox.append(`$${totalSavings}`)
})
//-----------------------------------------------------------------------------------------------NET WORTH CALCULATOR
netButton.addEventListener("click", function(){
    let credit = parseInt(document.getElementById("credit").value);
    let mortgage = parseInt(document.getElementById("mortgage").value);
    let carDebt = parseInt(document.getElementById("carDebt").value);
    let medical =  parseInt(document.getElementById("medical").value);
    let realEstate = parseInt(document.getElementById("realEstate").value);
    let property = parseInt(document.getElementById("property").value);
    let investments = parseInt(document.getElementById("investments").value);
    let cash = parseInt(document.getElementById("cash").value);
    let yourNet = document.getElementById("yourNet");
    let summary = document.getElementById("summary");
   

    let debts = credit + mortgage + carDebt + medical 
    let assets = realEstate + property + investments + cash
    let net = assets - debts
    let percentage = Math.floor((net / 121760) * 100);
    let difference = net - 121760;
    let percentDiff = percentage - 100
    yourNet.style.width = (`${percentage}%`)
    yourNet.append(` $${net}`)
    if (net < 121760){

        
        summary.append(`Your NetWorth is $${net}, which is ${percentage}% of the American Average. You are worth $${difference} dollars less than the average, and is ${percentDiff}% less than the national Median amount.`)
    }else if (net > 121760){
        summary.append(`Your NetWorth is $${net}, which is ${percentage}% of the American Average. You are worth $${difference} dollars more than the average, and is ${percentDiff}% more than the national Median amount.`)
    }else{
     
    }

})
//-----------------------------------------------------------------------------------------------COMPOUND INTEREST CALCULATOR
retirmentCalc.addEventListener("click", function(){
    let intitialInv = parseInt(document.getElementById("initialInv").value);
    let contribution = parseInt(document.getElementById("contribution").value);
    let annualInt = parseInt(document.getElementById("annualInt").value);
    let interestRate = parseInt(document.getElementById("interestRate").value);
    let years = parseInt(document.getElementById("lengthYears").value);
    let frequency = document.querySelector("#frequency").value;
    
    let annualRate = annualInt / 100
    let interestRates = interestRate /100
    

  function invest(){
        let outputDiv = document.getElementById("output");   

        let fv = intitialInv * (1 + annualRate/12)*(years/12)
        let cont = contribution * (1+ interestRates/12)*(years/12)-1
        let final = cont / (interestRates/12)
        let output = Math.floor(fv + final + contribution);
        let percentage = Math.floor((output /172000) * 100);
        let barLength = percentage
        let summaryContent = document.getElementById("summaryContent")
        console.log(percentage)

        let retirementBar = document.getElementById("retirementBar");     
        outputDiv.innerText = (`$${output}`)
        
        retirementBar.style.width = (`${barLength}mm`)
        retirementBar.innerText = `${percentage}%`
        retirementBar.style.textAlign = "center"
        retirementBar.style.display = "flex"
        retirementBar.style.flexDirection = "column"
        retirementBar.style.justifyContent = "center"

        let americasRetirement = document.getElementById("americasRetirement");
        americasRetirement.style.width = "100mm"
        americasRetirement.innerText = "(Average American Saving at 60+ is $172,000) = 100%"
        americasRetirement.style.fontSize = "11pt"
        americasRetirement.style.display = "flex"
        americasRetirement.style.flexDirection = "column"
        americasRetirement.style.justifyContent = "center"
        summaryContent.innerText = `Your total savings is $${output}, which is ${percentage}% of the American Average Savings`
  }

 invest()

})

//-----------------------------------------------------------------------------------------------------RETIRMENT TOTAL BARS




//----------------------------------------------------MODAL--------------------------------------------------------------


//----------------------------------------------------------------------------SHOW MODAL

showModal()


function showModal(){
    let closeButton = document.getElementById("close");
    let modalContainer = document.querySelector("#modal-container");
    let picture = document.createElement("img");
    picture.src = 
    
    modalContainer.id = "is-visible"
    
    modalContainer.innerHTML = "<h1>Budget & Finance Calculator</h1>"
    let pic = document.createElement("img");
    pic.src = "finance2.jpeg"
    modalContainer.append(pic);
    pic.style.width = "300px"
    pic.style.height = "200px"

    modalContainer.append(closeButton);
    closeButton.style.position = "absolute"
    closeButton.style.top = "1px"
    closeButton.style.right = "2px"  

//----------------------------------------------------------------------------ClOSE BUTTON
    let closeButtonElement = document.getElementById("close");;
    
   closeButtonElement.addEventListener("click", function(){
       let modal = document.getElementById("modal-container")
       let image = document.createElement("img");
       image.src = 
       modalContainer.id = "modal-container"
        closeButtonElement.style.display = "none"
        modalContainer.innerHTML = "<div></div>"   
       })
}

//----------------------------------------------------------------------------ESCAPE KEY
window.addEventListener('keydown', (e) =>{
    let modalContainer = document.getElementById("is-visible")
    if (e.key === "Escape"){
      console.log("Working")
      modalContainer.id = "modal-container"
      console.log(modalContainer)
    }
})



//-------------------------------------------------------------------------------------------------------------------------

