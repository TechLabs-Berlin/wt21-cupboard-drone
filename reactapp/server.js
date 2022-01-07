const express = require('express');
const app = express();
const port = process.env.PORT || 4444;
const request = require('request');
const cors = require('cors');

app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express_backend', (req, res) => {
    res.send({ express: 'EXPRESS BACKEND CONNECTED TO REACT!'}); 
}); 



app.get('/home', function(req, res) {
    request('http://127.0.0.1:5000/flask', function (error, response, body) {
        console.log(response.body);
        console.error('error:', error); // Print the error
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the data received
        res.send(body); //Display the response on the website
      });      
});