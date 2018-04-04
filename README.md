# DoleticRESTClientV2

Ce projet est l'application front-end de Doletic. Elle fonctionne sous Angular4.

## Installation du projet :

1. Installer [npm](https://nodejs.org/fr/) avec une version supérieure ou égale à 1.4.9.

2. Avec npm, utiliser la commande `npm install -g @angular/cli` pour installer angular

3. [Forker](https://guides.github.com/activities/forking/) le repository Git DoleticRestClientV2

4. Cloner son fork localement

5. A la racine du dossier DoleticRest, exécutez la commande `npm install` ou `npm i`

6. Modifier le fichier src/app/app.constants.ts de la sorte :
	* Rentrer votre clientId dans LOGIN_CONFIG
    * Rentrer votre secretId dans LOGIN_CONFIG

## Utilisation du server

Lancez le serveur front-end avec la commande  `ng serve` puis ouvrez votre navigateur web à la [page](http://localhost:4200/) `http://localhost:4200/`. Vous pouvez également executer la commande `ng serve -o` pour ouvrir votre navigateur directement sur la bonne adresse.

Si vous modifiez un fichier alors que le serveur est en marche il recompilera directement sans que vous ayez besoin de le relancer.