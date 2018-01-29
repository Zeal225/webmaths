'use strict'

//const factoriel = (e) => {
//    if(e==0 || e==1){
//    return 1
//    }
//    let fact = 1
//    for (let index = 2; index < e+1 ; index++) {
//        fact = fact*index
//    }
//    return fact
//}
let valeur  = document.getElementById('espace_calcul').value
let bouton = document.getElementById('bouton')
bouton.addEventListener('click',factoriel = () => {
document.getElementById('espace_resultat').appendChild(document.createTextNode('vous venez de cliquer sur le bouton'))
})