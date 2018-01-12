'use strict'

let a = 3
let b = 0
let c = -5
let caractere = 'x'

let discriminant = (b*b)-4*a*c
console.log('le discriminant est ' + discriminant)

if (discriminant==0) {
	let x0 = (-b/(2*a))
	console.log(`le discriminant est egal à 0 donc il y existe une seule solution qui est X0=${x0}`)
}else if(discriminant<0){
	console.log('le discriminant n\'a pas de solution dans |R')
}else if (discriminant > 0) {
	let x1 = Math.ceil(((-b-Math.sqrt(discriminant))/(2*a)))
	let x2 = Math.ceil(((-b+Math.sqrt(discriminant))/(2*a)))
	console.log(`le discriminant est supérieur à 0 donc il existe deux solution x1=${x1} et x2=${x2}`)
}