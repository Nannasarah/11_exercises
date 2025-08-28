//1) Lav en funktion der modtager to argumenter, beloeb og moms. Funktionen skal console.logge beløbet med momsen lagt til. (moms er i procent)
//2) Lav moms som et default parameter sat til 25.

//Nedenunder sætter jeg beløbet til et tilfældigt tal mellem 0 og 1000.
let beloeb = Math.round(Math.random() * 1000);

console.log("beloebet uden moms er " + beloeb);
//Nedenunder kalder jeg funktionen.
momsBeregner(beloeb);
function momsBeregner(beloeb, moms = 0.25) {
  //Herunder beregner jeg prisen med moms.
  const prisMedMoms = beloeb * (1 + moms);
  //det bliver vist i consollen.
  console.log(`beløb med moms er ${prisMedMoms}`);
}

//I KLASSEN
function momsBeregner1(beloebet, momsen = 25) {
  console.log(beloebet * (1 + momsen / 100));
}
//Herunder kalder jeg funktionen med et beløb på 200 og en moms på 33%
momsBeregner1(200, 33);
