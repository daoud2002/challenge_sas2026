const prompt = require("prompt-sync")()
let score1 = Number(prompt("sc1 : "))
let score2 = Number(prompt("scr2 : "))
let score3 = Number(prompt("scr3 : "))
let score4 = Number(prompt("scr4 : "))
console.log("partie 1 : " + score1 )
console.log("partie 2 : " + score2 )
console.log("Partie 3 : " + score3 )
console.log("partie 4 : " + score4 )
let total = score1+score2+score3+score4
let moyen = total/4
console.log("score totale :  " + total )
console.log("Moyenne : " + moyen )