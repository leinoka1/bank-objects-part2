
function popCustomerList(element, bank2) {
    console.log('here I am');
    console.log('element: '+element);
    var bankki = banking.bank();
    console.log('bankki : ' + bankki);
    console.log('getcustomer: ' + banking.banks[0].getCustomers()[1].lastName);
    var list = document.getElementById(element);
    console.log('list: ' + list);
    var customersXyz;
    customersXyz = banking.banks[0].getCustomers();
    console.log('customersXyz : ' + customersXyz);
    customersXyz.forEach(mFunction);
    function mFunction(customersXyz) {
        console.log('cust: ' + customersXyz.firstName);
        var option = document.createElement('option');
        option.value = customersXyz.customerId;
        option.text = customersXyz.bankIdAtCustomer + ' ' + customersXyz.lastName + ' ' + customersXyz.firstName;

        option.dataset.bankId = customersXyz.bankIdAtCustomer;
        option.dataset.firstName = customersXyz.firstName;
        option.dataset.lastName = customersXyz.lastName;

        console.log('bankId: ' + customersXyz.bankId);
        console.log('option: '+option);
        list.appendChild(option);

    }
}