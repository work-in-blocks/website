---
id: 853
title: Cleaning the docker cache (mess) in my Jenkins server
date: 2018-02-18T00:33:13+00:00
author: alacret
layout: post
guid: https://community.4geeks.co/?p=853
permalink: /cleaning-docker-cache-mess-jenkins-server/
md_bone_gallery_slider_opts:
  - 'a:1:{s:18:"gallery_transition";s:5:"slide";}'
md_bone_post_featured:
  - "0"
md_bone_hide_featured_img:
  - "0"
md_bone_review_switch:
  - "0"
md_bone_review_score:
  - 'a:1:{i:0;a:1:{s:14:"criteria_score";s:1:"0";}}'
md_bone_review_pros:
  - 'a:0:{}'
md_bone_review_cons:
  - 'a:0:{}'
image: /wp-content/uploads/2018/02/docker-travis-composer-packagist.png
categories:
  - WordPress
---
Every 4-5 weeks i need to do service to my Jenkins because we haven&#8217;t found the way that Docker stop accumulating so much containers, images and volumes, so i give you the specific commands that i use: (For bash)

clean prune resources (Volumes, images and containers):

<pre class="prettyprint">docker system prune -a</pre>

Removing all Images

<pre class="prettyprint">docker rmi $(docker images -a -q)</pre>

Stop and Remove all containers

<pre class="prettyprint">docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
</pre>

Remove unused Volumes:

<pre class="prettyprint">docker volume prune</pre>

&nbsp;

You can read the complet article from Digital Ocena [here](https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes) 

&nbsp;