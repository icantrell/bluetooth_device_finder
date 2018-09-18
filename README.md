#bluetooth_device_finder

Project to make a phone finding phone app.

This app finds different bluetooth devices using a cell phone with bluetooth capabilities.<br>
#issues

-Uses LE bluetooth, which is not backwards compatible. Needs bluetooth classic(which doesn't seem support by existing nativescript plugins)
-Listview is updating slowly on nativescript causing device to appear on screen much after it has been found. I believe I need to use async listview methods to alleviate this.
