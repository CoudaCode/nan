export const convertToImage = (chaine, parent) => {
  
    // Créez un canvas
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

    // Définissez les dimensions du canvas (en fonction du texte)
    canvas.width = 50;
    canvas.height = 50;

    // Dessinez un cercle blanc
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = 50 / 2;
    context.beginPath();
    context.arc(centerX, centerY, radius, 0,2 * Math.PI, false);
    context.fillStyle = 'white'; // Couleur du fond blanc
    context.fill();

    // Dessinez le texte en gras, noir et centré
    context.font = 'bold 25px Arial'; // Mettez le texte en gras
    context.fillStyle = 'black'; // Couleur du texte en noir
    context.textAlign = 'center'; // Centrez le texte horizontalement
    context.textBaseline = 'middle'; // Centrez le texte verticalement
    context.fillText(chaine, centerX, centerY);

    // Convertissez le canvas en une image
    var imageDataURL = canvas.toDataURL('image/png');

    // Créez un élément d'image pour afficher l'image générée
    var imageElement = new Image();
    imageElement.src = imageDataURL;

    // Ajoutez l'élément d'image à votre document ou effectuez toute autre action nécessaire
    parent.textContent = '';
    parent.appendChild(imageElement);
}