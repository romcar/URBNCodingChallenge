const cache = require('memory-cache');
const router = require('express').Router();
const request = require('request');
const parseQueryString = require('./utils/parseQuery');

const getDefaultEvents = (callback) => {
  console.log('4a) Setting up the request ');
  let defaultQuery = {
    keywords: 'music',
    time: 'this week'
  }

  let qs = parseQueryString(defaultQuery);
  let options = {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    },
    "url": `http://api.eventful.com/json/events/search${qs}`
  }
  // console.log(qs, '~~~~~~~~~~~~~~~~~~~~~~~~~');

  console.log('5a) Asking for the information');
  request(options, (err, response, body) => {
    console.log('6a) Searching for the information');
    if (err) {
      console.error(err);
    }

    console.log('!!!!! Saving the information into cache');
    cache.put('default', JSON.stringify(body), 3600000, (key) => {
      console.log('Refreshing default records');
      getDefaultEvents();
    });

    if (callback) {
      console.log("Did you callback???");
      callback(JSON.stringify(body))
    }

  });
};

(() => {
  getDefaultEvents();
})()

router.route('/default')
  .get((req, res) => {
    console.log('1a) Recieved request [DEFAULT]');
    let events = cache.get('default');
    if (events) {
      console.log('2a) The cache has got this :D');
      res.status(200).send(events)
    } else {
      console.log("3) Gunna go searching for this, brb");
      getDefaultEvents((events) => {
        res.status(200).send(events)
      });
    }
  })

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