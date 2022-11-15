const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const aylien = require("aylien-news-api");



/*
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });
*/
const app = express();

app.use(express.static(__dirname+ `/dist`))

//Body-Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Cors
const cors = require('cors');
app.use(cors());


console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})


const apiKey = process.env.API_KEY;
app.post('/sentimentAPI', function (req, res) {
    const txt=req.body.txt;
   
    getSentiment(txt,apiKey,(data)=>{
res.send(data);
    })

    

})


const getSentiment = (txt, key, callback) => {
    request(`https://api.meaningcloud.com/sentiment-2.1?key=${key}&lang=en&txt=${txt}`, { 
        json: true }, 
        (err, res, body) => {
        if (!err && res.statusCode == 200) {
            callback(body);
        }   else {
            console.log(error);
        }
    });
}


// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})