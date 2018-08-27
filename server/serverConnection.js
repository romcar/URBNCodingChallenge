const app = require('./server');

const port = 3000;

app.listen(port, () => {
  console.log(new Date().toLocaleTimeString());
  console.log(`Listening on port ${port}!\n`);
});
