const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const db = require("./models");
const apiRoutes = require("./controllers/api-routes");
const htmlRoutes = require("./controllers/html-routes");


//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(apiRoutes);
app.use(htmlRoutes);
app.use(express.static("public"));


db.sequelize.sync({ force: false}).then(() => {
    app.listen(PORT,
        () => console.log(`http://localhost:${PORT}`));
});

