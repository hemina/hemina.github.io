---
layout: post
title: "MeetUp NLP"
description: ""
category: "Tech"
tags: [Meetup Paris]
---
{% include JB/setup %}

## Data cancer du sein
- fiche de réunion de concertation
- lettre de sortie  
(histoire maladie, bilan d'extension)

17 ans histo
9583 patients

data pas structuré
richesse syntaxique

- pretraitement(correction orthographie..., establissement chronologie)
- identification des concept, dict (Word2Vec) à l'aide des médicins => retrouver des synonymes
- correction erreurs typographie


analyse sur l'impacte de traiement hormonal 
distribution age, taille tumeur
arbre de decision => traitement et effet médicin

character based CNN 
200 dossiers labeled 

faute d'ortho: mot tres faible freq => proch des autres mots

## Désambiguisation lexicales langues et entités nommées
indexation et recherche d'info
QA

detection
reconnaissance

wikipedia => retrouver categorie => construire lexique

stanford NER fonctionne bien en français
<http://jiayi.space/post/ying-wen-shi-ti-shi-bie-de-pythonshi-xian>

test interface:
<http://nlp.stanford.edu:8080/ner/process>

customize tags:
<https://stackoverflow.com/questions/28371206/stanford-ner-how-to-add-our-own-tags-in-existing-ner-models>

<https://stackoverflow.com/questions/41722217/how-to-customize-stanford-ner-in-python>
chatbot adapter les intentions
pas par entite, par complementaire peut-etre