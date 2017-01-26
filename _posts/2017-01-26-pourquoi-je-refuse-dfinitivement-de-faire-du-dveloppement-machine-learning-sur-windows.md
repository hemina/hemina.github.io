---
layout: post
title: "Pourquoi je refuse définitivement de faire du développement Machine Learning sur windows?"
description: ""
category: "Work" 
tags: [FR]
---
{% include JB/setup %}


## 1.Pour des ressources nombreuses prêt à utiliser      

Pour faire des gros projets (chabot, machine traduction), la façon la plus efficace est de travailler basé sur les travaux existants des autres. L’environnement de développement, dans notre domaine de Machine Learning, est Linux par default, sans aucun doute. 

Quand on est sur Linux, tout est prêt à utiliser après deux lignes de commandes d’installation. 

Or quand on est sur Windows, on commence par chercher les documentations utiles, déjà il faut un processus de filtrage de documentation. Cela arrive souvent que l’on suivi une documentation du début à la fin, et on finit par se rendre du compte que cela ne marche pas. Dans le meilleur cas, on a eu la chance de trouver une documentation de parfait. On va sur des sites de téléchargement l’un après l’autre. On teste les `.exe`,  cachés parmi les publicités de n’importe quoi. Dans certains cas, ce sont des faux logiciels, même les virus. Dans le meilleur cas, on réussi à installer tous les `.exe` comme il faut, on est content de finir l’installation, ce qui prend quelque jours sur Windows. On commence à coder dans cet environnement. Mais souvent il y a des bugs après la compilation, on ne comprend pas ces bugs. On fait copie-coller sur Google, essayer de trouver une réponse. Il n’y a que quelques sites correspondants. Dans le meilleur cas, on finit par trouver une réponse utilisable, en disant que sur Windows il y a un `dll` à déplacer ou à modifier par exemple, des choses que la plus part de data scientists ne comprennent pas. Des fois, on arrive pas à trouver une réponse comme on veut. Dans ce cas là, on mets des semaines pour tester différentes possibilités à l’imagination. Peut-être qu’on y arrive un jour, mais dans la plus part de cas, on désespère avant de pouvoir s’en sortir.
On est obligé de gaspiller une moitié du temps de développement pour configurer l’environment de windows, ce qui n’est pas du tout utile pour la prod!

## 2. Pour tester les nouvelles technologies les plus puissantes le plus rapidement possible

Un exemple, TensorFlow est le meilleur outil à l’époque pour faire du Machine Learning. La version Linux est publié en Nov. 2015. Or la version Windows, est sortie en Dec. 2016, avec plus qu’un an de retard. Puisque tous les data scientist sont sur Linux. Il n’y aucun doute de les nouvelles technologies seront tous sur Linux pour leur premiere étape. On ne va pas tarder juste pour attendre la version Windows.

## 3. Pour se renseigner le plus de troubleshoots au forum opensource

Comme la grande publique sont tous sur Linux, Il y a beaucoup de bug+solution accumulés sur les forums opensource. On va pouvoir les utiliser directement quand on est sur Linux. Or pour TensorFlow sur Windows, ce qui vient d’être sortir il y a moins d’un mois, je doute vraiment si ce genre de forum existe pour ce sujet. On peut tout à fait créer un tel forum et poser les questions nous même, faut juste attendre quelque mois pour une premiere réponse.

## 4. Pour rapprocher le produit final à la prod 

Imaginons, pour faire le PoC, tout le monde travaille sur Windows, les configurations et tout, purement Windows. Le jour où on décide de tout mettre en prod, sur Linux, comment on va tester ce projet? Combien de temps on va dépenser juste pour le changement de plateforme? Pourquoi on ne commence pas par un environnement le plus amical pour PoC et prod? 


Pour l’info, j’ai trouvé un système opensource de Machine Translation qui fait la même chose que la version la plus récente de Google Translation, ce qui est très intéressant pour faire avancer nos futur projets. Mais ce système est codé en Torch, une librairie ressemble à TensorFlow. C’est fait pour tourner sur Linux comme d’habitude. Mais on ne sait jamais si cela peut marcher sur windows avant de le tester, ce qui va prendre énorme de temps d’installation et configuration.