# NTP

## NTP Tools

### `date`

**To view the time on your server:**
```bash
date
```

### `timedatectl`

**Check status:**
```bash
timedatectl status
# OR
timedatectl
```

**Timezones**
```
# list all timezones
timedatectl list-timezones
# set timezone
timedatectl set-timezone <timezone>
```

### `systemctl`

**Checking status of systemd-timesyncd.service:**
```bash
systemctl status system-timesyncd.service
```

### More advanced

- `ntp` (will include `nptd` & `ntpq`)
    Installed with `sudo apt install ntp`.
