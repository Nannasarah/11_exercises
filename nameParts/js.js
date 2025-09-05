const str = "Nanna-Sarah Rocha Pedersen";

console.log(str.slice(0, 11));
console.log(str.slice(12, 17));
console.log(str.slice(-8));

//med substring

const fullName = "Nanna-Sarah Rocha Pedersen";

const firstSpace = fullName.indexOf(" ");
const lastSpace = fullName.lastIndexOf(" ");
// split i tre dele
const firstName = fullName.substring(0, firstSpace);
const middleName = fullName.substring(firstSpace + 1, lastSpace);
const lastName = fullName.substring(lastSpace + 1);

// udskriv resultatet
console.log(firstName);
console.log(middleName);
console.log(lastName);
