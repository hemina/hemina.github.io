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
	将原来的enp0s3不变
	
	下面加上
	```
	auto enp0s8
	iface enp0s8 inet static
	address 30.19.198.130
	netmask 255.255.255.0
	```
	
	为什么是enp0s8呢？这是我重启很多次的时候从重启满屏的命令里发现的，en0对应enp0s3，en1对应enp0s8
	
	重启虚拟机
4. On host Mac:
	`ssh mina@30.19.198.130`
	
## Configure Jupyter Notebook on Ubuntu Server
On Ubuntu Server:

```
# install
apt-get install pip3
pip3 install jupyter
pip3 install elasticsearch
pip3 install elasticsearch-dsl

# configure password, otherwise you have to type very long token each time connected

# create a config file for the notebook
jupyter notebook --generate-config
jupyter notebook password

# launch jupyter
jupyter notebook
```

On host Mac:

```
ssh -L 8000:localhost:8888 mina@30.19.198.130
```

From Chrome browser on host Mac, open "http://localhost:8000"

几天后再开机发现ssh无法连接？
是因为mac的ip地址网段自动变更了，需要重新修改虚拟机的ip，保证两台机器仍在同一网段里

## scp
```
scp faq_all.csv mina@30.19.172.15:faq.csv
```

## load and save csv in pandas
```
pd.read_csv('faq.csv', index_col=0)

df.to_csv('faq.csv')

```

## 让程序在前台后台之间切换
Linux 提供了 fg 和 bg 命令，让你轻松调度正在运行的任务。
假设你发现前台运行的一个程序需要很长的时间，但是需要干其他的事情，你就可以用 Ctrl-Z ，挂起这个程序，然后可以看到系统提示：
[1]+ Stopped /root/bin/rsync.sh
然后我们可以把程序调度到后台执行：（bg 后面的数字为作业号）

`bg 1`

[1]+ /root/bin/rsync.sh &


用 jobs 命令查看正在运行的任务：

`jobs`

[1]+ Running /root/bin/rsync.sh &


如果想把它调回到前台运行，可以用

`fg 1`

/root/bin/rsync.sh
这样，你在控制台上就只能等待这个任务完成了。

## Install elasticsearch-head
npm install 出错居然是因为没有安装nodejs
cors的三项很重要，如果不设置好会连接不上elasticsearch
<http://www.vinin.me/b/blog/582d1d9c35c0010a5d55948e>
<http://www.cnblogs.com/thatsit/p/6347693.html>

确保启动elasticsearch之后运行head

```
sudo /bin/systemctl start elasticsearch.service

cd elasticsearch-head/
./node_modules/grunt/bin/grunt server &
```

## Ngrok
./usr/local/ngrok http -host-header=rewrite 9200

## Each time restart the VM
if no need to change ip address

```
sudo /bin/systemctl start elasticsearch.service
cd elasticsearch-head/
./node_modules/grunt/bin/grunt server &
cd ..
jupyter notebook &
```

## Convert dict to json
```
import json
json.dumps(dict_item)
```

## ES get id without error if not exist
Funds.get(id="LU0930019582",ignore=404)

## Full text search
```
q = Q('match', funds_name=funds_name)  # precise search
q = query.Fuzzy(funds_name=funds_name) # fuzzy accept only single word, no phrase
```

## pandas dataframe 赋值
```
faq_df.loc[2,"Source / Document"]
```