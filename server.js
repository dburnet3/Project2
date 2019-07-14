const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const db = require("./models");
const apiRoutes = require("./controllers/api-routes");
const htmlRoutes = require("./controllers/html-routes");
var bodyParser = require ('body-parser');


//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })

app.use(apiRoutes);
app.use(htmlRoutes);
app.use(express.static("public"));

require("./controllers/api-routes");
require("./controllers/html-routes");



db.sequelize.sync({ force: false}).then(() => {
    app.listen(PORT,
        () => console.log(`http://localhost:${PORT}`));
});

