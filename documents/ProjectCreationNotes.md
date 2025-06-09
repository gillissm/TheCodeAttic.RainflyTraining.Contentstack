# Rainfly Adventures on Contentstack

## Setup

Target Node = 22.16.0

## Steps to Creating Project

1. create folder structure of ./content, ./documents, ./src
2. run command to bootstrap empty NextJS, ```npx create-next-app@latest --ts --app --src-dir .\src\```
3. Install Contentstack related packages
   1. @contentstack/delivery-sdk
   2. @contentstack/live-preview-utils
   3. @contentstack/personalize-edge-sdk
   4. @contentstack/utils
   5. @timbenniks/contentstack-endpoints
   6. html-react-parser
4. Packages to support Rainfly Adventures
   1. @emotion/styled
   2. @mui/icons-material
   3. @mui/material
   4. @mui/material-nextjs
5. Add .env to connect with Contentstack, see .env.sample.
