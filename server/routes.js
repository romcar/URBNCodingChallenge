const router = require('express').Router();
const request = require('request');

const config = require('../config');
router.route('/search')
  .get((req, res) => {
    let key = 'app_key=' + config.app_key || process.env.EVENTFUL_KEY;

    /* location, query, time, category,  */
    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
      "url": `http://api.eventful.com/json/events/search?${key}&l=Philadelphia`
    };
    request(options, (err, response, body) => {
      if (err) {
        res.statusCode(404).send(err);
      }

      // console.log(response)
      // console.log(body)
      res.end(JSON.stringify(body));
    });
  });

module.exports = router;
