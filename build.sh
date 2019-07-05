#!/bin/bash

# cleaup
rm -rf dist
mkdir dist

# html min
html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype index.html -o dist/index.html

# css min
uglifycss base.css > dist/base.css

# move static
mkdir dist/assets
cp -rf assets dist
