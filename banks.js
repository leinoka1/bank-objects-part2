var banking = {};

banking.bank = function (name, bicCode, bankId){
    var name = name;
    var bicCode = bicCode;
    var bankId = bankId;
    var accounts = [];
    var customers = [];
    var transactions = [];

    function buildBankDetails() {
        // return id + ',' + name + ',' + bicCode + ',' + customers + ',' + accounts;
        return id + ' -> ' + name + ',' + bicCode;
    }
    function addCustomerToBank(customer){
        // console.log(customer);
        customers.push(customer);
    }
    function getCustomers(){
                return customers;
    }

    function setCustomer(customer){
        customers.push(customer);
    }
    function addAccountToBank(account) {
        accounts.push(account);
    }
    function addTransactionToAccount(transaction) {
        transactions.push(transaction);

    }
    function getAccounts() {
        return accounts
    }
    return {
        name: name,
        bicCode: bicCode,
        bankId: bankId,
        getCustomers: getCustomers,
        addCustomer:addCustomerToBank,
        getAccount: getAccounts,
        addAccount: addAccountToBank,
        addTransaction: addTransactionToAccount,
        print: buildBankDetails
    }
};

banking.customer = function (firstName, lastName, customerId, bankId, account) {

    // private variables
    var firstName = firstName;
    var lastName = lastName;
    var customerId = customerId;
    var bankId = bankId;
    var account = [];

// return object with "public" properties
return {
    firstName: firstName,
    lastName: lastName,
    bankIdAtCustomer: bankId,
    account: account,
    customerId: customerId
}
};

banking.account = function (account, accountName, balance, customerId) {

    // private variables
    var account = account;
    var accountName = accountName;
    var balance = balance;
    var customerId = customerId;

// return object with "public" properties
    return {
        account: account,
        accountName: accountName,
        balance: balance,
        customerId: customerId
    }
};
banking.accountTransaction = function (account, amount, timeStamp, transactionId) {

    // private variables
    var account = account;
    var amount = amount;
    var timeStamp = timeStamp;
    var transactionId = transactionId;

// return object with "public" properties
    return {
        account: account,
        amount: amount,
        timeStamp: timeStamp,
        transactionId: transactionId
    }
};

banking.banks = [];
banking.addBank = function(bank) {
    banking.banks.push(bank);

}

var firstBank = banking.bank ('Osuuspankki', 'OKOYFIH', 1);
var secondBank = banking.bank('Säästöpankki','SPFIYHH', 2);
banking.addBank(firstBank);
banking.addBank(secondBank);


var firstCustomer = banking.customer('Ari', 'Aaltonen',1,1);
var secondCustomer = banking.customer('Jari', 'Jalonen',2,1);
var thirdCustomer = banking.customer('Lari', 'Laaksonen',3,2);

var firstAccount = banking.account('FI5078327927392', 'STili',121);
var secondAccount = banking.account('FI4068969995511','PTili',303);

var firstTransaction = banking.accountTransaction('FI5078327927392', 13, "2015-03-25T12:00:00Z",1);
//

banking.banks[0].addCustomer(firstCustomer);
banking.banks[0].addCustomer(secondCustomer);
banking.banks[1].addCustomer(thirdCustomer);

banking.banks[0].addAccount(firstAccount);
banking.banks[1].addAccount(secondAccount);

banking.banks[0].addTransaction(firstTransaction);
//console.log(bank.getCustomers());
//console.log(secondAccount);
//console.log(bank.print());

//console.log(customer.print());

//banking.bank ('OP','BIOKOFF');
//console.log(banking.bicCode);
// print: (ekoodi.name);