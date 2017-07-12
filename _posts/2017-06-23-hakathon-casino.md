---
layout: post
title: "Hakathon Casino"
description: ""
category: "Tech"
tags: [FR]
---
{% include JB/setup %}
# Pitch
## OCCI, les web cookies dans le monde réel [3]
geolocalisation
fusion data client et data produit
communiquer carte discount

## courses devant les ecrans/affiches dans les station metro [4]
acheter par scaner (partout)

## Mon Panier Fermier [9]
ML liste des courses
suggestion panier/recette locaux

## L'Anchois [2]
petit magasin qui contient tout
Google Assitant 

## EasyScan [9]  

(complet)
Scan jeux sur les paquets
paiement sans contact
realité augemente

## Mon personal shopeur [5]
suggestion liste d'achat
parcours de shopping

## Transformer fil d'attente agreable [6]
estimation temps d'attent 

## Shopping offline [4]
pas de connexion Internet
Map + chatbot

## My Casino [5]
API 
perdre un bras
rendre tout en audio

## Weeship [7]
commande drive recuperer les courses

## Liste de course de demain [8]
assistant vocal (ratatouille => liste genere)

## Scrach&Win [3]
jeu de concours
identification d'image

## Shopping Bot [7]
propose panier quand jusqu'à certain niveau

## SmartWifi [5]
une fois connecter au Wifi, identifiant permet d'analyse parcours client

## Jackpot [wu]
handle coupons

## Maggy, assitant magasin [5]
ne pas rater promo

## Smart shopping list [5]
predict besoin d'utilisateur
chatbot pour personalisation et communication

## Assistant vocal [7]
recette => orienter magasin plus proche, rayon
alia

## Cloner Amazon Go [2]

## Talk&EasyShop [7]
faciliter parcours client
creer lien social
chatter avec un autre consommateur pour demander l'avis

## Bouton pour commander [2]




#Prez
## Sigfox
2012 basé à Toulouse
Low Power Wide Area Network
batterie 5-15 ans
reseau 32 pays => 60 pays fin d'année
rajouter connecivite 2 dollars

dev Python envoyer message sur reseaux
fait pas d'objet
deployer un plateforme 
besoin 20 moins d'antenne
Sigfox Cloud identification
AWS/MS Azure/Google 

message 100Hz
robust interfenrence
alarm connecte Sigfox
connected defibrillator
connected bee hives (detecté si il y a des vols, quel moment à recupere miel)
pas de carte sim, transferer d'un pays à l'autre
pas besoin de synchronisation
bande de 200KHz, chaque repetition 100Hz
sans ack, 3 fois repetitions, 98% dans zone couverte
ack limite par downlink
140 msg par jour, uplink 12 Byte, up to 6 messages/hour
downlink 8 Byte, 4 msg/day garantie

long distance, 2000 antennes en France
+200km (1151km mer)
city: 2-10km
village: 100km

REST API
callback(l'adresse vers lequel vous envoyer les données, email, etc.)

200 users en meme temps, sans collision
30-35 euros
arduino sigfox, 2 ans de connectivity

temperature, GPS
data sous format Hex
permet de geolocalisation de l'ordre de km, pas GPS, pas capable de tracker container precisement, quand pas besoin de precision à 10m
partenaire qui mix sigfox et GPS qui adapte à plus de cas d'utilisation
85% population couvert en France

## MS Azure
Mattieu pour pass Azure 150 dollars 
rapidement concept service
Azure fonction => micro service
contraint de scalabilité 

## Smartly.ai
modeliser la partie conversation du bot
design langague graphique (drag and drop)
comment faire quand le bot ne sait pas repondre => mixer support humain et support automatisé


