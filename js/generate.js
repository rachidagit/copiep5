class Generate {
    constructor(generateColuche, generateOscarwilde) {
        this.generateColuche = generateColuche;
        this.generateOscarwilde = generateOscarwilde;
        this.events()
    }

    // Méthode pour récupérer la valeur de l'auteur
    getQuoteAuthor() {
        this.authorValue = document.getElementById("quoteAuthorSelect").value;

        if (this.authorValue === "empty") {
            alert("Vous n'auriez pas oublié de choisir un auteur ? ");
        } else {
            return this.authorValue;
        }
    }

    // Méthode pour récupérer le nombre de citations choisi
    getQuoteNumber() {
        this.quoteNumber = document.getElementById("quoteNumberSelect").value;
        if (this.quoteNumber === "empty") {
            alert("Vous n'auriez pas oublié de choisir un nombre de citation par hasard ?");
        } else {
            return this.quoteNumber;
        }
    }

    //Méthode pour supprimer les citations affichées
    deleteQuote() {
        this.containerParaQuoteGenerate = document.getElementById("containerQuoteGenerate");
        this.containerParaQuoteGenerate.innerHTML = "";
    }

    // Méthode qui intègre tous les événements
    events() {
        document.getElementById("btnGenerate").addEventListener('click', () => {

            this.deleteQuote()
            this.getQuoteAuthor();
            this.getQuoteNumber();

            if (this.authorValue === "coluche") {
                console.log(this.authorValue);
                colucheQuote.randomQuote(this.generateColuche, this.quoteNumber);
            } else if (this.authorValue === "oscarwilde") {
                oscarwildeQuote.randomQuote(this.generateOscarwilde, this.quoteNumber);
            }
        });

        document.getElementById("btnDelete").addEventListener('click', () => {
            this.deleteQuote();
        });

        // Modifie le style de l'image en fonction du choix de l'auteur
        let authorName = document.getElementById("quoteAuthorSelect");
        const oscarwildeImg = document.getElementById("oscarwildeImg");
        const colucheImg = document.getElementById("colucheImg");

        authorName.addEventListener('change', () => {

            switch (authorName.value) {
                case "empty":
                    oscarwildeImg.style.filter = "blur(10px)";
                    colucheImg.style.filter = "blur(10px)";
                    break;
                case "coluche":
                    oscarwildeImg.style.filter = "blur(10px)";
                    colucheImg.style.filter = "blur(0)";
                    break;
                case "oscarwilde":
                    oscarwildeImg.style.filter = "blur(0)";
                    colucheImg.style.filter = "blur(10px)";
                    break;
            }

        });
    }
}
