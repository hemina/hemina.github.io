---
layout: post
title: "Meetup Criteo"
description: ""
category: "Tech"
tags: [Meetup Paris, EN]
---
{% include JB/setup %}

## Criteo Infrastructure

Event trackers servers  
1.=> kafka => Hadoop => Analytics => Vertica => Tableau  
2.=> frame to show panel

Druid? Vertica?

How to ensure accuracy?  
Add panel to show what Criteo tracks.

## Russian Google Analytics 
ClickHouse opensource  
Vertica  
duplication

## WebScale prepare for black friday

release freeze, forbid new code push  
Grafana: monitor the datacenter (CPU, network connection...)  

software for a set of all-the-same machine  
roll-back to ancient version  
weighted machine for client to choose

## Analytics Stack

workbook peer review for QoS  
Vertica overload???	 => possibility to change  
Tableau latency  
1h-2h latency from click event to Vertica