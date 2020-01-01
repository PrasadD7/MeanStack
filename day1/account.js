
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });
function Account() {
    var balance;
    function Withdraw(amount) {
        balance-=amount;
        console.log(amount+' Rs Withdrawn');
        
    }
    function Deposit(amount) {
        balance+=amount;
        console.log(amount+' Rs Deposited');
    }
    return{
        remove : Withdraw,
        add : Deposit
    }
}
var option;
rl.on('line', function(line){
    option = line;    
})
var acct = new Account();
acct.add(5000);
acct.remove(2500);
// switch (option) {
//     case 1:
//         acct.add(option);
//         break;

//         case 2:
//             acct.remove(option);
//             break;
//     default:
//         break;
// }