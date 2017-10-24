var banking = {};

banking.bank = function (name, bicCode, id) {

    var name = name;
    var bicCode = bicCode;
    var id = id;
    var accounts = [];
    var customers = [];

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
    function getAccounts() {
        return accounts
    }
    return {
        name: name,
        bicCode: bicCode,
        id: id,
        getCustomers: getCustomers,
        addCustomer:addCustomerToBank,
        getAccount: getAccounts,
        addAccount: addAccountToBank,
        print: buildBankDetails
    }
};

banking.customer = function (firstName, lastName, id, bankId, account) {

    // private variables
    var firstName = firstName;
    var lastName = lastName;
    var id = id;
    var bankId = bankId;
    var account = [];

// return object with "public" properties
return {
    firstName: firstName,
    lastName: lastName,
    bankId: bankId,
    account: account,
    id: id
}
};

banking.account = function (account, accountName, balance) {

    // private variables
    var account = account;
    var accountName = accountName;
    var balance = balance;

// return object with "public" properties
    return {
        account: account,
        accountName: accountName,
        balance: balance
    }
};
banking.banks = [];
banking.addBank = function(bank) {
    banking.banks.push(bank);

}
//var bank = banking.bank('Osuuspankki', 'OKOYFIH', 1);
//banks.push(bank);
//var bank = banking.bank('Saastopankki','SPFIYHH', 2);
//banks.push(bank);
var firstBank = banking.bank ('Osuuspankki', 'OKOYFIH', 1);
var secondBank = banking.bank('Saastopankki','SPFIYHH', 2);
banking.addBank(firstBank);
banking.addBank(secondBank);


var firstCustomer = banking.customer('Ari', 'Aaltonen',1,1);
var secondCustomer = banking.customer('Jari', 'Jalonen',2,1);
var thirdCustomer = banking.customer('Lari', 'Laaksonen',3,2);
var firstAccount = banking.account('FI5078327927392', 'STili',121);
var secondAccount = banking.account('FI4068969995511','PTili',303);
//

banking.banks[0].addCustomer(firstCustomer);
banking.banks[1].addCustomer(secondCustomer);
banking.banks[0].addCustomer(thirdCustomer);
banking.banks[0].addAccount(firstAccount);
banking.banks[1].addAccount(secondAccount);

//console.log(bank.getCustomers());
//console.log(secondAccount);
//console.log(bank.print());

//console.log(customer.print());

//banking.bank ('OP','BIOKOFF');
//console.log(banking.bicCode);
// print: (ekoodi.name);