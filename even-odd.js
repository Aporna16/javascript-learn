/*
//Problem 1: Let's play a mind game
function mindGame(number){
    let number1 = number;
    const number2 = number1 * 3;
    const number3 = number2 + 10;
    const number4 = number3 / 2;
    const total = number4 - 5;
    if(total > 0){
    //console.log(total);
    
    }  
    return total = number4 -5;
}
//let ans = mindGame(33); 
//console.log(ans);
mindGame();
*/


//Problem 2: Finding even or odd

/*
function evenOdd(numbers){
    const oddNumbers = [];
    const evenNumber = [];
    for(let i=0; i< numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2!==0){
            oddNumbers.push(element);
        }
        return oddNumbers;
      
    }
}
let result = evenOdd(['phero']);
console.log(result)
*/



/*
//Problem 3: Is less or greater than
function isLGSeven(number){
   let num1 = number;
   let num2 =num1 * 2;
   let difference = num1 - 7;
   if( difference < 7){
    //console.log(difference);
    return difference;
   }
   else{
    //console.log(num2);
    return num2;
   }
}
let result = isLGSeven(-15);
console.log(result);
isLGSeven();



//Problem 4: Finding Bad Data
/*
let array = [-4,-9,-5,-33,-55];
let count = 0;
for(let i = 0; i<array.length; i++){
    const element = array[i];
    console.log(element)
    if(element >= 0){
        console.log("Good Data.")
    }
    else{
        console.log("Bad DAta.")
    }
}*/
/*
function findingBadData(array){
    let count =0;
    
    for(let i = 0; i<array.length; i++){
        const element =array[i];
        if(element < 0) count++
    }
    return count;
}
let result =findingBadData([4,9,5,33,55]);
console.log(result)
*/





/*
//problem 5: 
function gemsToDiamond(gem1, gem2, gem3){
    let firstFrienderGemsPower = gem1 * 21 ;
    let secondFrienderGemsPower =gem2 * 32 ;
    let thirdFrienderGemsPower =gem3 * 43;
    let totalGems = firstFrienderGemsPower + secondFrienderGemsPower + thirdFrienderGemsPower;
    let totalGems1= 1000*2;
    let ans = totalGems - 2000;
    if(totalGems>totalGems1){
     //console.log(ans);
     return ans;
    }
    else {
     //console.log(totalGems);
    return totalGems;
    }
}
let gems = gemsToDiamond(20,200,50);
console.log(gems);
gemsToDiamond();
*/

function evenOdd(string){
    if(typeof string != 'string'){
        return 'a valid input';
    }
    else if(string.length%2==0){
        return('even');
    }
    else{
        return('odd');
    }
}
