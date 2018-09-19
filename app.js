const express = require('express');
const awsServerlessExpress = require('aws-serverless-express');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

const app = express();
app.use(awsServerlessExpressMiddleware.eventContext())

app.get('/', (req, res) => {
  res.json({
    e: req.apiGateway.event,
    message: 'Hello Home!',
  });
});

app.get('/child', (req, res) => {
  res.json({
    e: req.apiGateway.event,
    message: 'Hello Child!',
  });
});

const server = awsServerlessExpress.createServer(app);
exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);
