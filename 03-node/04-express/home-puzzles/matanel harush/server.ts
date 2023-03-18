import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));
app.use('/particles', express.static(path.join(__dirname, 'particles')));

app.get('/', function (req, res) {
  const webPage = fs.readFileSync(path.join(publicPath, 'index.html'), { encoding: 'utf8', flag: 'r' });
  res.send(webPage);
});

app.get('/about', function (req, res) {
  const webPage = fs.readFileSync(path.join(publicPath, 'about.html'), { encoding: 'utf8', flag: 'r' });
  res.send(webPage);
});

app.get('/contact', function (req, res) {
  const webPage = fs.readFileSync(path.join(publicPath, 'contact.html'), { encoding: 'utf8', flag: 'r' });
  res.send(webPage);
});

app.listen(3000, function () {
  console.log('Server is listening on port 3000');
});
