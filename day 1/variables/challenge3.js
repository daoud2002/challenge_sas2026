const prompt = require("prompt-sync")()
let gb = Number(prompt("stockage : "))
console.log("stockage : " + gb + "GB")
let mb = gb*1024
console.log("résultat : " + mb + "MB")