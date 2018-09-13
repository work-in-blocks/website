---
id: 820
title: Rsync example using SSH credentials
date: 2018-02-11T15:37:31+00:00
author: alacret
layout: post
guid: https://community.4geeks.co/?p=820
permalink: /rsync-example-using-ssh-credentials/
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
categories:
  - WordPress
---
Once in a while, we are requested to upload or download files from our servers: Database Backups, keys, credentials, and so on.

The traditional method of doing this nowadays is usually SSH or SCP, but sometimes large amounts of files and folders needed a more suited tool.

Here is where rsync comes in to play. Originally as a tool for syncing files and folders, bring in to place the power of compression, delta encoding, and security by comparing sizes a timestamp of files before doing the actual network transfer.

This is an small example

<pre class="prettyprint">rsync -rvz -e ssh ubuntu@192.168.234.912:&lt;from-folder-or-archive&gt; &lt;to-folder-or-archive&gt;</pre>

-r For recursive (only when your are syncyng complete directories

-v For verbose operation

-z For using compression

-e For shell selection