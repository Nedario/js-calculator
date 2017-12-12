var btn = document.getElementById('button');
var n = document.getElementById('result');

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
    if(!isFinite(res))
        n.textContent = "Erreur de calcul";
    else
        n.textContent = res;
};

function verifSaisie(obj){
    if(!isNaN(obj.input1) && !isNaN(obj.input2)){
        return true;
    }else{
        return false;
    }
};

function init(){
    var a = recherche("nb1","nb2","selector");
    var errors = verifSaisie(a);
    if(errors){
        var b = calculer(a);
        afficher(b);
    }else{
        n.textContent = "Veuillez n'entrer que des nombres";
    }
};

btn.addEventListener('click', init);