# Node.js Template

## Technologies Used:
* Nodejs
* Express
* JS
* SCSS
* CSS
* Pug

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
git clone https://github.com/Ronmantech/Nodejs_Template.git
cd Nodejs_Template 
npm install
npm start
```

The app will run on port 8080. [localhost:8080](http://localhost:8080/).

## Deploying to Heroku

```
heroku create
git push heroku master
heroku open
```

Or you can deploy your own copy of the app using the web-based flow:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Help Desk 

If "cant find modules" error is encountered. Try the following: 
```
npm install
```

If "Node Sass could not find a binding for your current environment" or "throw new Error(errors.missingBinary());" error is encountered. Try either of the following:  
```
rm -rf node_modules
npm install 
```
or 
```
npm rebuild node-sass
npm install
```
