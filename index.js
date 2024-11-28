// Oppgave 1
/*var tall = 3
if {
    console.log("partall");
}
else{
    console.log("oddetall");
}*/
// Oppgave 2
var alder = 15
if (alder < 13){
    console.log("barn");
}
else if (alder <= 19) {
    console.log("tenåring");
}
else if (alder <= 64) {
    console.log("voksen");
}
else {
    console.log("pensjonist");
}
// Oppgave 3
var brukernavn = "bob"
var passord = 12345
if (brukernavn == "bob" && passord == 12345){
    console.log("logget inn");
}
else {
    console.log("brukernavn eller passord er feil");
}
// Oppgave 4
var måned = 12
if (måned >= 1 && måned <= 2 || måned == 12){
    console.log("vinter");
}
else if (måned >= 3 && måned <= 5){
    console.log("vår");
}
else if (måned >= 6 && måned <= 8){
    console.log("sommer");
}
else if (måned >= 9 && måned <= 11){
    console.log("høst");
}
else {
    console.log("ugyldig tall");
}
// Oppgave 5

const hoyde = parseFloat(prompt("Hva er din høyde?")) / 100
const vekt = parseFloat(prompt("Hva er din vekt?"))

const result = vekt / (hoyde * hoyde)
console.log(result);

if (result < 19) {
    console.log("Du er undervekt");
    
} else if (result < 25) {
    console.log("Du er normalvekt");
    
} else if (result < 30) {
    console.log("Du er overvektig");
    
} else {
    console.log("Du er fedme");
    
}
// Oppgave 6
var Alder = 12
if (Alder < 13){
    console.log("du må betale for barne billett");
}
else if (Alder <= 19) {
    console.log("du må betale for student billett");
}
else if (Alder <= 64) {
    console.log("du må betale for voksen billett");
}
else {
    console.log("du må betal for pensjonist billett");
}