const prompt = require("prompt-sync")()
let cc = Number(prompt("cc : "))
let p = Number(prompt("pr : "))
let ex = Number(prompt("ex : "))
console.log("controle continu : " + cc )
console.log("projet : " + p )
console.log("Examen : " + ex )
let nf = (cc*2+p*3+ex*5)/10
console.log("note finale : " + nf )