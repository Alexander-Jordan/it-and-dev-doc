# xinput

Run xinput and note down the touch- or trackpad ID.

```bash
xinput set-prop <id> 'libinput Disable While Typing Enabled' 0

# OR

xinput

⎡ Virtual core pointer                    	id=2	[master pointer  (3)]
⎜   ↳ Virtual core XTEST pointer              	id=4	[slave  pointer  (2)]
⎜   ↳ SYNA801A:00 06CB:CEC6 Mouse             	id=9	[slave  pointer  (2)]
⎜   ↳ SYNA801A:00 06CB:CEC6 Touchpad          	id=10	[slave  pointer  (2)]
⎜   ↳ LXST2021:00 29BD:9902                   	id=11	[slave  pointer  (2)]
⎜   ↳ TPPS/2 Elan TrackPoint                  	id=14	[slave  pointer  (2)]
⎣ Virtual core keyboard                   	id=3	[master keyboard (2)]
    ↳ Virtual core XTEST keyboard             	id=5	[slave  keyboard (3)]
    ↳ Video Bus                               	id=6	[slave  keyboard (3)]
    ↳ Power Button                            	id=7	[slave  keyboard (3)]
    ↳ Sleep Button                            	id=8	[slave  keyboard (3)]
    ↳ Intel HID events                        	id=12	[slave  keyboard (3)]
    ↳ AT Translated Set 2 keyboard            	id=13	[slave  keyboard (3)]
    ↳ ThinkPad Extra Buttons                  	id=15	[slave  keyboard (3)]

xinput list-props 10

Device 'SYNA801A:00 06CB:CEC6 Touchpad':
	Device Enabled (189):	1
	Coordinate Transformation Matrix (191):	1.000000, 0.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000, 0.000000, 1.000000
	libinput Tapping Enabled (347):	0
	libinput Tapping Enabled Default (348):	0
	libinput Tapping Drag Enabled (349):	1
	libinput Tapping Drag Enabled Default (350):	1
	libinput Tapping Drag Lock Enabled (351):	0
	libinput Tapping Drag Lock Enabled Default (352):	0
	libinput Tapping Button Mapping Enabled (353):	1, 0
	libinput Tapping Button Mapping Default (354):	1, 0
	libinput Natural Scrolling Enabled (320):	1
	libinput Natural Scrolling Enabled Default (321):	0
	libinput Disable While Typing Enabled (355):	1
	libinput Disable While Typing Enabled Default (356):	1
	libinput Scroll Methods Available (322):	1, 1, 0
	libinput Scroll Method Enabled (323):	1, 0, 0
	libinput Scroll Method Enabled Default (324):	1, 0, 0
	libinput Click Methods Available (357):	1, 1
	libinput Click Method Enabled (358):	0, 1
	libinput Click Method Enabled Default (359):	1, 0
	libinput Middle Emulation Enabled (360):	0
	libinput Middle Emulation Enabled Default (361):	0
	libinput Accel Speed (329):	0.000000
	libinput Accel Speed Default (330):	0.000000
	libinput Accel Profiles Available (331):	1, 1, 1
	libinput Accel Profile Enabled (332):	1, 0, 0
	libinput Accel Profile Enabled Default (333):	1, 0, 0
	libinput Accel Custom Fallback Points (334):	<no items>
	libinput Accel Custom Fallback Step (335):	0.000000
	libinput Accel Custom Motion Points (336):	<no items>
	libinput Accel Custom Motion Step (337):	0.000000
	libinput Accel Custom Scroll Points (338):	<no items>
	libinput Accel Custom Scroll Step (339):	0.000000
	libinput Left Handed Enabled (340):	0
	libinput Left Handed Enabled Default (341):	0
	libinput Send Events Modes Available (305):	1, 1
	libinput Send Events Mode Enabled (306):	0, 0
	libinput Send Events Mode Enabled Default (307):	0, 0
	Device Node (308):	"/dev/input/event5"
	Device Product ID (309):	1739, 52934
	libinput Drag Lock Buttons (342):	<no items>
	libinput Horizontal Scroll Enabled (343):	1
	libinput Scrolling Pixel Distance (344):	15
	libinput Scrolling Pixel Distance Default (345):	15
	libinput High Resolution Wheel Scroll Enabled (346):	1

# disable
xinput set-prop 10 355 0
```
