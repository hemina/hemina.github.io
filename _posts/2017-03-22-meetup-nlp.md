---
layout: post
title: "Meetup NLP"
description: ""
category: "Tech"
tags: [Meetup Paris]
---
{% include JB/setup %}

## Détection des intentions et entités
Recast

Génerer des phrases par intention  
Détecter intention par phrase

besoin de dataset pour l'intention et exemple de résultat 

### Clustering input de phrase pour trouver l'intention:

- Mesure de proximité(similarité, distance)
- Critére de validation(interne, externe, hybride)
- Algo(Kmeans[faut choisir k, rapide, pour un premier test], AgglomerativeClustering[pas besoin de k, mais faut definir ou couper l'arbre],DBSCAN[pas besoin de k, trouver des zones continus de dense, faut trouver bonne densité]..)

thematique(sujet) + semantique(sens)
tokenization(travailler avec des mots), clean, enlever stopwords[attention en negation]
tous les mots n'ont pas d'info semantique perdent leurs places avec tfidf, ignore l'ordre, dense=>avg
vec sentence: avg mot + vecteur paragraphe

Réduire dimansion:
PCA
t-SNE
LargeVis
 
bokeh=> afficher directement sur navigateur

## Transformer les données structurées en conversation

BUNT
The first benchmarker for NLU API

Definir intent, pour chaque intent, definir des exemples
4 phrases par intent comme dataset 

n-gram => words out of vocabulary 
moyen vec des phrases

Siames network

Meilleur perf pour Quora: 
Bilateral Multi-perspective matching for Natural language Sentences [89% accuracy]

Distance entre les phrases + SVM pour classifier intention + Threshold pour decider threshold de proba

Similarité entre question et réponse

log loss sensible 0-1

## Proxem
SkipGram VS AdaGram
Tag Cloud

Web mining => quelques heures pour url
pour recupere les docs => quelques jours
text mining => quelques minutes			



