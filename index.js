// backend file for user registration
// when user registers, the data is stored in the database
// and success.html is rendered
// when user already exists, error.html is rendered

// at first command line: npm init
// give information if asked in command line - no need to worry about it, you just can press enter enter enter

// secondly, install express(node.js), body-parser, mongodb, and mongoose(mongoDB driver for node.js)
// for this, type in command line: npm install express body-parser mongodb mongoose

// then write

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
// this is used to parse the data that is sent to the server in a beautiful format
// data that came from the form is not that beautiful, so we need to parse it to format it
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
// this is used to parse the data that is sent to the server in a beautiful json (js object like structure) format
app.use(bodyParser.json());


// select port
const port = 3000;

// monoDB connection string/URI
// this is the connection string of the database:
// mongodb+srv://mehedi:<db_password>@student-mocup-register.emroq.mongodb.net/?retryWrites=true&w=majority&appName=Student-mocup-register
// here, mehedi is the username of the database, <db_password> is the password of the database
// we will replace <db_password> with the actual password of the database I gave while creating the database. in my case it is mehedi123
// so, the connection string will be like this:

const mongodbURL = "mongodb+srv://mehedi:mehedi123@student-mocup-register.emroq.mongodb.net/?retryWrites=true&w=majority&appName=Student-mocup-register"

// define some routes  (where there will be request and response)
//  '/' means home route or the root route of the website like www.google.com/  nothing more after the slash
// so in homepage or in root route index.HTML file will be served or rendered
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/frontend/index.html');     // __dirname is the directory where the current file (index.JS) is located
}); 



//  /register route

app.post('/register', (req, res) => {

    try {
        
        // get the data from the frontend form body
        const { name, email, password } = req.body;



    } catch (error) {
        
    }

})







// listen for requests

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});










// now run this file or run this server by typing in command line: node index.js
// now go to the browser and type in-    localhost:3000/
// you will see the index.html file is served