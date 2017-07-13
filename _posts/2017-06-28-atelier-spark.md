---
layout: post
title: "Atelier Spark"
description: ""
category: "Tech" 
tags: [Meetup Paris]
---
{% include JB/setup %}

Noeud: un serveur(physique/virtuel)		
Rack: ensemble de noeuds physiquement proche, gagner temps de communication			
Cluster: ensemble de noeuds, ensemble de rack
Name Node: contient namespace, etc. 		
Data Node		
Un fichier est divisé en 1 ou plusieurs blocs, stocké sur des Data Nodes		
Un bloc Hadoop est unfichier de HDFS, taille 64MB, tous les blocs dans un dossier ont la meme taille, soif le dernier

au lieu de faire transformation sur disques(Hadoop MapR), Spark fait toute transformation sur mémoire

RDD: set de data, repartie sur plusieurs machines
un peu comme vecteur, mais paralisé

dataset FB dispo sur kaggle

```
data = sc.textFile("hdfs:///user/datalab-store/facebook-fact-check.csv")

type(data) 
# <class 'pyspark.rdd.RDD'>

data.first()
# data.u'account_id,post_id,Category,Page,Post URL,Date Published,Post Type,Rating,Debate,share_count,reaction_count,comment_count'

data.take(5)
# [u'account_id,post_id,Category,Page,Post URL,Date Published,Post Type,Rating,Debate,share_count,reaction_count,comment_count', u'184096565021911,1035057923259100,mainstream,ABC News Politics,https://www.facebook.com/ABCNewsPolitics/posts/1035057923259100,2016-09-19,video,no factual content,,,146,15', u'184096565021911,1035269309904628,mainstream,ABC News Politics,https://www.facebook.com/ABCNewsPolitics/posts/1035269309904628,2016-09-19,link,mostly true,,1,33,34', u'184096565021911,1035305953234297,mainstream,ABC News Politics,https://www.facebook.com/ABCNewsPolitics/posts/1035305953234297,2016-09-19,link,mostly true,,34,63,27', u'184096565021911,1035322636565962,mainstream,ABC News Politics,https://www.facebook.com/ABCNewsPolitics/posts/1035322636565962,2016-09-19,link,mostly true,,35,170,86']

data.count()
# 2283

split_data = data.map(lambda line: line.split(','))

pagenames = split_data.map(lambda list:list[3])

pagenames_1 = pagenames.map(lambda x:(x,1))

pagenames_red = pagenames_1.reduceByKey(lambda a,b:a+b)

pagenames_red.takeOrdered(10, lambda(key, value): -1*value)
# [(u'Politico', 536), (u'CNN Politics', 409), (u'Eagle Rising', 286), (u'Right Wing News', 268), (u'Occupy Democrats', 209), (u'ABC News Politics', 200), (u'Addicting Info', 140), (u'The Other 98%', 122), (u'Freedom Daily', 112), (u'Page', 1)]

```

Spark => ideal pour mettre en prod des traitement recurrents sur grands volumed de données

Shopify

Q: Hadoop MR> Spark? Stable?

## SparkSQL

```
from pyspark.sql import SQLContext
from pyspark.sql.types import *

sqlContext = SQLContext(sc)
# instancialisation

cleaned_data = split_data.map(lambda line: [value.strip() for value in line])

# SQL inferer type de donnée => expliquement 

schemaString = cleaned_data.first()

fields = [StructField(field_name, StringType(), True) for field_name in schemaString]

schema = StructType(fields)

filtered_data = cleaned_data.filter(lambda line: line[0]!="Page")

FactDF = sqlContext.createDataFrame(filtered_data, schema)

FactDF.show()

FactDF.printSchema()

FactDF.registerTempTable("FACTS")

top_pages = sqlContext.sql("""SELECT Page, COUNT(Page) AS Page_Occurence FROM FACTS GROUP BY Page ORDER BY Page_Occurence DESC LIMIT 10 """)

top_pages.show()

```

NoSQL => connector en RDD

petit dataset => RDD
gross table => SQL

Spark Streaming 
traiter les données en temps réel