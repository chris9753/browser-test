const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3434;
const users = {

}

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/verify', function(req, res) {
users[req.body.number] = req.body.coords;
res.send('success');
});
app.get('/retrieve/:number', function(req, res) {

    res.send(users[req.params.number]);
})

app.listen(port);
console.log('Server started at http://localhost:' + port);