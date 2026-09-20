const prompt = require("prompt-sync")()
let code = Number(prompt("code : "))
let prix ;
switch(code){
    case 1:
     let code = 1
     let prix = 20   
    console.log("Compte courant→ 20 DH")
    break
    case 2:
         code =2
         prix =10
        console.log(" Compte épargne  → 10 DH")
        break;
        case 3:
            code = 3
             prix = 0
            console.log("Compte étudiant  → 0 DH")
            break
            case 4:
                code = 4
                prix = 50
                console.log("Compte professionnel → 50 DH")
                break;
                
}



