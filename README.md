# dazn-rail-automatation
# DAZN Rail Automation

## Project Type
Postman + Newman API Automation Framework

## How to Run

### Install Newman
npm install -g newman

### Run Collection
newman run Collections/HomePageRails-US-east-1.postman_collection.json

### Run with Report
newman run Collections/HomePageRails-US-east-1.postman_collection.json -r 
html --reporter-html-export Reports/report.html
