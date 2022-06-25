var express = require("express");
var Graph = express();
var cors = require("cors");
const BarGraph = require("../model/barGraph");

var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

Graph.use(cors());

Graph.use(bodyParser.json()); //parse appilcation/json data
Graph.use(urlencodedParser);

Graph.get("/top4respondents", (req, res) => {
  BarGraph.BarGraph1((error, results) => {
    if (error) {
      res.status(500).send();
      return;
    }
    res.status(200).send(results);
  });
});

module.exports = Graph;
