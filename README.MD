# Release Review - Cloud9

All code and files used in the A Cloud Guru Release Review episode on Cloud9

## Requirements
- NodeJS >= 6.10
- NPM
- AWS Cli with default profile set

## Installation
```
git clone https://github.com/ACloudGuru/acg-rr-cloud9.git
cd acg-rr-cloud9
chmod +x setup.sh
./setup.sh
```

## Removal
```
chmod +x remove.sh
./remove.sh
```

## Customisation
Make sure to change the bucket name in `config.json` before you run the setup script


## Directory structure
- ops - Contains all the code and files for the setup and removal of the project
- frontend - Contains the frontend code to make the api calls to the lambda function created during the episode
- backend - Contains the before and after function of the code Sam pasted into Cloud9 during the episode
