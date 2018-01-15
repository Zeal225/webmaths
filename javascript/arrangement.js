'use strict'

console.log('programme resolvant l\'arrangement d\'un nombre')

function factoriel(nbre){
    if (nbre == 0 || nbre == 1) {
        return 1
    }
    let fact = 1
    for(let i = 2;i < nbre+1;i++){
        fact = fact*i
    }
    return fact
}

function arrangement(n,p){
    let resultat = factoriel(n) / factoriel(n-p) * factoriel(p)
    return resultat
}