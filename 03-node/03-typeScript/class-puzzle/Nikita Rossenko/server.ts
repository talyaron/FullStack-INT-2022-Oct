import express from 'express';
import fs from 'fs';

const app = express();

app.get('/', function (req, res) {
  const webPage = fs.readFileSync('./index.html', { encoding: 'utf8', flag: 'r' });
  res.send(webPage);
});

app.get('/about', function (req, res) {
  const webPage = fs.readFileSync('./about.html', { encoding: 'utf8', flag: 'r' });
  res.send(webPage);
});

app.get('/contact', function (req, res) {
  const webPage = fs.readFileSync('./contact.html', { encoding: 'utf8', flag: 'r' });
  res.send(webPage);
});

app.listen(5000, function () {
  console.log('Server is listening on port 5000');
});
