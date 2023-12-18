
//-------------------------- MODÉLISATION DES DONNÉES --------------------------//

var tailles = [
	10,
	11,
	12,
	13,
	14,
	15,
	// Preuve de dynamisme (ajout d'un nouveau produit - taille)
	// 16
	];

var varianteA = {
	genre: "hommes",
	nomProduit: "Fresh Foam X 1080v12",
	imagePrincipale: "images/Fresh-Foam-X-1080v12_Black-avec-cobalt.jpeg",
	imageSecondaire: "images/Fresh-Foam-X-1080v12_Black-avec-cobalt_sec.jpeg",
	imageAltPrincipale: "Fresh-Foam-X-Black-avec-cobalt",
	imageAltSecondaire: "Fresh-Foam-X-Black-avec-cobalt_sec",
	imageMini: "images/miniatures/Fresh-Foam-X-1080v12_Black-avec-cobalt_mini.jpeg",
	imageMiniAlt: "Fresh-Foam-X-Black-avec-cobalt_mini",
	prixProduit: 199.99,
	couleurArticle: ["Black avec cobalt"],
	taillesDispo: [11, 12]
};

var varianteB = {
	genre: "hommes",
	nomProduit: "Fresh Foam X 1080v12",
	imagePrincipale: "images/Fresh-Foam-X-1080v12_Acier-avec-plomb-et-renard-arctique.jpeg",
	imageSecondaire: "images/Fresh-Foam-X-1080v12_Acier-avec-plomb-et-renard-arctique_sec.jpeg",
	imageAltPrincipale: "Fresh-Foam-X-Acier-avec-plomb-et-renard-arctique",
	imageAltSecondaire: "Fresh-Foam-X-Acier-avec-plomb-et-renard-arctique_sec",
	imageMini: "images/miniatures/Fresh-Foam-X-1080v12_Acier-avec-plomb-et-renard-arctique_mini.jpeg",
	imageMiniAlt: "Fresh-Foam-X-Acier-avec-plomb-et-renard-arctique_mini",
	couleurArticle: ["White avec black"],
	prixProduit: 199.99,
	taillesDispo: [15]
};

var varianteC = {
	genre: "hommes",
	nomProduit: "Fresh Foam X 1080v12",
	imagePrincipale: "images/Fresh-Foam-X-1080v12_Noir-avec-tonnerre-et-blanc.jpeg",
	imageSecondaire: "images/Fresh-Foam-X-1080v12_Noir-avec-tonnerre-et-blanc_sec.jpeg",
	imageAltPrincipale: "Fresh-Foam-X-Noir-avec-tonnerre-et-blanc",
	imageAltSecondaire: "Fresh-Foam-X-Noir-avec-tonnerre-et-blanc_sec",
	imageMini: "images/miniatures/Fresh-Foam-X-1080v12_Noir-avec-tonnerre-et-blanc_mini.jpeg",
	imageMiniAlt: "Fresh-Foam-X-Noir-avec-tonnerre-et-blanc_mini",
	couleurArticle: ["Noir avec tonnerre et blanc"],
	prixProduit: 199.99,
	taillesDispo: [10, 14, 15]
};

var varianteD = {
	genre: "hommes",
	nomProduit: "Fresh Foam X 1080v12",
	imagePrincipale: "images/Fresh-Foam-X-1080v12_White-avec-black.jpeg",
	imageSecondaire: "images/Fresh-Foam-X-1080v12_White-avec-black_sec.jpeg",
	imageAltPrincipale: "Fresh-Foam-X-White-avec-black",
	imageAltSecondaire: "Fresh-Foam-X-White-avec-black_alt",
	imageMini: "images/miniatures/Fresh-Foam-X-1080v12_White-avec-black_mini.jpeg",
	imageMiniAlt: "Fresh-Foam-X-White-avec-black_mini",
	couleurArticle: ["Acier avec plomb et renard arctique"],
	prixProduit: 199.99,
	taillesDispo: [12, 13, 14, 15]
};

// Preuve de dynamisme - (ajout d'un nouveau produit avec changements des valeurs pour certaines propriétés - objet/variante E)
/*var varianteE = {
	genre: "femmes",
	nomProduit: "Fresh Foam Y 1080v12",
	imagePrincipale: "images/Fresh-Foam-X-1080v12_Eclipse-avec-indigo-naturel.jpeg",
	imageSecondaire: "images/Fresh-Foam-X-1080v12_Eclipse-avec-indigo-naturel_sec.jpeg",
	imageAltPrincipale: "Fresh-Foam-X-Eclipse-avec-indigo-naturel",
	imageAltSecondaire: "Fresh-Foam-X-Eclipse-avec-indigo-naturel_alt",
	imageMini: "images/miniatures/Fresh-Foam-X-1080v12_Eclipse-avec-indigo-naturel_mini.jpeg",
	imageMiniAlt: "Fresh-Foam-X-Eclipse-avec-indigo-naturel_mini",
	couleurArticle: ["Éclipse avec indigo naturel"],
	prixProduit: 99.99,
	taillesDispo: [10, 12, 14, 16]
};*/


var produits = [
	varianteA, 
	varianteB,
	varianteC, 
	varianteD,
	// Preuve de dynamisme - (ajout de la variante E dans le tableau d'objet)
	// varianteE
	];

// Preuve de dynamisme - (changement de couleur et ajout de taille)
// produits[0]["couleurArticle"] = "Noir et bleu marine";
// produits[1]["taillesDispo"].push(14);



//------------------ MODÉLISATION DYNAMIQUE DE L'ÉTAT INITIAL ------------------//


// Initialisation de la section de gauche (image principale et image secondaire)
var carteImages = "<div class= 'images'>";
carteImages = carteImages + "<img id= image-principale-"+0+" class= 'col-6' src="+ produits[0]['imagePrincipale'] + " alt="+produits[0]['imageAltPrincipale']+">";
carteImages = carteImages + "<img id= image-secondaire-"+0+" class= 'col-6' src="+ produits[0]['imageSecondaire'] + " alt="+produits[0]['imageAltSecondaire']+">";
carteImages = carteImages + "</div>";
$("#sectionGauche").append(carteImages);


// Initialisation de la section de droite
// Initialisation de la section de droite - Genre
var carteGenre = "<div class='genre'>";
carteGenre = carteGenre + "Pour "+varianteA['genre'];
carteGenre = carteGenre + "</div>";
$("#sectionDroite").append(carteGenre);


// Initialisation de la section de droite - Nom du produit
var	carteNomProduit = "<div class='h2 nomProduit'>";
carteNomProduit = carteNomProduit + varianteA['nomProduit'];
carteNomProduit = carteNomProduit + "</div>";
$("#sectionDroite").append(carteNomProduit);


// Initialisation de la section de droite - Prix du produit
var	cartePrixProduit = "<div class='prixProduit'>";
cartePrixProduit = cartePrixProduit + "<b>"+varianteA['prixProduit'] + " $</b>";
cartePrixProduit = cartePrixProduit + "</div>";
$("#sectionDroite").append(cartePrixProduit);


// Initalisation de la section de droite - Nom de la couleur du produit
var	carteNomCouleur = "<div class='mt-4 nomCouleur'>";
carteNomCouleur = carteNomCouleur + "<b>Couleur:</b> "+produits[0]["couleurArticle"];
carteNomCouleur = carteNomCouleur + "</div>";
$("#sectionDroite").append(carteNomCouleur);


// Initialisation de la section de droite - Image de miniature des produits avec les variantes de couleurs
$("#sectionDroite").append("<div class='miniatures'></div>");
for (var i = 0; i < produits.length ; i = i + 1) {
	var carteMiniature = "<a href='#'><img data-miniatures="+i+" id= miniature-"+i+" class='image-filtre mr-2 mt-2' src="+ produits[i]['imageMini'] + " alt="+produits[i]['imageMiniAlt']+"></a>";
	$(".miniatures").append(carteMiniature);
};


// Initialisation de la section de droite - Section taille (titre, alerte taille non sélectionnée, boutons tailles)
$("#sectionDroite").append("<div class='tailleProduit'><div class='titreTaille mt-4'><div class='row'><div class='col-7'><b>Sélectionner taille</div></b><div class='col-5 text-right'>Guide des tailles</div></div></div></div>");
$(".titreTaille").append("<div class ='tailleNonSelectionnee text-danger'>Veuillez sélectionner une taille avant de l'ajouter au panier</div>");
$(".tailleNonSelectionnee").hide();
for (var i = 0; i < tailles.length; i++) {
	var	carteTaille = "<button type='button' data-tailles="+i+" id=taille-"+tailles[i]+" class='bouton-filtre btn btn-outline-dark mr-3 mt-3'>"+tailles[i]+"</button>";
	$(".tailleProduit").append(carteTaille);
};


// Initialisation de la section de droite - Déclaration de la variable pour les articles non disponibles
var CarteArticleIndisponible = "<div id='articleIndisponible' class='articleIndisponible mt-4'>";
CarteArticleIndisponible = CarteArticleIndisponible + "<p><b>Cet article n'est pas disponible actuellement</b></p>";
CarteArticleIndisponible = CarteArticleIndisponible + "</div>";
$("#sectionDroite").append(CarteArticleIndisponible);
$(".articleIndisponible").hide();


// Initialisation de la section de droite - Bouton d'ajout au panier
var carteBtnAchat = "<div class='boutonAchat mt-2'>";
carteBtnAchat = carteBtnAchat + "<button type='button' class='btn btn-danger mt-3 col-12'>Ajouter au panier</button>";
carteBtnAchat = carteBtnAchat + "</div>";
$("#sectionDroite").append(carteBtnAchat);


// Initialisation des variables de sélection
var couleurSelectionnee;
var tailleSelectionnee;
couleurSelectionnee = 0;


// Désactivation des boutons de tailles quand celui-ci n'est pas disponible pour la couleur sélectionnée par défaut au rafraichissement 
for (var i = 0; i < tailles.length; i++) {
	if (produits[couleurSelectionnee]["taillesDispo"].includes(tailles[i]) == false) {
		$("#taille-"+tailles[i]).prop("disabled", true)
	};
};


// Initialisation de la bordure de selection du bas pour la miniature par défaut au rafraichissement de la page
$("#miniature-0").addClass("bordure");



//-------------------- ALGORITHMES DYNAMIQUES ET INTÉRACTIVITÉ --------------------//


// Gestionnaire d'évènement au clic sur les images de miniature
$(".image-filtre").on("click", function() {
//console.log("J'ai cliquer");

// Suppression (ou cacher) le corps de mon site web
	$(".images").remove();
	$(".genre").remove();
	$(".nomProduit").remove();
	$(".prixProduit").remove();
	$(".nomCouleur").remove();
	$(".miniatures").hide();
	$(".tailleProduit").hide();
	$(".tailleNonSelectionnee").hide();
	$(".articleIndisponible").hide();
	$(".boutonAchat").hide();

	couleurSelectionnee = $(this).data("miniatures");
	//console.log(couleurSelectionnee);


// Mise à jour de la bordure de sélection du bas de l'image selon la miniature cliquée
	$(".image-filtre").removeClass("bordure");
	$("#miniature-"+couleurSelectionnee).addClass("bordure");


// Désactivation des boutons de tailles quand celui-ci n'est pas disponible pour la couleur sélectionnée
	$(".bouton-filtre").prop("disabled", false)
	for (var i = 0; i < tailles.length; i++) {
		if (produits[couleurSelectionnee]["taillesDispo"].includes(tailles[i]) == false) {
			$("#taille-"+tailles[i]).prop("disabled", true)
		};
	};


// Regénération de la section de gauche - Image principale et secondaire (en fonction de la miniature de couleur sélectionnée)
	var carteImagesSelectionnees = "<div class='images'>";
	carteImagesSelectionnees = carteImagesSelectionnees + "<img id= image-principale-"+couleurSelectionnee+" class= 'col-6' src="+ produits[couleurSelectionnee]['imagePrincipale'] + " alt="+produits[couleurSelectionnee]['imageAltPrincipale']+">";
	carteImagesSelectionnees = carteImagesSelectionnees + "<img id= image-secondaire-"+couleurSelectionnee+" class= 'col-6' src="+ produits[couleurSelectionnee]['imageSecondaire'] + " alt="+produits[couleurSelectionnee]['imageAltSecondaire']+">";
	carteImagesSelectionnees = carteImagesSelectionnees + "</div>";
	$("#sectionGauche").append(carteImagesSelectionnees);


// Regénération de la section de droite - Genre (en fonction de la miniature de couleur sélectionnée)
	var carteGenreSelectionne = "<div class='genre'>";
	carteGenreSelectionne = carteGenreSelectionne + "Pour "+produits[couleurSelectionnee]['genre'];
	carteGenreSelectionne = carteGenreSelectionne + "</div>";
	$("#sectionDroite").append(carteGenreSelectionne);


// Regénération de la section de droite - Nom du produit (en fonction de la miniature de couleur sélectionnée)
	var	carteNomProduitSelectionne = "<div class='h2 nomProduit'>";
	carteNomProduitSelectionne = carteNomProduitSelectionne + produits[couleurSelectionnee]['nomProduit'];
	carteNomProduitSelectionne = carteNomProduitSelectionne + "</div>";
	$("#sectionDroite").append(carteNomProduitSelectionne);


// Regénération de la section de droite - Prix du produit (en fonction de la miniature de couleur sélectionnée)
	var	cartePrixProduitSelectionne = "<div class='prixProduit'>";
	cartePrixProduitSelectionne = cartePrixProduitSelectionne + "<b>"+produits[couleurSelectionnee]['prixProduit'] + " $</b>";
	cartePrixProduitSelectionne = cartePrixProduitSelectionne + "</div>";
	$("#sectionDroite").append(cartePrixProduitSelectionne);


// Regénération de la section de droite - Nom de la couleur (en fonction de la miniature de la couleur sélectionnée)
	var	carteNomCouleurSelectionnee = "<div class='mt-4 nomCouleur'>";
	carteNomCouleurSelectionnee = carteNomCouleurSelectionnee + "<b>Couleur:</b> "+produits[couleurSelectionnee]["couleurArticle"];
	carteNomCouleurSelectionnee = carteNomCouleurSelectionnee + "</div>";
	$("#sectionDroite").append(carteNomCouleurSelectionnee);


// Re-affichage de la section des images de miniatures
	$(".miniatures").show();
	$(".miniatures").insertAfter($(".nomCouleur"));


// Re-affichage de la section des boutons de tailles
	$(".tailleProduit").show();
	$(".tailleProduit").insertAfter($(".miniatures"));


// Re-affichage de la section du bouton ajout au panier
	$(".boutonAchat").show();
	$(".boutonAchat").insertAfter($(".tailleProduit"));
	

// Conditions pour savoir si une couleur existe pour une taille sélectionnée
// Quand une taille n'est pas séléctionnée "undefined" il ne faut pas que la mention d'indisponibilité apparaisse
	if (tailles[tailleSelectionnee] == undefined) {
		$(".articleIndisponible").hide();
	} else {
		if (produits[couleurSelectionnee]["taillesDispo"].includes(tailles[tailleSelectionnee])) {
		//console.log("la couleur "+produits[couleurSelectionnee]["couleurArticle"]+" existe pour la taille "+tailles[tailleSelectionnee]);
		} else {
		//console.log("la couleur "+produits[couleurSelectionnee]["couleurArticle"]+" n'existe pas pour la taille "+tailles[tailleSelectionnee]);
			$(".articleIndisponible").show();
			$(".articleIndisponible").insertAfter($(".tailleProduit"));
			$("button").removeClass("btn-dark text-white");
// Ici je souhaite retirer la précédente taille sélectionnée de la mémoire en attribuant la valeur "undefined" à la taille sélectionnée
			tailleSelectionnee = undefined;
		};
	};
});


// Gestionnaire d'évènement au clic sur les boutons de tailles
$(".bouton-filtre").on("click", function() {
	tailleSelectionnee = $(this).data("tailles");

	$("button").removeClass("btn-dark text-white");
	$(this).addClass("btn-dark text-white");
	$(".articleIndisponible").hide();
	$(".tailleNonSelectionnee").hide();

// Le code ci-dessous était utilisé pour tester la disponibilité d'une taille dépendamment de la couleur préalablement sélectionnée
/*if (produits[couleurSelectionnee]["taillesDispo"].includes(tailles[tailleSelectionnee])) {
console.log("La taille "+tailles[tailleSelectionnee]+" existe pour la couleur "+produits[couleurSelectionnee]["couleurArticle"]);
} else {
console.log("La taille "+tailles[tailleSelectionnee]+" n'existe pas pour la couleur "+produits[couleurSelectionnee]["couleurArticle"]);
};*/

});


// Gestionnaire d'évènement au clic sur le bouton d'ajout au panier
$(".boutonAchat").on("click", function() {

	if (tailles[tailleSelectionnee] == undefined) {
		$(".tailleNonSelectionnee").show();
	} else {
		$(".tailleNonSelectionnee").hide();
		console.log("Le produit ajouté au panier est de couleur: "+produits[couleurSelectionnee]["couleurArticle"]+ ", et la taille est: "+tailles[tailleSelectionnee])
	};
});





