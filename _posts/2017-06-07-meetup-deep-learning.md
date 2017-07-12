---
layout: post
title: "MeetUp Deep Learning"
description: ""
category: "Tech"
tags: [Meetup Paris]
---
{% include JB/setup %}

## Visual Question Answering
2000 frequent answer set

y = f(q,v) 
correlation/nn

p = softmax(y)

bilinear models		
large dimension => tucker decomposition => tensor sparsity
(MUTAN)

MLB

resnet(attention mechanism)

error analysis => bias generique du dataset (eg. do you see? yes!)

介绍了训练机器针对图片回答问题的方法，大思路是，先计算问题与图片的相关性，用到神经网络或者双线性模型得到f，然后对备选答案集中的各个选项求softmax，类似多分类问题。

难点在于，结合图片与问题信息之后往往得到一个特别大维度的张量，给训练带来很大麻烦，于是MLB和MUTAN是两种降维方法，前者可以说是后者的一个特例。两种方法各有优缺点，适用于不同场景。MUTAN的特点是图片与问题信息能得到更好的交互，适用于低维映射。MLB的交互性相对欠缺，但可以解决高维映射。实验表明，两种方案得到的映射feature可以有互补的效果。

映射降维后得到的特征向量，通过rank visualization，可以看到不同秩在回答不同的问题时有不同的重要性（一个例子，16号秩在回答“what sport is”问题时单维对应的accurancy value特别小，而回答"what room is"时对应值特别大）。而全句的accurancy value总是大于单个秩，可见各秩对应的feature是协同合作的。

有一点没有想明白，既然明确了各秩在面向不同问题时各有不同的影响力，attention 模型在这里会不会有特别的意义呢？还是本身作者介绍的协同结果就已经包括了这个意义？

参考文献：<https://arxiv.org/pdf/1505.00468.pdf>
## Adversarial examples in DL

y =  ax + b

L(x,y,a,b) = (y - (ax+b))ˆ2

increase loss by modify x

defend black-box attack
detection attack

modifier un pixel => augmenter la detection d'une classe particuliere

classification text => trouver le bon endroit pour inserer un mot historique => pour que l'article soit classifié comme historique

介绍了对抗模型的原理。假设有一个已知模型，已知模型所有参数和数据样本＋标签。目的是用修改过的数据样本欺骗已知模型，使其模型将样本错误分类。一个例子，是将STOP sign的图片，通过一些像素的小修改，生成让人看不出差别，但是可以欺骗机器的新的STOP sign图片，让机器以为这是一个可以通行的标志，实现对AI系统的攻击。原理就是用梯度下降法增大模型的loss函数。

这里说的是针对已知模型的欺骗，然而对于黑箱模型，只要对于给定样本，能得到模型对应的输出，一样可以训练得到对抗模型。

应用场景除了图片，还可以拓展为文本。比如文本分类问题，在原有文本基础上通过增加一些原文词汇，使机器将文本误判为其他类别。

这个prez让我意识到，当代AI的发展，已经到攻击和防御的领地了，有点震惊。

参考文献:   
<https://arxiv.org/pdf/1602.02697.pdf>
<https://www.leiphone.com/news/201702/Jpb0uiOt9RTwcB8E.html>

## Siamese Architecture for QA
InsuranceQA: rank good answer out of 500 potential
lots of bad answers, few valid
=> use for coherence

same nn for a+ and a- pour encoding

1. word embedding 
2. enrich embeddings with word context(Bi-LSTM)
filter conv pour obtenir meilleur granularité (max pooling pour trouver le mot representant)
3. pooling/attention to get a vector
4. predict similarity cos(Q,A)

one-way attention mechanism
60% top1

GRU/CNN for quick training
attention mechanism donne meilleur perf
prod use TFIDF/BM25 to pre-select candidate answers (88% accuracy permet de speed-up)

graph qui maximum le plus relation des mots

非常喜欢的一个prez，深得我心。使用的dataset我之前也在用，但是并不懂门道，如今有幸被点拨，茅塞顿开。数据集的噪音多，准确度有限，那就挑它的优点。既然都是人工回答的，相关性自然高，于是拿来做相关度匹配。

训练的过程，首先将文字编码成向量，除了使用广为人知的word2vec／glove之外，使用Bi-lstm加入句子的context特征，这个思路让我眼前一亮，早该想到啊。

通过max/mean pooling或者attention机制将前面得到的特征张亮扁平化为三个vector, q, a+, a-. 以a+，a-为二分类标签，cos(q,a)为预测值，训练神经网络。

训练好的模型代入新的问题，即可在备选答案序列中得到，哪些是a+, 哪些是a-




