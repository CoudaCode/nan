let formulaire = document.getElementsByTagName('form')[0];
const urlApi = 'https://trading.org/api/v.0.1/wallet/save_users';
formulaire.addEventListener('submit', e => {
    e.preventDefault();
    /** On récupère les inputs du formulaire  **/
    let input = e.target.querySelectorAll('input');
    /** On vérifie si tout les champs du formulaire sont remplit **/
    let option = [...input].every(item => item.value.replaceAll(' ', ''));
    /** Si l'un des champs est vide on empêche l'exécution **/
    if(!option) return console.log('Tout les champs sont obligatoires');
    /** On vérifie si le mot de passe et le mot de passe de confirmation sont conforment **/
    option = e.target.password.value === e.target.passwordc.value;
    /** S'ils ne sont pas conforment on bloque l'exécution **/
    if(!option) return console.log('Les mots de passes ne sont pas conformes.');
    /** On construit une réprésentation du formulaire en une paire clé/value qui reprensente le name des inputs et leur valeur **/
    let formaData = new FormData(e.target);
    /** On transmet les informations au serveur**/
    fetch(urlApi+'', {method: 'POST', body: new URLSearchParams(formaData)})
    .then(res => res.json())
    .then(success => {
        /** On récupère la réponse du serveur et on fait ce qu'on a à faire avec cette réponse **/
        if(success.newUser) window.location.href = './connexion.html';
        else console.log(success.message);
    })
})

