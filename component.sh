#!/bin/bash

# select place (function, interface, model)
# input Component Name

echo 'Please input Component Name'
read comname
echo  $comname

PS3='Please enter your choice: '
options=("function" "interface" "model" "Quit")
select opt in "${options[@]}"
do
    case $opt in
        "function")
            option="function"
            echo "you chose function"
            break;;
        "interface")
            option="interface"
            echo "you chose interface"
            break;;
        "model")
            option="model"
            echo "you chose model"
            break;;
        "Quit")
            break;;
        *) echo "invalid option $REPLY";;
    esac
done

dirname=src/components/$option/$comname
mkdir $dirname
touch $dirname/$comname.stories.tsx
touch $dirname/$comname.tsx

echo "finished"