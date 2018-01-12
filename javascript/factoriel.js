'use strict'

function factoriel(nbre){
	if (nbre==0 || nbre ==1) {
		return 1
	}
	var fact = 1
	for(let i=2;i<=nbre-1;i++){
		fact = fact*i
		return fact
	}
}


console.log(factoriel(5))
