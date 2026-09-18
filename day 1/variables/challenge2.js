const prompt = require("prompt-sync")()
let mad = Number(prompt(" montant : "))
console.log("budget en MAD : " + mad )
let eur = mad/11
console.log("budget en eur : " + eur)