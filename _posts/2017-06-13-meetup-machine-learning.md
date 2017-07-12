---
layout: post
title: "Meetup Machine Learning"
description: ""
category: "Tech"
tags: [Meetup Paris]
---
{% include JB/setup %}

## Auto-ML
@CA

Automatisation: 
1. Nettoyage des données
2. Optimisation modele

### MLBox (pipeline)
(DS)
Classification+Regression
Script Python Simplifie
gagnant en precision

lecture des types de fichier
detection tache(Classification/Regression)
feature engineering
validation

=> pipeline optimal

importance feature
detection leak

python 2.7, Linux
MLBox

Detection de drift
P(x,y)=P(x)P(y|x)
Mauvais hypothese: les données suivent meme distribution.
=> P(x)

train/test set ensemble
greedy => enlever les vars instable pas important

### EDGE-ML (no grid-search) 1600h 3.5an
(informaticien, pas besoin de base de math)
Classification
1 ligne de commande/ wrapper Python
robustess

chercher les mots lier a classe

interpretation des features
ranking des meilleurs models(MLBox pret)
integrer des projets existants sklearn pipeline

column => Categorial 
entity embedding

nn pour apprendre cette representation
coding des vars => couche(constant/propotionnel, pour scalable)=>output(lable/variable context)

eg.
marque embedding
trier les marques par energie

HomeSite => prix immobilier est sligne avec le marché?

pourquoi pas besoin de gridsearch?
Rasberry2 + C++

RandomForest AI base

discretisation, groupage

MODL(minimun optimized description length), 29 juin, webinar

courbe montre 
estimer distribution de classe

couleur de champignon => danger?
regrouper les couleur pour chaque groupe meme distribution danger


ArgMax P(M|D)=P(M)P(D|M)/P(D)

definir famille modele
P(M) toujours hierarchique
critere de selection: -log(P(M|D)) minimise

choix nb d'interval+position d'interval
vraisemblance: ce model decrit bien nos données?(permutation des var/label entre les individus)

equilibre entre les deux(underfitting+overfitting at same time)

advantage de non-grid search:
1. gagner du temps
2. economiser materiel

detection du drift
pas d'hypothese sur distribution

detection spam/non-spam sms
feature(mot) => proba de spam
techno dispo fin sept.

liberer potentiel des données