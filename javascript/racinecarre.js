
var bouton = document.getElementById('bouton')
document.getElementById('espace_resultat').style.overflow = 'scroll'
bouton.addEventListener('click', function calcul(){
    var resultat = Math.sqrt(document.getElementById('espace_calcul').value)
    document.getElementById('espace_resultat').appendChild(document.createTextNode(`√${document.getElementById('espace_calcul').value} est ${resultat}`))
    let espace = document.createElement('br')
    document.getElementById('espace_resultat').appendChild(espace)
})