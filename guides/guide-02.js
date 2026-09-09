/**
 * JOUR 02 — GUIDE 02
 * Attendre un événement (Boucle while)
 *
 * OBJECTIF
 * On vous donne un nombre N = 100. Divisez ce nombre par 2 en boucle jusqu'à ce qu'il soit strictement inférieur à 1. Comptez combien de divisions ont été nécessaires.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';


let N = 100;
let i = 0;

while (true) {
    N /= 2;
    i++;

    if (N < 1) {
        break;
    }
}

console.log("Le nombre de divisions est " + i);