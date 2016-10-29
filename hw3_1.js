// Парсинг данных внешнего ресурса, используя модуль cheerio

var request = require('request');
var cheerio = require('cheerio');
var readline = require('readline');
var fs = require('fs');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.write('Please, enter sport (for example: Футбол, Теннис, Хоккей) \n'); 

rl.on('line', function(sport) {

	request('http://www.sports.ru/', function (error, response, html) {
	 


	  if (error)
	    throw error;

	  if ( response.statusCode !== 200 )
	    return console.log('incorrect statusCode: ', response.statusCode);

	  var $ = cheerio.load(html);
	 

       $('.aside-news-list__item-sport').each(function(i, element) {
		    if ($(element).text().trim() == sport){
		    	var type = $(element).text().trim();
		    	var date = $(element).next().text().trim();
		    	var content = $(element).next().next().text().trim();
		    	
		    	//console.log($(element > a).text().trim());
		    	console.log(`Спорт: ${type}\nДата: ${date}\nНовость: ${content}\n`);
		    };
		});
    })

	this.close();
});