var events = require('events');
var handlers = require('./handler');
var event = new events.EventEmitter(); 

function Account() {
    var balance=5000;

    var Monitor = function () {
        if (balance<5000) {
            event.emit('UnderBalance');
        }
        else if (balance>250000) {
            event.emit('OverBalance');
        }
    }

    function Withdraw(amount) {
        balance-=amount;
        console.log(amount+' Rs Withdrawn');
        Monitor();
    }
    function Deposit(amount) {
        balance+=amount;
        console.log(amount+' Rs Deposited');
        Monitor();
    }
    
    var registerEventHandler = function () {
        event.on('UnderBalance',handlers.BlockAccount);
        event.on('OverBalance',handlers.PayIncomeTax);
    }
    return{
        remove : Withdraw,
        add : Deposit,
        register : registerEventHandler
    }
}
var acct = new Account();
acct.register();
acct.add(250050);
acct.remove(255000);
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