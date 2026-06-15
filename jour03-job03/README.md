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
