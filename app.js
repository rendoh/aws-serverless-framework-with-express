const express = require('express');
const awsServerlessExpress = require('aws-serverless-express');

const app = express();
app.get('/', (req, res) => res.send('Hello World!'));

const server = awsServerlessExpress.createServer(app);
exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);
