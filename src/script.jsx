// document.addEventListener("DOMContentLoaded", () => {
//     setTimeout(() => {
//         // On ajoute un hover sur l'option sélectionnée dans la barre de navigation
//         // On sélectionne tous les balises li enfants de la balise de classe navigation

//         let list = document.querySelectorAll('.navigation li');

//         // On crée une fonction qui va nous permettre de supprimer la classe hovered des balise li et d'ajoute une classe hovered à la balise li qui a été survolée 
//         function activeLink(){
//             list.forEach(item => { 
//                 item.classList.remove('hovered');
//             });
//             // Le this réprésente la balise sur laquelle se produit l'évenement
//             // En un mot this fait référence à event.target
//             this.classList.add('hovered');
//         };

//         // list.forEach(item => item.addEventListener('mouseover', activeLink));

//         /**============== Gestion du Menu toggle ================**/
//         let toggle = document.querySelector('.toggle');
//         let navigation = document.querySelector('.navigation');
//         let main = document.querySelector('.main');

//         toggle.onclick = function(){{
//             navigation.classList.toggle('active');
//             main.classList.toggle('active')
//         }}
        
//     }, 1000);
    
// });




