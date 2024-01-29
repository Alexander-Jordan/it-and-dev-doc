Documentation & help:
```bash
# man page
man command

# help block
command --help
```

Run bash in background:
```bash
# ampersand in the end
command &
```

Run sub shell:
```bash
# sub shell with parentheses
(command)

# bash command
# -c stands for command (there are other options available (check "bash --help" & "bash -c help"))
bash -c "command; another command"

# exec command (doc at "exec --help")
exec command
exec -a name-of-command command
exec -c command
exec -l command
```

FIFO's:
```bash
# create a new FIFO file
mkfifo name

# example usage
cat fifo & # will wait for input in background
echo "Some text" > fifo # sending "Some text" to fifo
# this will return:
Some text
```

Just start Chrome with an ampersand & at the end of the command:
```bash
google-chrome &
```

This will send the process to the background giving you your terminal back.

If Chrome outputs terminal messages you don't want to see just send them to /dev/null like so:
```bash
google-chrome &>/dev/null &
```

If you want to be able to close the terminal while Chrome is still running you need nohup:
```bash
nohup google-chrome &
```

List all users:
```bash
cut -d: -f1 /etc/passwd
```

Add user to group:
```bash
sudo usermod -aG group user
```

Delete user from group:
```bash
sudo deluser user group
```

List user groups and id:
```bash
id user
```

Copy (download) file from remote server/computer:
```bash
scp user@remote-ip:path/to/file path/to/destination
# copy directory:
scp -r user@remote-ip:path/to/directory path/to/destination
```

Manipulate output text with sed command:
```bash
# the “s” specifies the substitution operation, “/” are delimiters, "text-to-replace" is the search pattern, & "replacement-text" is the replacement string
# by default, the sed command replaces the first occurrence of the pattern in each line 
sed 's/text-to-replace/replacement-text/' filename

# /g (global replacement): replace all the occurrences of the pattern in a line
sed 's/text-to-replace/replacement-text/g' filename

# parenthesize first character of each word if capital
# also showcasing piping is possible
echo "This is a Test" | sed 's/\(\b[A-Z]\)/\(\1\)/g'
```

How to reverse all characters in any length of text of a file:
```bash
rev filename
# output of "This is some text" in filename would be;
# "txet emos si sihT"

# or even pipe output from another command:
command | rev
```

Reverse cat:
```bash
# by default, a new line is the separator
tac filename
# output of
# "This is the first line
# This is the second line"
# would be:
# "This is the second line
# This the first line"

# to use a custom separator(in this example a comma ","):
tac filename -s ,
#output of "This,is,a,test" would be:
# "test,a,is,This"

# to use a regular expression for the customer separator, use the -r flag:
tac filename -r -s [0-9]
# output of "test4 test3 test2 test1" would be:
# "test1 test2 test3 test4"
```
