# Unattended Upgrades

This feature, when enabled, automatically install security updates.

## Read more

- [Debian Wiki](https://wiki.debian.org/UnattendedUpgrades)
- [Ubuntu documentation](https://help.ubuntu.com/community/AutomaticSecurityUpdates)
- [StackExchange: How to run unattended-upgrades not daily but every few hours](https://unix.stackexchange.com/questions/178626/how-to-run-unattended-upgrades-not-daily-but-every-few-hours)

## Timers

As it's stated in the [Debian Wiki](https://wiki.debian.org/UnattendedUpgrades):

>Because Debian is using systemd, it uses systemd timers to run periodic APT maintenance tasks.

All `systemd` timers are within the `/lib/systemd/system` folder, and can be grepped by:

```bash
ls /lib/systemd/system/ | grep ".timer"
```

`systemd` timers can also be listed together with information like when the next or last time it will trigger, and what to activate when triggered, by running:

```bash
sudo systemctl list-timers
```

You can also view this information and the status of a specific timer by running:

```bash
sudo systemctl status <timer>
# THE APT UPDATE TIMER (DOWNLOAD):
sudo systemctl status apt-daily.timer
```

### Configure

To modify the timer, and thereby the schedule for certain automated jobs (such as the `apt-daily`/`apt-daily-upgrade`), you need to override the default settings.

- Default settings folder: `/lib/systemd/system`
- Override settings folder: `/etc/systemd/system`

Within these folders are the settings for each timer, service, and more. To override these, the steps are:

```bash
# STEP 1 - EDIT:
sudo systemctl edit <config-file>
# STEP 2 - RESTART:
sudo systemctl restart <config-file>
# STEP 3 (OPTIONAL) - VIEW STATUS:
sudo systemctl status <config-file>
```

As an example, to override the apt-daily default timer, the steps are:

```bash
# STEP 1 - EDIT:
sudo systemctl edit apt-daily.timer
# STEP 2 - RESTART:
sudo systemctl restart apt-daily.timer
# STEP 3 (OPTIONAL) - VIEW STATUS:
sudo systemctl status apt-daily.timer
```

For a broader understanding, the specific config files for `apt-daily` are:

- Default: `/lib/systemd/system/apt-daily.timer`
- Override: `/etc/systemd/system/apt-daily.timer.d/override.conf`

When editing, the override file is what's being edited.

### More configuration might be needed

There might be a need for more configurations when modifying the schedule for unattended upgrades.

When the timer triggers, it activates the service that is linked to it.

When viewing the `apt-daily.service` file, which is activated by the `apt-daily.timer` timer, it's actually running the `/usr/lib/apt/apt.systemd.daily` script when being activated.

This script will determine when the requested action last ran. It compares this with the interval set for that action in `APT::Periodic`. You can view these settings by running:

```bash
/etc/apt/apt.conf.d/20auto-upgrades
```

For example, the default value for `Update-Package-Lists` and `Unattended-Upgrade` is `1`, meaning 1 day.

If the script determines that less time has passed since the last time the requested action was performed, it will simply not perform the action, regardless of the fact that the system scheduler called for it.

Therefore, when modifying the timer, it's also possible that you need to modify these settings as well to get the scheduler to behave as you intended.

You can also set the `APT::Periodic` actions to seconds, minutes, and hours by adding the suffixes `s`, `m`, and `h`. If you set the value to `always` it means that the action just gets performed when requested, no matter how much time has passed since the last run.

Use `always` if you want to configure the timer only and don't want to worry about more configurations.

[Some of the info was taken from this StackExchange post.](https://unix.stackexchange.com/questions/178626/how-to-run-unattended-upgrades-not-daily-but-every-few-hours)

[More info at the Ubuntu documentation.](https://help.ubuntu.com/community/AutomaticSecurityUpdates)

## Restarts/Reboots

Unattended upgrades does not restart or reboot the device automatically after it's done. This must be manually enabled by:

1. Setting `Unattended-Upgrade::Automatic-Reboot` to `true` in `/etc/apt/apt.conf.d/50unattended-upgrades`.
2. Install the `update-notifier-common` package.

### Services & Servers

However, services might be restarted briefly after upgrades, such as Apache services used by servers.

Normally it's just a few second (if even that), but if it causes longer periods of down-time than you want, then modifications to when and how often the unattended upgrades should run could be needed.
