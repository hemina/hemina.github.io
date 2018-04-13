---
layout: post
title: "MeetUp NLP"
description: ""
category: "Tech"
tags: [Meetup Paris, EN]
---
{% include JB/setup %}

nmeet001
2S7zHg_56

## NLP for regression
use case: Given product description, predict price

xgboost tokens contribution importance

- description are more list-like built than a sequence of words with temporality
- long description
- need of interpretability

=> less adapt to RNN/LSTM...

test on Leboncoin

## Reading Wikipedi to Answer Open-Domain Questions
@FAIR

SOTA systems based on KB

DrQA retriver
tfidf 2-gram outperform wiki built-in search

DrQA reader
attention based with GloVe embeddings

Q: retriver, how to define quantity context to retrive? one page? threshold on the ?		
A: 5 wiki pages => choice explained in paper to be published

2-3 hours using 8 GPUs full model

## Create link between legal entities
legal contents have tons of links
messy data

OCR
Normalization
Deduplication

How to map the legal genome?
NER: special entities, eg. avocat, cabinet, juri, date, etc.
Text similarity
Co-reference
Topic classification

chronologie de l'affaire show evolution

build page for all lawyers in France, with all decisions, bring visibility 



