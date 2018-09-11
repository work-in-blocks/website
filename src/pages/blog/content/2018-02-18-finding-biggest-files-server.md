---
id: 849
title: Finding the Biggest files in my server
date: 2018-02-18T00:16:20+00:00
author: alacret
layout: post
guid: https://community.4geeks.co/?p=849
permalink: /finding-biggest-files-server/
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
image: /wp-content/uploads/2018/02/server.png
categories:
  - WordPress
---
Every 5 weeks more or less our Jenkins server stop working. This is for disk space consumption, some how we can&#8217;t figure out how to prevent the machine to cache docker images.

Today, i erase as usual every image and container, but still have a lot space used.

So i did a little research and find out &#8220;[df](https://linux.die.net/man/1/df)&#8221; and &#8220;[du](https://linux.die.net/man/1/du)&#8221; command:

For visualization partition info in a human readable way just type:

<pre class="prettyprint">df -h</pre>

and for findig where are the large files use:

<pre class="prettyprint">du -a &lt;FOLDER-TO_LOOK&gt; | sort -n -r | head -n 10</pre>