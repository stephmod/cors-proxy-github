const functions = require('firebase-functions');
const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
})

app.get("/:gituser/:repo/:file/:token?", (req, res) => {
    request({
        url: `https://raw.githubusercontent.com/` +
            `${req.params.gituser}/` +
            `${req.params.repo}/master/` +
            `${req.params.file}.json`,
        // if private repo + token provided
        headers: req.params.token !== undefined ? {
            Authorization: `token ${req.params.token}`
        } : {}
    },
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.send(response)
            }
            res.json(JSON.parse(body))
        })
})

exports.app = functions.https.onRequest(app)