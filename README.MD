# Project 12 - Argent-Bank

This repo contains all the source code to run website and the micro API for a bank user account.

## 1. General information

This site uses an api with 2 users that can be connected, you can find the user information in the Endpoints.
### 1.1 Project version 

This project was started with 
- [Create React App](https://github.com/facebook/create-react-app) and uses

- React (18.2.0)
- Axios (0.27.2)
- react-router-dom (6.3.0)
- redux-toolkit (1.8.3)

- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```
We recommend to use Visual Studio Code to edit and launch this project and lastest version of Chrome browser 

## 2. Project

### 2.1 Prerequisites
- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
If you are working with several versions of NodeJS, we recommend you install nvm. This tool will allow you to easily manage your NodeJS versions.

### 2.2 Launching the project(**React**)

To start this project : 

- Fork the repository
- Clone it on your computer.
- Open the terminal and go to the repo
- Make a **cd** on `argent-bank`
- The `npm install` command will allow you to install the dependencies.
- The `npm start` command will allow you to run the Website.
- If the site does not open you can go on your browser and put this address `http://localhost:3006`

### 2.3 Other build using api

To start the api :

- Open a other terminal and go to the repo
- Make a **cd** on `Project-10-Bank-API-master`
- The `npm install` command will allow you to install the dependencies.
- The `npm run dev:server` command will allow you to run the api.

## 3. Endpoints

### 3.1 View Website user

When you are on the login page the two existing users are : 

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

**Warning, currently only two users have been simulated.**