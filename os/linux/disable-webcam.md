# Disable/Enable the webcam on Linux

## Temporarily

```bash
# temporarily enable the webcam:
sudo modprobe uvcvideo

# temporarily disable the webcam:
sudo modprobe -r uvcvideo
```

## Permanently

```bash
# open /etc/modprobe.d/blacklist.conf
sudo nano /etc/modprobe.d/blacklist.conf

# at the end of the file, paste in:
blacklist uvcvideo

# this will disable the webcam when you reboot
# TO ENABLE AGAIN: remove this line & reboot
```
