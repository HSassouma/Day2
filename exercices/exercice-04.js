/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 04 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * SOMME DES N PREMIERS NOMBRES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Calculez la somme des 50 premiers entiers naturels (1 + 2 + 3 + ... + 50) à l'aide d'une boucle.
 *
 * RÉSULTAT ATTENDU
 * 1275
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-04
 * ▶️ Commande : node day02/exercices/exercice-04.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let somme=0
for(let j=1;j<=50;j++){
    somme+=j
}
console.log("Somme :"+somme)
