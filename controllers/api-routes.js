const router = require("express").Router();
const db = require("../models");


router.get("/api/user", async (req, res) => res.json((await db.User.findAll({}))));

// router.post("/api/surveyResult", function(req, res ){
//     var jsondata = req.body;
//     var values = [];

//     for(var i=0; i< jsondata.length; i++)
//   values.push([jsondata[i].Ethnicity,jsondata[i].Choices,jsondata[i].Major,jsondata[i].Cost]);

//   db.surveyResult.create({
//     Ethnicity: req.body,
//       Choices: req.body,
//       Major: req.body,
//       Cost: req.body
//     })
//       .then(function(dbsurveyResult) {
//         res.json(dbsurveyResult);
//       });
//   });
//Bulk insert using nested array [ [a,b],[c,d] ] will be flattened to (a,b),(c,d)
// connection.query('INSERT INTO surveyResult (Ethnicity, Choices, Major, Cost) VALUES ?', [values], function(err,result) {
//   if(err) {
//      res.send('Error');
//   }
//  else {
//      res.send('Success');
//   }
// });

 // POST route for saving a new post
 router.post("/api/surveyResult", function(req, res) {
   console.log(req.body);
    db.surveyResult.create({
      Ethnicity: req.body.Ethnicity,
      Choices: req.body.Choices,
      Major: req.body.Major,
      Cost: req.body.Cost
    })
      .then(function(dbsurveyResult) {
        res.json(dbsurveyResult);
      });
  });




module.exports = router;

