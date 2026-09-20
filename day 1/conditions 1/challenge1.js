const prompt = require("prompt-sync")()
let m = Number(prompt("montant de commande : "))
var frais ;
if (m < 100){
    var frais = 30
    console.log("frais livraison :" + frais + "DH")
    console.log("totale a payer " + (m +frais) + "DH" )
} else if (m < 300){
var frais = 20
console.log("frais livraison : " + frais + "DH")
console.log("totale a payer : " + (m + frais) + "DH ")
} else if (m < 500){
    var frais = 10
    console.log("frais de livraison : " + frais + "DH")
    console.log("totale a payer :" + (frais + m) + "DH")
} else {
console.log("frais livraison : " + "livraison gratuite ")
console.log("total a payer" + m )
}