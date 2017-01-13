---
layout: page
title: Mina He
tagline: Data storyteller, dancer, dreamer.
---
{% include JB/setup %}
<img src="/img/photo.jpg" width="20%" height="20%"> 


<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>


