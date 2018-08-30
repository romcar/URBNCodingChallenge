const cache = require('memory-cache');
const router = require('express').Router();
const request = require('request');
const parseQueryString = require('./utils/parseQuery');

const getDefaultEvents = (callback) => {
  let startTime = new Date();
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

  request(options, (err, response, body) => {
    if (err) {
      res.status(404).send(err)
    }

    console.log('That request took', (new Date() - startTime) / 1000, 'seconds');

    cache.put('default', JSON.stringify(body), 3600000, (key) => {
      console.log('removing', k)
      getDefaultEvents();
    });

    if (callback) {
      callback(JSON.stringify(body))
    }

  });
};

(() => {
  getDefaultEvents();
})()

router.route('/default')
  .get((req, res) => {
    let events = cache.get('default');
    if (events) {
      res.status(200).send(events)
    } else {
      getDefaultEvents((events) => {
        res.status(200).send(events)
      });
    }
  })

router.route('/search')
  .get((req, res) => {
    let startTime = new Date();
    let qs = parseQueryString(req.query);


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

      console.log('That request took', (new Date() - startTime) / 1000, 'seconds');
      cache.put(qs, JSON.stringify(body), 300000, (k) => {
        console.log('removing', k);
      });

      res.status(200).end(JSON.stringify(body));
    });
  });

module.exports = router;
