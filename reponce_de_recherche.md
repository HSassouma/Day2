# 🔎 Jour 02 — Recherche : Les boucles

---

## Question 01 — Différence entre `for` et `while`

### ❓ Question

**Quelle est la différence d'usage principale entre une boucle `for` et une boucle `while` ?**

### ✅ Réponse

> La boucle `for` est généralement utilisée lorsqu'on connaît à l'avance le nombre de répétitions ou lorsqu'on peut facilement le déterminer. La boucle `while` est utilisée lorsqu'on veut répéter une action tant qu'une condition est vraie, sans forcément connaître à l'avance le nombre de répétitions.

### 🧠 Explication

Avec `for`, on connaît souvent le nombre de fois que l'on veut répéter une opération.

Par exemple, afficher les nombres de 1 à 5.

Avec `while`, on ne connaît pas forcément le nombre exact de répétitions. On dit simplement : **continue tant que cette condition est vraie**.

### 💻 Exemple

```javascript
// Exemple avec for
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Ici, nous savons que la boucle va s'exécuter 5 fois.

```javascript
// Exemple avec while
let age = 15;

while (age < 18) {
    console.log("La personne est mineure");
    age++;
}
```

Ici, la boucle continue tant que `age < 18`.

### 📝 À retenir

**`for` → nombre de répétitions généralement connu.**

**`while` → répétition basée principalement sur une condition.**

---

# Question 02 — `do...while` et `while`

### ❓ Question

**À quoi sert la boucle `do...while` et en quoi diffère-t-elle de `while` ?**

### ✅ Réponse

> La boucle `while` vérifie la condition avant d'exécuter le code. La boucle `do...while` exécute le code une première fois, puis vérifie la condition. Ainsi, une boucle `do...while` s'exécute au moins une fois.

### 🧠 Explication

La différence importante est **l'ordre d'exécution**.

Avec `while` :

```text
Condition → Code
```

Si la condition est fausse dès le début, le code ne s'exécute jamais.

Avec `do...while` :

```text
Code → Condition
```

Le code est exécuté une première fois, même si la condition est fausse.

### 💻 Exemple avec `while`

```javascript
let age = 10;

while (age > 18) {
    console.log("Vous êtes majeur");
}
```

La condition `age > 18` est fausse.

Donc rien ne s'affiche.

### 💻 Exemple avec `do...while`

```javascript
let age = 10;

do {
    console.log("Vérification de l'âge");
} while (age > 18);
```

Même si `age > 18` est faux, le message est affiché une fois.

### 📝 À retenir

**`while` → vérifie d'abord.**

**`do...while` → exécute d'abord, vérifie ensuite.**

---

# Question 03 — Boucle infinie

### ❓ Question

**Que se passe-t-il si vous oubliez d'incrémenter ou de modifier la condition d'arrêt dans une boucle `while` ? Comment appelle-t-on ce problème ?**

### ✅ Réponse

> Si on oublie de modifier la variable utilisée dans la condition d'arrêt, la condition peut rester toujours vraie. La boucle continue alors indéfiniment. Ce problème s'appelle une boucle infinie.

### 🧠 Explication

Prenons cet exemple :

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
}
```

Le problème est que `i` reste toujours égal à `1`.

Donc :

```text
1 <= 5 → true
1 <= 5 → true
1 <= 5 → true
...
```

La boucle ne s'arrête jamais.

### ❌ Mauvais exemple

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
}
```

### ✅ Bon exemple

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

Grâce à `i++`, la valeur de `i` augmente :

```text
1 → 2 → 3 → 4 → 5 → 6
```

Lorsque `i` devient `6`, la condition `i <= 5` devient fausse et la boucle s'arrête.

### 📝 À retenir

**Boucle qui ne s'arrête jamais = boucle infinie.**

---

# Question 04 — `break`

### ❓ Question

**À quoi sert le mot-clé `break` à l'intérieur d'une boucle ?**

### ✅ Réponse

> Le mot-clé `break` permet d'arrêter immédiatement l'exécution d'une boucle, même si la condition de la boucle est encore vraie.

### 🧠 Explication

Normalement, une boucle continue jusqu'à ce que sa condition devienne fausse.

Mais avec `break`, on peut dire :

> **« Arrête la boucle maintenant. »**

### 💻 Exemple

```javascript
for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}
```

Résultat :

```text
1
2
3
4
```

Lorsque `i` devient `5`, le programme rencontre :

```javascript
break;
```

La boucle s'arrête immédiatement.

### 📝 À retenir

**`break` = arrêter complètement la boucle.**

---

# Question 05 — `continue`

### ❓ Question

**À quoi sert le mot-clé `continue` à l'intérieur d'une boucle ?**

### ✅ Réponse

> Le mot-clé `continue` permet de passer directement à l'itération suivante de la boucle. Il ignore donc le reste du code de l'itération actuelle sans arrêter complètement la boucle.

### 🧠 Explication

`continue` est différent de `break`.

`break` :

> Arrête toute la boucle.

`continue` :

> Ignore seulement l'itération actuelle et continue avec la suivante.

### 💻 Exemple

```javascript
for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

Résultat :

```text
1
2
4
5
```

Quand `i` vaut `3`, `continue` est exécuté.

Le `console.log()` est donc ignoré pour cette itération.

Mais la boucle continue avec `4`.

### 📝 À retenir

**`break` → arrête la boucle.**

**`continue` → saute l'itération actuelle.**

---

# Question 06 — Ordre d'exécution d'une boucle `for`

### ❓ Question

**Dans la structure `for(initialisation; condition; incrémentation)`, dans quel ordre exact ces trois parties sont-elles exécutées ?**

### ✅ Réponse

> L'initialisation est exécutée une seule fois au début. Ensuite, la condition est vérifiée. Si elle est vraie, le bloc de code est exécuté. Après cela, l'incrémentation est effectuée. La condition est ensuite vérifiée à nouveau et le processus continue jusqu'à ce que la condition devienne fausse.

### 🧠 Explication

Prenons :

```javascript
for (let i = 1; i <= 3; i++) {
    console.log(i);
}
```

L'ordre est :

```text
1. Initialisation : let i = 1
              ↓
2. Condition : i <= 3
              ↓
3. Exécution du code
              ↓
4. Incrémentation : i++
              ↓
5. Retour à la condition
              ↓
6. Code
              ↓
7. Incrémentation
              ↓
...
```

### 💻 Exemple détaillé

```javascript
for (let i = 1; i <= 3; i++) {
    console.log(i);
}
```

Cela donne :

```text
i = 1
i <= 3 → vrai
afficher 1
i++

i <= 3 → vrai
afficher 2
i++

i <= 3 → vrai
afficher 3
i++

i <= 3 → faux
arrêt
```

### 📝 À retenir

L'ordre est :

**Initialisation → Condition → Code → Incrémentation → Condition → ...**

---

# Question 07 — Déclarer la variable en dehors du `for`

### ❓ Question

**Est-il possible de déclarer la variable d'initialisation en dehors de la boucle `for` ?**

### ✅ Réponse

> Oui, il est possible de déclarer la variable d'initialisation avant la boucle `for`. Dans ce cas, la partie d'initialisation du `for` peut être laissée vide.

### 🧠 Explication

Normalement, on écrit :

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

Mais on peut aussi écrire :

```javascript
let i = 0;

for (; i < 5; i++) {
    console.log(i);
}
```

La variable `i` existe déjà avant la boucle.

### 💻 Exemple

```javascript
let i = 0;

for (; i < 5; i++) {
    console.log(i);
}

console.log("Valeur finale :", i);
```

Résultat :

```text
0
1
2
3
4
Valeur finale : 5
```

Ici, on peut encore utiliser `i` après la boucle.

### 📝 À retenir

**Oui, la variable peut être déclarée avant le `for`.**

---

# Question 08 — Boucle imbriquée

### ❓ Question

**Qu'est-ce qu'une boucle imbriquée (nested loop) et quand en avons-nous besoin ?**

### ✅ Réponse

> Une boucle imbriquée est une boucle placée à l'intérieur d'une autre boucle. Elle est utile lorsqu'on doit effectuer une répétition à l'intérieur d'une autre répétition ou parcourir plusieurs niveaux de données.

### 🧠 Explication

Une boucle imbriquée ressemble à ceci :

```javascript
for (...) {

    for (...) {

    }

}
```

La deuxième boucle se trouve **à l'intérieur de la première**.

Par exemple, imaginons que nous avons 3 étudiants et que chaque étudiant possède 2 notes.

On peut utiliser une boucle pour les étudiants et une autre pour les notes.

### 💻 Exemple

```javascript
for (let etudiant = 1; etudiant <= 3; etudiant++) {

    for (let note = 1; note <= 2; note++) {

        console.log(
            "Étudiant " + etudiant + " - Note " + note
        );

    }
}
```

La boucle intérieure est exécutée pour chaque étudiant.

### 📝 À retenir

**Nested loop = une boucle à l'intérieur d'une autre boucle.**

---

# Question 09 — Performance des boucles imbriquées

### ❓ Question

**Quel est le risque majeur en termes de performances lorsqu'on utilise de multiples boucles imbriquées ?**

### ✅ Réponse

> Le principal risque est l'augmentation importante du nombre d'opérations à effectuer. Plus il y a de niveaux de boucles imbriquées, plus le temps d'exécution peut augmenter, ce qui peut rendre le programme moins performant.

### 🧠 Explication

Prenons deux boucles :

```javascript
for (let i = 0; i < 100; i++) {

    for (let j = 0; j < 100; j++) {

        console.log(i, j);

    }
}
```

La première boucle fait 100 répétitions.

Pour **chaque répétition**, la deuxième boucle fait aussi 100 répétitions.

Donc :

```text
100 × 100 = 10 000 opérations
```

Avec trois boucles :

```javascript
for (let i = 0; i < 100; i++) {

    for (let j = 0; j < 100; j++) {

        for (let k = 0; k < 100; k++) {

            console.log(i, j, k);

        }
    }
}
```

On peut arriver à :

```text
100 × 100 × 100 = 1 000 000 opérations
```

Cela peut ralentir fortement le programme lorsque les données deviennent grandes.

### 📝 À retenir

**Plusieurs boucles imbriquées peuvent augmenter fortement le nombre d'opérations et donc le temps d'exécution.**

---

# Question 10 — `switch` dans une boucle

### ❓ Question

**Peut-on utiliser un `switch` à l'intérieur d'une boucle ?**

### ✅ Réponse

> Oui, il est tout à fait possible d'utiliser un `switch` à l'intérieur d'une boucle. Cela permet de choisir une action différente à chaque répétition en fonction de la valeur testée.

### 🧠 Explication

On peut mettre un `switch` dans une boucle `for`, `while` ou `do...while`.

Par exemple, on veut afficher le nom d'un jour selon son numéro.

### 💻 Exemple

```javascript
for (let jour = 1; jour <= 3; jour++) {

    switch (jour) {

        case 1:
            console.log("Lundi");
            break;

        case 2:
            console.log("Mardi");
            break;

        case 3:
            console.log("Mercredi");
            break;
    }
}
```

Résultat :

```text
Lundi
Mardi
Mercredi
```

### ⚠️ Attention au `break`

Dans cet exemple :

```javascript
switch (jour) {

    case 1:
        console.log("Lundi");
        break;
}
```

Le `break` sert à sortir du **`switch`**.

Il ne signifie pas automatiquement qu'on sort de la boucle `for`.

### 📝 À retenir

**Oui, on peut mettre un `switch` dans une boucle.**

---

# 🎯 Résumé final à mémoriser

| Notion                   | Signification simple                                  |
| ------------------------ | ----------------------------------------------------- |
| `for`                    | Répéter généralement un nombre déterminé de fois      |
| `while`                  | Répéter tant qu'une condition est vraie               |
| `do...while`             | Exécuter au moins une fois puis vérifier la condition |
| `break`                  | Arrêter complètement la boucle                        |
| `continue`               | Passer à l'itération suivante                         |
| `i++`                    | Augmenter `i` de 1                                    |
| Boucle infinie           | Une boucle qui ne s'arrête jamais                     |
| Nested loop              | Une boucle à l'intérieur d'une autre                  |
| `switch` dans une boucle | Oui, c'est possible                                   |

### 🧠 Les 4 choses les plus importantes

```text
for
→ Je sais généralement combien de fois je veux répéter.

while
→ Je répète tant que la condition est vraie.

break
→ J'arrête la boucle.

continue
→ Je saute cette répétition et je continue.
```

Et pour `for` :

```text
Initialisation
      ↓
Condition
      ↓
Code
      ↓
Incrémentation
      ↓
Condition
      ↓
...
```
