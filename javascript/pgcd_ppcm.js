'use strict'
function pgcd(a,b){
	while(a!==b){
		if(a>b){
			a-=b;
		}else{
			b-=a;
		}
	}
	return a;
    /*let ppcm = (Math.abs(a*b))/a;*/
}
console.log('le pgcd est ' + pgcd(25,15))

const ppcm = (x,y) =>{
    while (x!==y) {
        if (x>y) {
            x-=y
            let result = x
            return Math.abs(x*y)/result
        }else{
            y-=x
            let result = y
            return Math.abs(x*y)/result
        }
    }
}
console.log('le ppcm est ' + ppcm(25,15))

