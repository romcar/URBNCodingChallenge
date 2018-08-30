# URBNCodingChallenge


## How to get started 

Make sure you have both an [Eventful API](http://api.eventful.com/keys) key and a [Google maps API](https://developers.google.com/maps/documentation/javascript/get-api-key) key

Make sure you have a config.js at the root of the repo. 

```
//config.js

module.exports = {
  app_key: 'Your API key',
  googleMaps_key:  'Your API key',
};

```

Download dependencies: 

>npm install

Start sever: 
>npm run server

Test: 

>npm test


### Tech Stack: 

- Express
- React
- Styled-Components
- Webpack/babel
- Enzyme
- Jest


### Features I want to add later: 
- Icons for the other information in the event object. 
- Image Carousel for the modals
- Jshhuzz up the side bar. 
- Performer information for each event. 
  - links to the performers bios/url provided by eventful. 
  - possibly use some other api to get more info on the performer
- Try to change the stock image of the nav/search bar into an interactive Map.
- 
