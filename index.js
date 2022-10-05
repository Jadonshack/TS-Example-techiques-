"use strict";
// String Bday template
let firstName;
let bday;
firstName = "Jadon";
bday = "03/03/03";
let bdayTemplate = `Name: ${firstName} | Date of Birth: ${bday}`;
console.log(bdayTemplate);
// Combined numbers array
let numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let total = 0;
for (let num of numList) {
    total += num;
}
console.log(total);
// Contact object + destructure
let contact = {
    contactName: "Jadon",
    dob: "03/03/03",
    role: "student"
};
let contactTemplate = `${contact.contactName} is a ${contact.role} learing code and was born on ${contact.dob}`;
console.log(contactTemplate);
