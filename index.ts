// String Bday template
let firstName: string;
let bday: string;

firstName = "Jadon";
bday = "03/03/03";

let bdayTemplate: string = `Name: ${firstName} | Date of Birth: ${bday}`;

console.log(bdayTemplate);

// Combined numbers array
let numList: number[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
let total: number = 0;

for (let num of numList){
    total += num;
}

console.log(total);

// Contact object + destructure
let contact = {
    contactName: "Jadon",
    dob: "03/03/03",
    role: "student"
}

let contactTemplate: string = `${contact.contactName} is a ${contact.role} learing code and was born on ${contact.dob}`

console.log(contactTemplate);
