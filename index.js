const server = require('express')();

const bp = require('body-parser');
server.use(bp.json());
server.use(
  bp.urlencoded({
    extended: true
  })
);

require('./db/db-config');

const routes = {
  galaxies: require('./routes/galaxies'),
  stars: require('./routes/stars'),
  planets: require('./routes/planets'),
  moons: require('./routes/moons')
};

Object.keys(routes).forEach(routeName =>
  server.use(`/api/${routeName}`, routes[routeName])
);

server.use('/api/*', (error, req, res, next) => {
  res.status(400).send(error);
});
server.use('*', (req, res, next) => {
  res.status(404).send('<h1>NO PAGE FOUND</h1>');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Started Da Planets server on port: ${port}`);
});
