---
id: 939
title: 'DEVOPS: Automating the execution of a script'
date: 2018-07-11T15:39:44+00:00
author: alacret
layout: post
guid: https://community.4geeks.co/?p=939
permalink: /devops-automating-the-execution-of-a-script/
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
  - DEVOPS
  - Sysadmin
---
Every time that you are setting up a Pipeline to deploy an application there are some commands that you want to execute as root, for example:

  * Restarting a server
  * Cleaning some garbage
  * Setting some logs files and folders
  * Setting some monitoring tool

Doing these manually as you know is a tedious work and executing this from a pipeline is impossible unless the Pipeline user is root, and for security reasons that&#8217;s very not recommended to do.

So what i do know is to create a script that can run sudo commands without requesting passwords. Just like these:

  1. As root open /etc/sudoers
  2. Add a line like this: <pipelin-username> ALL = (root) NOPASSWD: <script-path>
  3. Save the file

Then, secure the file by allowing only root user editing, as root:

  1. Change the owner: chown **root:wheel <script-path>**
  2. Change the permissions: chmod **u+rwx <script-path>**