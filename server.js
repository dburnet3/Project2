const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const db = require("./models");
const apiRoutes = require("./controllers/api-routes");
const htmlRoutes = require("./controllers/html-routes");
var bodyParser = require('body-parser');
var urlencode = bodyParser.urlencoded({ extended: true});

//Passport Config
app.use(express.static('public'));

var apis = require('./controllers/api-routes');
app.use('/', apis);

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(apiRoutes);
app.use(htmlRoutes);
app.use(express.static("public"));

//Requiring our routes
require("./controllers/api-routes.js");
require("./controllers/html-routes.js");

db.sequelize.sync({ force: false}).then(() => {
    app.listen(PORT,
        () => console.log(`http://localhost:${PORT}`));
});

module.exports = app;