---
layout: post
title: "Meetup NLP"
description: ""
category: "Tech"
tags: [CN, Meetup Paris]
---
{% include JB/setup %}

## Neural Machine Translation(Open NMT) 

与最新的谷歌翻译类似，虽然不似谷歌有80GPU和这么多的数据，但是技术是一样的。
本来是开源的 还有700多个中国人帮忙贡献代码 之后考虑到business model 就不再开源了 感兴趣的话搜索openNMT可以fork他们的github 目测现在还开源。

## Word-sense Disambiguation

多义词的disambiguation，是一个无监督模型，可以应用到机器翻译，机器阅读理解等各种场景。 用skip-gram也就是根据语境判断词义的模型，加上Chinese restaurant process。举个例子，比如orange这个词在法语中有三个意思，橙子，橙色，和法国电信。当和orange同时出现的词是，apple, banana的时候，这个orange就坐到中餐馆的第一张桌子上，当与orange同时出现的词与水果语境相差特别大，而是类似red,blue的词时，这个orange就坐到中餐馆的另一张桌子上，etc. 

Skip-Gram
AdaGram Chinese Restaurant Process

eg. Bank in English, Orange in French
context 类似时， 同一个桌子，不类似时，换一个桌子

## Assurance Claims treatment

保险业的AI应用，就是让机器来处理索赔申请，做fraud detection。这是一个刚起步的项目，很多处理方式都不成熟，最终的目标其实也只是提取索赔语境和关键信息，是一个非穷举的分类。比如目前大部分的保险索赔申请都是手写的，如果用机器识别的话会遇到很多拼写啊可读性的障碍。主讲人说希望未来鼓励大家都通过网络提交电子版的索赔申请，这样文字处理起来会方便很多。但是有来自在座听众的两个评论，我觉得很有意思。听众一提出，既然大部分的保险索赔申请都是手写的，是不是可以根据书写者的笔迹和书写风格，做fraud detection？听众二提出，与其鼓舞人们在线提交保险索赔申请，倒不如做个chatbot，专门用来处理索赔事项，chatbot的互动过程中还可以加入选择题功能，用户点点鼠标就可以快速确定索赔信息分类。实现同样的功能，事半功倍。