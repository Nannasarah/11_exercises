const str = "nanna";
console.log(str);

//lav str til capslock
console.log(str.toUpperCase());

//gør at 3. bogstav er stor:
const tredjeBogstavStort =
  str.slice(0, 2) + //na
  str.slice(2, 3).toUpperCase() + //N
  str.slice(3); //na

console.log(tredjeBogstavStort);

