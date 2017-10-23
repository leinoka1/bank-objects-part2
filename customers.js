banking.customer = function (firstName, lastName) {

    // private variables
    var firstName = firstName;
    var lastName = lastName;

    // return object with "public" properties
    return {
        firstName: firstName,
        lastName: lastName
    }
};
