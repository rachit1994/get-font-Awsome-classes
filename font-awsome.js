var request = require('request');
var cheerio = require('cheerio');
var jsonfile = require('jsonfile');
var async = require('async');

let con = [];

request('http://fontawesome.io/cheatsheet/', function(error, response, html) {
            if (!error && response.statusCode == 200) {
                var $ = cheerio.load(html);
                async.eachSeries($('.col-md-4'), function(element, callback) {
                	$('.text-muted').remove();
                	$('.fa').remove()
                	console.log($('.col-md-4').text());
                })
                }
            });
