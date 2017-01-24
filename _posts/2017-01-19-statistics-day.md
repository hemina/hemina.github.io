---
layout: post
title: "statistics day"
description: ""
category: 
tags: []
---
{% include JB/setup %}

大概一年前，给自己定下的新梦想变成了，当一个会发光的人。也不知道怎样能发光，想等时间给我答案。
今天早上，跟Hajar聊起昨天statistics day的体会。作为经历过研究实验室人生（实习+conference）和工业产业界人生（工作+meetup）的data science星人，我感受到，研究中心的人们更加理想主义，乐于在抽象的乌托邦里推导一个无人知晓也不甚明了的公式，也不管这项工作未来会有什么用。他们只顾着推完公式发paper公告天下，指望着未来哪天，被工业界的人碰巧看见，用来解决实际问题。工业产业界的人，会更受利益驱动，启动一个项目前，会深思琢磨其business plan，利润不够多，或者风险太大的尝试都会被毙掉，而且研究成果通常都会藏起来，作为核心商业机密。工业界的研究动力和后备力量其实会更充足，但是可能也会更受商界纷扰的干扰。我希望，趁年轻，在这两地常跑跑，多获取新鲜资讯，多思考联系，争取搭建产业与学术界的，一个小小桥梁。Hajar说她眼里此刻的我，是发着光的。也许这会是我生命的意义之一啦。

## 因果关系判断模型（Practical Method for Causal Inference）

Inference
`B = f(A) + Noise`

用test of independance 判断独立性  
由residu图 讨论因果关系

![]({{ BASE_PATH }}/img/causal.png)

发现一篇讲解这个理论的paper: <http://www.jmlr.org/proceedings/papers/v9/peters10a/peters10a.pdf>

bruit addictif/multiplicatif 会有不同的residu graph

会得到一些逻辑上不合理的因果cause-effet pair，比如：
chocholat => prix nobel

用Machine Learning的方法训练因果关系，
A->B? classification(yes or no)

deconvolution network(目测是用来生成图像)
把每个factor视为点，因果关系视为有向图的边


## Build estimator（Median of Means）： 
  
先将序列分成K部分，每部分分别求均值，最后求均值的中位数。  
K 怎么选? => 根据置信区间  
为什么不直接用Median? => 仅当distribution symmetric时，median能很好地表征数据，Median of Means（MOM） 适用于更广泛的数据分布。  

这里有一个含原版详细公式的参考资料，参见[How to estimate the mean of a random variable?](<https://www.stats.ox.ac.uk/events/distinguished_seminars/?a=14216>)

应用场景：  
Machine Learning中各样本的多项feature值，可以用MOM的方法得到比较有代表性的样本值，简化数据。  
梯度下降法得到的模型函数实际上是最吻合MOM能代表的大众值的函数。所以MOM可以很快速得到一个梯度下降结果的预估。

## Topology
compact def? sensible outliers
rips process infini
cluster
traffic 最短路径？ 
on-line learning
appliquer serie temp
maintenir serie temp stable

## Feature clustering

## Neural Network for NLP
traiter chinois comme image
派生词
tree

## Bandits Problems
A/B test