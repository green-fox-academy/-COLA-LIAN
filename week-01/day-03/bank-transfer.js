'use strict';
const accounts = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]
function getNameAndBalance(x, y){
    let info = [];
    for(var i = 0; i < x.length; i++){
        if(x[i].accountNumber == y){
            info.push(x[i].clientName);
            info.push(x[i].balance);
            console.log(info);
        }
    }
    return info
}
getNameAndBalance(accounts, 11234543);
getNameAndBalance(accounts, 43546731);
getNameAndBalance(accounts, 23456311);


// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from account_number
//  - to account_number
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]

function transferAmount(accounts, numberFrom, numberTo, money){
    let array = [];

    for(var i = 0; i < accounts.length; i++){
       array.push(accounts[i].accountNumber);
    }
    // console.log(array);

    if( array.includes(numberFrom) == false || array.includes(numberTo) == false ){
        console.log("404 - account not found");
    }else{
        accounts.map(function(x){
            if(x.accountNumber == numberFrom){
                x.balance -= money;
            }else if(x.accountNumber == numberTo){
                x.balance += money;
            }
        })
    }
    console.log(accounts);
}

transferAmount(accounts, 43546731, 23456311, 500.0);




// module.exports = {
//     getNameAndBalance: getNameAndBalance,
//     transferAmount: transferAmount,
//     accounts: accounts
// };