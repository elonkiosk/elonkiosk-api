#!/bin/bash

for i in $(seq 1 5); do
    echo "Waiting for database to start up ... ($i)"
    sleep 1
done

node dist/main
