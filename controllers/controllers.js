const fs = require('fs')
const request = require('request')
const path = require('path')

// return JSON mock data
exports.getApi = (req, res, next) => {
    const url = ' https://jsonplaceholder.typicode.com/users';
    request({
        url: url,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.send(body)
        }
    })
}

// respond with JSON
// done previously - The POST request should accept `application/json`
// req.body.email - The POST request should take one field in the request body called “email”
// The POST request returns an item from your mock data that has the same “email” field value passed in the request body, with a 200 status. 
// The POST will return a 404 HTTP status if there are no items found
// The POST request should log to the console the data returned as one long string

exports.postApi = (req, res, next) => {
    // const url = ' https://jsonplaceholder.typicode.com/users';
    // request({
    //     url: url,
    //     json: true
    // }, function (error, response, body) {
    //     if (!error && response.statusCode === 200) {

    //     }
    // })
}

// return servers current date/time
exports.getDate = (req, res, next) => {
    const today = new Date()
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    res.send(dateTime)
}

// query a plainpassword which returns hashed value of plain password
// use bcryptjs, receive password on query (NOT POST, cant receive req.body), hash with 12 salt rounds, return as hashed password
exports.getHash = (req, res, next) => {

}

/// default
exports.getDefault = (req, res, next) => {
    return console.log("Default test!");
}