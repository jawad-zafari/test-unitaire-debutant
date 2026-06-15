# Projet : Tests Unitaires - Calculatrice

Ce projet montre comment faire des tests unitaires pour une calculatrice. La calculatrice a deux versions : une version côté serveur en PHP et une version côté client en JavaScript. L'objectif est de vérifier le fonctionnement du code avec deux outils : **PHPUnit** et **Jest**.

---

## Structure du Projet

Voici la structure des fichiers du projet :

```text
jour03-job03/
├── calculator.css
├── calculator.js
├── Calculator_JS.html
├── calculator.php
├── Calculator_PHP.php
├── image/
│   ├── 1-installation.png
│   ├── 2-tests-php-erreur.png
│   ├── 3-tests-php-succes.png
│   └── 4-tests-js-succes.png
├── tests/
│   ├── calculator.test.js
│   └── CalculatorTest.php
├── composer.json
├── package.json
└── README.md
```
---

## Étape 1 : Configuration des Outils
### 1. Pour PHPUnit (PHP)

Nous initialisons le projet avec la commande `composer init`. Ensuite, nous installons PHPUnit avec cette commande :

```bash
composer require --dev phpunit/phpunit
```
Dans le fichier `composer.json`, nous ajoutons un script pour lancer les tests facilement :

```json
"scripts": {
  "test": "phpunit tests/"
}
``` 
---

### 2. Pour Jest (JavaScript)

Nous initialisons `Node.js` avec la commande `npm init -y`. Ensuite, nous installons Jest avec cette commande :
```bash
npm install --save-dev jest
```
Dans le fichier `package.json`, nous modifions le script de test :
```json
"scripts": {
  "test": "jest"
}
``` 
----

## Étape 2 : Écriture des Tests Unitaires

### 1. Tests PHP (`tests/CalculatorTest.php`)
Avec PHPUnit, nous testons ces éléments :
* Les opérations de base : l'addition, la soustraction, la multiplication et la division.
* La division par zéro : le code doit lever une erreur (`RuntimeException`).
* **Bonus :** La gestion d'une chaîne vide (pour corriger un bug).

### 2. Tests JavaScript (`tests/calculator.test.js`)
Avec Jest, nous testons ces éléments :
* Les quatre opérations de base (addition, soustraction, multiplication, division).
* Les priorités mathématiques (par exemple : `-2+3*4` doit donner `10`).
* Les parenthèses (par exemple : `(2+3)*4` doit donner `20`).
* Les expressions invalides (par exemple : `2+bad` doit lever une erreur).
* **Bonus :** Le comportement avec une chaîne vide.

---
