//========== Tableau citations Coluche ==============
//===============================================
let startQuoteColuche = [
    "La différence qu'il y a entre les oiseaux et les hommes politiques, ",
        "Certains ont l'air honnête, ",
        "Les portes de l'avenir, ",
        "De tous ceux qui n'ont à rien à dire, ",
        "Des fois, ",
        "Le plus dur pour les hommes politiques, ",
        "C'est pas compliqué en politique, ",
        "Dans l'administration on ne doit pas dormir, ",
        "Un crédit à long terme, ",
        "C'est pas vraiment ma faut si y'en qui ont faim, "];

let middleQuoteColuche = [
    "c'est que de temps en temps, ",
    "mais quand ils te serrent la main, ",
    "sont ouvertes à ceux, ",
    "les plus agréables, ",
    "on a plus de contacts avec un chien pauvre, ",
    "c'est d'avoir la mémoire qu'il faut, ",
    "il suffit d'avoir une bonne conscience, ",
    "au burau le matin sinon, ",
    "ça veut dire que moins tu peux payer, ",
    "mais ça le devriendrait, "];

let endQuoteColuche = [
    "les oiseaux s'arrêtent de voler !",
    "tu as intérêt à recompter tes doigts.",
    "qui savent les pousser.",
    "sont ceux qui se taisent.",
    "qu'avec un homme riche.",
    "pour se souvenir de ce qu'il ne faut pas dire.",
    "et pour ça il faut avoir une mauvaise mémoire.",
    "on ne sait plus quoi faire l'après midi.",
    "plus tu payes.",
    "si on y changeait rien."];

//========== Tableau citations Oscar wilde ==============
//===============================================
let startQuoteOscarwilde = [
    "Il est beaucoup plus intelligent, ",
    "Aujourd'hui les gens, ",
    "La sagesse, ",
    "J'adore parler de rien, ",
    "La logique, ",
    "La musique, ",
    "L'expérience, ",
    "Les folies, ",
    "Le meilleur moyen, ",
    "La beauté, "];


let middleQuoteOscarwilde = [
    "de dire des choses absurdes, ",
    "connaissent le prix de tout, ",
    "c'est d'avoir des rêves suffisamment grands, ",
    "c'est le seul domaine, ",
    "est le dernier refuge, ",
    "met l'ême en harmonie, ",
    "est le nom que chacun, ",
    "sont les seules choses, ",
    "de résister à la tentation, ",
    "est dans les yeux, "];

let endQuoteOscarwilde = [
     "que d'en écouter.",
    "et la valeur de rien.",
    "pour ne pas les perdre de vue lorsqu'on les poursuit.",
    "où j'ai de vagues connaissances.",
    "des gens sans imagination.",
    "avec tout ce qui existe.",
    "donne à ses erreurs.",
    "que l'on ne regrette jamais.",
    "de résister à la tentation.",
    "de celui qui regarde."];


// Instanciation des deux classes
let colucheQuote = new Quote(startQuoteColuche, middleQuoteColuche, endQuoteColuche);
let oscarwildeQuote = new Quote(startQuoteOscarwilde, middleQuoteOscarwilde, endQuoteOscarwilde);
let generate = new Generate(colucheQuote, oscarwildeQuote);












