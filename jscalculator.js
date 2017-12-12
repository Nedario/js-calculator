var btn = document.getElementById('button');
var n = document.getElementById('result');
var tab = [];

function recherche(nb1, nb2, sign){
var calcul = new Object();

calcul.input1 = parseInt(document.getElementById(nb1).value);
calcul.input2 = parseInt(document.getElementById(nb2).value);
calcul.sigle = document.getElementById(sign).value;

return calcul;
};

function calculer(obj){
    return eval(obj.input1 + obj.sigle + obj.input2);
};

function afficher(res){
        n.textContent = res;
};

function tabErrors(obj, res){
    // if(!isNaN(obj.input1) || !isNaN(obj.input2)){
        if(!isNaN(obj.input1))
            tab.push("La premiere saisie n'est pas un nombre")
        if(!isNaN(obj.input2))
            tab.push("La deuxieme saisie n'est pas un nombre")
        if(!isFinite(res))
            tab.push("Erreur de calcul");
        return tab;
    // }else{
    //     return false;
    // }
    // return tab;
}
function verifErrors(){
    if(tab.length>0)
        return true;
    else
        return false;
}

function afficherErrors(){
    for(i=0;i<tab.length;i++){
        n.innerHTML = tab[i];
    }
};

// function verifSaisie(obj){
//     if(!isNaN(obj.input1) && !isNaN(obj.input2)){
//         return true;
//     }else{
//         return false;
//     }
// };

function main(){

    var saisie = recherche("nb1","nb2","selector");
    var resultat = calculer(saisie);
    tabErrors(saisie, resultat);
    if(verifErrors())
        afficherErrors();
    else
        afficher(resultat);
}

btn.addEventListener('click', main);