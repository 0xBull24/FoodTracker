const express = require('express');
const exphbs = require('express-handlebars');

const routes = require('./controller/burger_controller');

const app = express();
const PORT = process.env.PORT || 3000;

// Setup of middleware

// Serve static content from here
app.use(express.static('public/assets'));

// Handle encoded and JSON request
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Set Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Grab the routes used in the app
app.use(routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port`);
    console.log(`Connect to server here at http://localhost:${PORT}`);
});