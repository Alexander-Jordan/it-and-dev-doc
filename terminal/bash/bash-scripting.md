# Bash scripting

## Write a script

### Create script:
```bash
nano my-script.sh
```

### Start of script:
```bash
#!/bin/bash
```

### Comments:
```bash
# A comment
```

### Input/Output:
```bash
# -e allows the command to handle special characters
echo -e "Give me some input:"
read input
echo "Your input was: $input"
```

## Run script

### Make it executable:
```bash
chmod +x my-script.sh

# only for the user that owns the file
# 664 -> 764 (rw-rw-r-- -> rwxrw-r--)
chmod 764 my-script.sh
```

### Run it from same directory:
```bash
./my-script.sh
```

### Run it from everywhere:
**Using full file path**
```bash
/full/path/to/my-script.sh

# script at users home directory
/home/[username]/my-script.sh
```
**Move to existing PATH directory**
```bash
# choose a directory from this
echo $PATH
# move it to /usr/local/bin
sudo mv my-script.sh /usr/local/bin
# can be run from anywhere
my-script.sh
```
**Add shell script's directory to PATH**
```bash
# create directory
mkdir my-scripts
# move script to directory
mv my-script.sh my-scripts
# add directory to PATH: export PATH=$PATH:[full path to directory]
export PATH=$PATH:/home/[username]/my-scripts
# can be run from anywhere
my-script.sh
```

