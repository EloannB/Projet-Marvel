class SuperHero {
    constructor(nom, image, identite, pouvoir, ville, equipe) {
        this.univers = "Marvel";
        this.nom = nom;
        this.image = image;
        this.identite = identite;
        this.pouvoir = pouvoir;
        this.ville = ville;
        this.equipe = equipe;
    }
}


const superherosMarvel = [
    new SuperHero("Spider-Man", "img/spiderman-hd-wallpaper-scaled.jpg", "Peter Parker", "Agilité et toile", "New York", "Avengers"),
    new SuperHero("Iron Man", "img/iron-man-4k-2020-art-lw-1920x1080.jpg", "Tony Stark", "Technologie avancée", "New York", "Avengers"),
    new SuperHero("Black Widow", "img/4b921278689b6a65094825d86f0eaeab.jpg", "Natasha Romanoff", "Maitrise du combat", "New York", "Avengers"),
    new SuperHero("Thor", "img/thumb-1920-1026220.jpg", "Thor Odinson", "Contrôle de la foudre", "Asgard", "Avengers"),
    new SuperHero("Hulk", "img/hulk-smash-art_1536522682.jpg", "Bruce Banner", "Force surhumaine", "New York", "Avengers"),
    new SuperHero("Doctor Strange", "img/769110-new-dr-strange-wallpaper-1920x1080-ipad-retina.jpg", "Stephen Strange", "Magie mystique", "New York", "Avengers")
];


const superheroContainer = document.getElementById("superhero-container");

superherosMarvel.forEach(superhero => {
    const superheroDiv = document.createElement("div");
    superheroDiv.classList.add("superhero-card");

    superheroDiv.innerHTML = `
        <h2>${superhero.nom}</h2>
        <img src="${superhero.image}" alt="${superhero.nom}" class="superhero-image">
        <p><strong>Univers:</strong> ${superhero.univers}</p>
        <p><strong>Identité secrète:</strong> ${superhero.identite}</p>
        <p><strong>Pouvoir:</strong> ${superhero.pouvoir}</p>
        <p><strong>Ville:</strong> ${superhero.ville}</p>
        <p><strong>Équipe:</strong> ${superhero.equipe}</p>        
    `

    superheroContainer.appendChild(superheroDiv)
});