//find second large name 

/*function secondLarge(num) {
    let largeNumber = num[0];
    let secondNum;
    for(const number of num){
    if(number>largeNumber){
    secondNum = largeNumber;
    largeNumber = number;
    }
    else if(number>secondNum){
    secondNum = number
    }
    }
    console.log(secondNum)
    }
    const number = [5, 7, 8, 10, 45, 30,40];
    const secondLargeNum = secondLarge(number);
    console.log(secondLargeNum)*/

 //4.........   
let friendNameArray = ['mouse', 'keyboard','command line', 'vscode', 'terminal', 'bejalla shob problem & google search bar', 'monitor', 'chrome', ];
function bestFriend(friendNameArray)
{
var store = friendNameArray[0].length;
var ans = friendNameArray[0];
for (var i = 1; i < friendNameArray.length; i++) {
var longest = friendNameArray[i].length;
if (longest > store) {
ans = friendNameArray[i];
store = longest;
}
}
return ans;
}
const friendName = bestFriend(friendNameArray);
console.log(friendName);