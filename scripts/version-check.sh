#!/usr/bin/env bash

PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')

if [[ $(git tag -l $PACKAGE_VERSION) ]]; then
    printf '%s\n' "Looks like you forgot to change version in package.json file" >&2  # write error message to stderr
    exit 1;
else
    exit 0;
fi