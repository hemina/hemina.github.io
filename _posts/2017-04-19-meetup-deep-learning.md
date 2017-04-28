---
layout: post
title: "Meetup Deep Learning"
description: ""
category: "Tech"
tags: [Meetup Paris]
---
{% include JB/setup %}

## 1. Supervised Learning of Universal Sentence Representation from Natural Language Inference
@Facebook AI Research

Sentence Embedding

Sentence U and Sentence V mean the same?

BiLSTM Max pooling

Word embedding as input to produce general purpose sentence embedding

SkipThought/FastSent

Evolution of embedding per epoch so that capture more information.

Linaire classifier instead of big MLP

## 2.Learning weakly supervised multimodal phoneme embeddings
@ENS

Obejctif: Model children's language learning process

McGurk Effect

Blue Lips dataset(blue to find mouth easier)
Audio-visual speech corpus
16 French speakers

FFT => Obtain energy per freq

classifier to track mouth

Same network
two words => same/not

Mono audio
Mono videa
Mono concatenation

Multi

Eval:
1. ABX Task
Within Speaker Test
Across Speaker Test

2. Parralisme
s->t (con..)
t->d (voice)

Q: Multi-task?

## 3. Generative Models

### GAN in domains

KL Divergence:
Train the generator by minimizing the distance of distribution of real data and the generated data

CNN+GAN secrets:
Batch Norm: to stablize the training and help backprop
Stride conv
=> DCGAN

### VAE
sample in the middle prevent backprop

less perf than GAN
1. shape of P(z) => Normal distribution (true latent variable)
2. suboptimal loss

### VAE-GAN competitive, not better

each dimension of z become meaningful
eg. black hair, bold, etc.

### infoGAN

GAN can be used as modules

### IAN
semi-supervised

### CycleGAN
Map unpaired images

## 4. CNTK
@Microsoft Machine Intelligence and Perception

Distrubuted Kernel instead of extension
Project Malmo
Reinforcement L
Imitation L

Simulation realistic

