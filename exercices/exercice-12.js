/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 12 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * NOMBRE PREMIER
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Un nombre est premier s'il n'est divisible que par 1 et par lui-même. Prenez let nb = 29. Bouclez de 2 jusqu'à 28 pour voir si un nombre le divise. Si ce n'est pas le cas, affichez "29 est un nombre premier".
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-12
 * ▶️ Commande : node day02/exercices/exercice-12.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
 let nb = 29;
let premier = true;

for (let i = 2; i <= 28; i++) {
    if (nb % i === 0) {
        premier = false;
        break;
    }
}

if (premier) {
    console.log(`${nb} est un nombre premier`);
} else {
    console.log(`${nb} n'est pas un nombre premier`);
}
 
