

// Variables 

let popItems = document.getElementById("pop");
let pushItems = document.getElementById("push");
let shiftItem = document.getElementById("shiftItem");
let unShiftItem = document.getElementById("unShiftItem");


// Array
let myList = [];


// Push to Array
pushItems.addEventListener("click", function(){
   let myItem = document.getElementById("pushItem").value;
 
   document.getElementById("array1").append(`${myItem}, `);
    myList.push(myItem);
    console.log(myList)
 
    let mine = window.document.createElement("div");
    mine.id = "listHole";
    mine.innerText = (myList)
    document.body.append(mine);

    console.log(mine); 

});


//Pop to Array
popItems.addEventListener("click", function(){
    myList.pop();
    
    document.getElementById("array1").append(myList);
    console.log(myList)
    
 });


//Shift to Array
shiftItem.addEventListener("click", function (){
    myList.shift();
    
    console.log(myList)
    document.getElementById("listHole").replaceWith(myList)
    function clear(){
        let myItem = document.getElementById("listHole");
        document.getElementById("listHole").remove(myItem);
    }
    clear()
})


//Unshift to Array
unShiftItem.addEventListener("click", function(){
    let myItem = document.getElementById("unshiftItem").value;
    
    myList.unshift(myItem);
    console.log(myList);
    let mine2 = window.document.createElement("div");
    mine2.id = "listHole";
    mine2.innerText = (myList)
    document.body.append(mine2);
    document.getElementById("array1").append(`${myItem}, `);
    
})



let clearButton = document.getElementById("clear");
 clearButton.addEventListener("click", function(){
     let newDiv = document.createElement("div");
        newDiv.append(myList);
        document.getElementById("listHole").remove(myList);
    });