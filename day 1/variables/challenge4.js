const prompt = require("prompt-sync")()
let ds = Number(prompt("distance : "))
let carb = Number(prompt("carburant : "))
console.log("distance : " + ds +" km ")
console.log("carburant : " + carb + "litres")
let cons = (carb/ds)*100
console.log("consommation : " + cons + "L/100 KM")