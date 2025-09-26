### Application Météo Tchad
## Description

Cette application permet de consulter la météo sur 7 jours pour plusieurs villes du Tchad.
L’utilisateur sélectionne une ville dans une liste et accède aux prévisions détaillées :

- Températures minimales et maximales.
- Conditions météo (soleil, nuage, pluie, etc.).
- Icônes représentatives.
- L’interface est responsive et s’adapte aux ordinateurs et aux mobiles.

## Fonctionnalités
- Liste des principales villes tchadiennes : N’Djamena, Moundou, Sarh, Abéché, Mongo.
- Sélection d’une ville pour afficher la météo.
- Prévisions météo sur 7 jours avec détails (températures et conditions).
- Interface claire, simple et responsive.

  ## Capture Ecran Appareil
<img width="1915" height="918" alt="Capture d’écran du 2025-09-25 13-08-54" src="https://github.com/user-attachments/assets/515a22a7-68e5-4c4c-abba-cafdf7fb6b90" />
<img width="1910" height="932" alt="Capture d’écran du 2025-09-23 10-05-51" src="https://github.com/user-attachments/assets/7a129245-1750-4eee-979f-76893d8b59be" />
<img width="1910" height="932" alt="Capture d’écran du 2025-09-23 10-05-03" src="https://github.com/user-attachments/assets/85f0724d-507a-4a7e-a389-1c458dbb9749" />
<img width="1910" height="932" alt="Capture d’écran du 2025-09-23 10-04-53" src="https://github.com/user-attachments/assets/7fd2a14c-6e7b-4740-ab2a-605900727dcc" />






## Technologies utilisées
### Frontend



UI : HTML5, CSS3 (Flexbox/Grid), Tailwind ou Bootstrap.

### Backend

Node.js avec Express.js.

Gestion des routes API.

##### API externe

Météo Concept API (ou toute API météo équivalente).
Documentation : pour plus de détails :

https://api.meteo-concept.com/documentation

### Outils

Git et GitHub pour la gestion de version.

Postman pour tester les appels API.

## Installation et lancement

Cloner le dépôt :
``` 
git clone https://github.com/HisseinHD/App-M-t-o-Tchad.git
cd meteo-tchad

``` 
### Installer les dépendances backend :

```

npm install

``` 
Créer un fichier .env à la racine du backend avec :

PORT= votre PORT ex:3000
API_KEY=ta_cle_api_meteo
### Lancer le backend :

``` 
node server.js

```  
Le backend sera accessible sur : http://localhost:3000

### Installer et lancer le frontend :

- ouvrer le fichier index.html.
- accèder à l’application via le navigateur. 

###  
