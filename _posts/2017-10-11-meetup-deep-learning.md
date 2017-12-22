---
layout: post
title: "MeetUp Deep Learning"
description: ""
category: "Tech"
tags: [Meetup Paris]
---
{% include JB/setup %}

## DL in production
Text+Image recognition
Trends spotting and analysis for Fashion and Beauty

1. Tag Images(hat, jacket, handbag)
2. Detect objects(marks)

Q: Model trained end2end?
A: Seperately to assure the quality of each model

### Transfer Learning
TF+Keras
Docker
GPU for training
CPU/GPU for prod

ResNet, Inception, DenseNet	
pre-trained models + fine-tuning


Q: Retrain the whole model or only the last layer?
A: whole

Q: On-line Learning?
A: Yes

Q: Pricing in Training Data ?
A: Yes

### Manage classes
Thesaurus: one entry point for each class
when adding new classes, influence all model

Pipeline Test 
Data totally external from train/valid set

Re-label => consistency strong label for training

## Inference
Data => Kafka => DL(models) => Kafka(metadata) => indexing
Kafka based => Decoupling + Robustness + Queue monitoring + Scalability

Two machines with GPU => Kafka

Send ack(commit) only after the processing to avoid crushing during processing

for one partiion, we can only have one consumer, but not reversely

timer => how long it takes to process each batch

Kafka lag 

Nvidia-Docker => use GPU

Eg. Efficient LSTM
TF XLA 
spotting instances discount

## Learning plateform
generate exercises for personalized homework

aim: understand what the students know, and how well do they know

Word2Vec to measure the difficulty level of exercises

LSTM fot all diff categories, students, exercises, subjects, etc.

Time to respond as a feature to decide difficulty of exercise.

## RAMP

## DL & GPU 
20, 21, 22 Nov	
lpma-paris.fr/dlhpc

