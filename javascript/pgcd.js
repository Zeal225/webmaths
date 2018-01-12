"use strict"

function pgcd(a,b){
	while(a!==b){
		if(a>b){
			a-=b;
		}else{
			b-=a;
		}
	}
	return a;
}

console.log(`le pgcd est ${pgcd(25,15)}`);
