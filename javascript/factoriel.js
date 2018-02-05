'use strict'

const factoriel = (e) => {
    if(e==0 || e==1){
    return 1
    }
   let fact = 1
    for (let index = 2; index < e+1 ; index++) {
        fact = fact*index
    }
    return fact
}
