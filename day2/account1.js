var events = require('events');


var Account =  function () {
    var balance=5000;

    function monitor() {
        if (balance<5000) {
            
        } else if(balance>250000){
            
        }
    }

    function withdraw(amount) {
        balance-=amount;
    }
    function deposit(amount) {
        balance+=amount;
    }
    return{
        withdraw:withdraw,
        deposit:deposit
    }
}

var acct = new Account();
acct.deposit(250000);
acct.withdraw(255000);