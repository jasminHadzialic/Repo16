const firstName = (firstName) => {
    return firstName.toUpperCase();
}
const lastName = (lastName) => {
    return lastName.toLowerCase();
}

console.log("Jasmin");
console.log("Hadzialic");

exports.firstName = firstName;
exports.lastName = lastName;