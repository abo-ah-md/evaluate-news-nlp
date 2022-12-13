const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const aylien = require("aylien-news-api");

/*
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });
*/

const app = express();

app.use(express.static("dist"));

//Body-Parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Cors
const cors = require("cors");

app.use(cors());

const apiKey = process.env.API_KEY;

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("src/client/views/index.html"));
});

const request = require("request");

app.post("/sentimentAPI", function (req, res) {
  console.log("somone has posted");
  const txt = req.body.formText;

  getSentiment(txt, apiKey, (data) => {
    console.log(data);
    res.send(data);
  });
});

//the API call
const getSentiment = (txt, key, callback) => {
  request(
    `https://api.meaningcloud.com/sentiment-2.1?key=${key}&lang=en&txt=${txt}`,
    {
      json: true,
    },
    (err, res, body) => {
      if (!err && res.statusCode == 200) {
        callback(body);
      } else {
        console.log(err);
      }
    }
  );
};

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});
