var gs = require('github-scraper'); // require the module
var url = 'alanshaw' // a random username (of someone you should follow!)
gs(url, function(err, data) {
  console.log(data); // or what ever you want to do with the data
})