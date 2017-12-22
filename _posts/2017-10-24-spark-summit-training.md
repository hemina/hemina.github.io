---
layout: post
title: "Spark Summit Training"
description: ""
category: "Tech"
tags: [EN]
---
{% include JB/setup %}

http://files.training.databricks.com/events/summit-2017-10/spark-tuning/Labs.dbc

http://files.training.databricks.com/events/summit-2017-10/deep-learning/Labs.dbc

http://files.training.databricks.com/events/summit-2017-10/data-science/Labs.dbc

## DL
@Adam Breindel

分享10月24日三个training的全部资料目录：

Training 1: 
[Understand and Apply Deep Learning with Keras, Tensorflow and Apache Spark 2.x] (tinyurl.com/DeepLearning102417)

[DataBricks Community Jupyter notebook] (http://files.training.databricks.com/events/summit-2017-10/deep-learning/Labs.dbc)

Training 2:  
[Data Science with Apache Spark 2.x] (tinyurl.com/DataScience102417)

[DataBricks Community Jupyter notebook] (http://files.training.databricks.com/events/summit-2017-10/data-science/Labs.dbc)

Training 3: 
[Apache Spark Tuning and Best Practices] (tinyurl.com/SparkTuning102417)

[DataBricks Community Jupyter notebook] (http://files.training.databricks.com/events/summit-2017-10/spark-tuning/Labs.dbc)


SVM
Amenable to "online" learning (http://www.isn.ucsd.edu/papers/nips00_inc.pdf)

Linear => Non-linear(sigmoid) => ReLu => Dropout

https://class171024-deep.slack.com/messages/C7H1JJQSH/

## TensorFrame
@Tim Hunter

### Numerical computing with Spark
data-heavy	
computation-heavy	

=> speed	
good target for optimization

TF + Spark => TensorFrame
processor speed + memory + network
acces to processor

Q: How Images -> df?
A: pixels 

## Streaming and deep learning
@Matei Zaharia

Both imp but complex with current tools

1. Low level API (MR) => composable high level API
2. seperate tools -> unified app

### Structured Streaming
same API both streaming and batch
continuous procesing without microbatch

### Deep learning
ML pipeline APIs
support for non-YARN and AWS servers

@Sue Ann Hong
challenges

Transfer Learning => deep embedding to eliminate labels

## Building custom ML pipelinestages for BMW
warranty incidents are "no trouble found"

dataset with 7000 features+, sparsity, abnormalty

Spark Pipeline
Relational Data Ware House => ETL => handle imbalance => Preprocessing => Feature Selection => Classifier

## DL pipelines
DL at scale 
DL pipelines 
End-to-end workflow with DL pipelines

TL classification, featurization for similarity-based ml

Batch prediction as an MLlib Transfomer
Spark SQL UDF => for everyone who knows SQL to call the function

## NLU
@Alex Thomas at Indeed

## FPGA for Spark SQL 

## Feature engineering
