#!/bin/sh
echo 'Build java'
javac NotificationServer.java
echo 'Run Node'
node --jvm --experimental-worker NotificationReceiver.js
