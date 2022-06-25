var db = require("../config/database");

const BarGraph = {
  // To add a category
  BarGraph1: (callback) => {
    var dbConn = db.getConnection();
    dbConn.connect((err) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      }
      const testQuery = `SELECT respondents.respondent_id, respondents.respondent_name, COUNT(opportunity_respondents.respondent_id) bids
      FROM respondents
      INNER JOIN opportunity_respondents ON respondents.respondent_id = opportunity_respondents.respondent_id
      INNER JOIN opportunities ON opportunity_respondents.opportunity_id = opportunities.opportunity_id 
      AND (opportunities.planned_closed_date LIKE '%2021%' or opportunities.extended_closed_date LIKE '%2021%')
      GROUP BY respondents.respondent_name
      ORDER BY COUNT(opportunity_respondents.respondent_id) DESC
      LIMIT 4;`;
      dbConn.query(testQuery, (error, results) => {
        dbConn.end();
        if (error) {
          return callback(error, null);
        }
        return callback(null, results);
      });
    });
  },
};

module.exports = BarGraph;

