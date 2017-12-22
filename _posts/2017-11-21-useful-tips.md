---
layout: post
title: "Useful Tips"
description: ""
category: "Tech"
tags: []
---
{% include JB/setup %}

## Find a file in Linux
Using -iname instead of -name ignores the case of your query. The -name command is case-sensitive.

```
find -iname "filename"
```

## Check in-use port
```
lsof -i @localhost:5000
kill -9 <PID number> # to kill the corresponding programme
```

## 返回python object所有有效的属性列表
dir() 函数		
dir([object]) 会返回object所有有效的属性列表

## proxy
```
import requests

proxies = {
  "http": "http://10.10.1.10:3128",
  "https": "http://10.10.1.10:1080",
}

requests.get("http://example.org", proxies=proxies)
```
## Jupyter environment configuration
```
import os
os.environ
os.environ['HTTP_PROXY'] = "..." (capital)
```

## Check IP address
```
# Linux
ip addr show 

# Mac
ifconfig
```

## forcer-navigateur-rafraichir-page-web
http://consultant-webdesigner.fr/forcer-navigateur-rafraichir-page-web/

## Connexion ssh from Mac to VirtualBox
1. VirtualBox -> settings -> Network -> Adapter 1 [Bridged Adapter, en0: WiFi, Promiscuous Mode: Allow All] -> Adapter 2 [NAT]
2. On host Mac: 
	`ifconfig`
	findout the Ethernet IP address, here I see `en0: inet 30.19.198.224` 获取网段 30.19.198.*
3. On VM Ubuntu:
	`ifconfig`
	findout the ethernet name, here I see `enp0s3`
	`sudo vi /etc/network/interfaces`	
	将原来的enp0s3修改为
	```
	auto enp0s3
	iface enp0s3 inet static
	address 30.19.198.130
	netmask 255.255.255.0
	```
	重启虚拟机
4. On host Mac:
	`ssh mina@30.19.198.130`