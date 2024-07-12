import { preencherVetor } from "./utils/preencherVetor.js";

export function question05(){
    var jogadas = preencherVetor(10, 1, 37);
    var qtdJogad = [q]
    var verde = [i]
    var preto = [p]
    var verm = [v]
    var porcent = [];

     for(var i = 0; i < verde.length; i++){
             qtdJogad[jogadas[i]]++;
    }

    for(var q = 1; q < qtdJogad.length; q++){
         porcent[q] = 100 / jogadas.length * qtdJogad[q];
     }

     for(var p = 1; p < preto.length; p++){
        if(preto % 2 ===0);
    }

    for(var v = 1; v < verm.length; v++){
        if(verm % 2 !==0); 
    }

     for(var i = 1; i< porcent.length; i++){
         if(porcent[i] > 40){
             console.log("Viciado no numero: " + i + "!!!")
         }
     }
console.table(porcent);
    }