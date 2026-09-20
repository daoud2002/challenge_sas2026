const prompt = require("prompt-sync")()
let mnt =Number(prompt("montant : "))
if(mnt<500){
console.log("réduction : aucune réduction")
console.log(mnt + "DH")
}else if ( mnt<1000){
let reduction = mnt*0.05
console.log("réduction : " + reduction)
console.log("total : " + (mnt-reduction) + "DH")

}else if ( mnt<2000){
    let reduction = mnt*0.1
    console.log("réduction : " + reduction + "DH")
    console.log("total : " + (mnt-reduction) + "DH")
}else{

}
