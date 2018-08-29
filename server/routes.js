const cache = require('memory-cache');
const router = require('express').Router();
const request = require('request');
const parseQueryString = require('./utils/parseQuery');
router.route('/search')
  .get((req, res) => {
    console.log(req.query);
    let qs = parseQueryString(req.query);

    console.log(qs);

    let prevRecord = cache.get(qs);

    // if a request at this qs was already made
    // within the past 5 minutes
    if (prevRecord) {
      res.status(200).send(prevRecord);
    }

    /* location, time, category,  */
    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
      "url": `http://api.eventful.com/json/events/search${qs}`
    };
    request(options, (err, response, body) => {
      if (err) {
        res.status(404).send(err);
      }
      console.log('Events put in cache')
      cache.put(qs, JSON.stringify(body), 300000, (k) => {
        console.log(k, 'was removed.');
      });

      res.status(200).end(JSON.stringify(body));
    });
  });

module.exports = router;


/*

Example Request: http://api.eventful.com/json/events/search?app_key=[your API KEY]&l=39.973617399999995,-75.1476869&within=50&image_sizes=large,medium

url: http://api.eventful.com/json/events/search?
  Required: app_key

  Location: (l) -> can be lat,lng (comma seperated)
                   can be a string: Philadelphia+Pa
                   can just be a city: Philadelphia
                   can take venue id
                   can take postal codes
  Query: (q) ->

*/