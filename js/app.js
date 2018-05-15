let express = require('express'),
    request = require('request');

let app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let searchTerm = req.query.search;
  request(`http://www.omdbapi.com/?s=${searchTerm}&apikey=c0e01bc6`, (error, response, body) => {
    if (error) {
      console.log('*********************************************');
      console.log('Something went wrong!');
      console.log(error);
      console.log('*********************************************');
    } else if (response.statusCode === 200) {
      let data = JSON.parse(body);
      console.log('#############################################');
      res.render('results', {data:data});
      console.log('Results data has been rendered in the body');
      console.log('#############################################');
      
    }
  });
})

app.get('/results', (req, res) => {
  let searchTerm = req.query.search;
  request(`http://www.omdbapi.com/?s=${searchTerm}&apikey=c0e01bc6`, (error, response, body) => {
    if (error) {
      console.log('*********************************************');
      console.log('Something went wrong!');
      console.log(error);
      console.log('*********************************************');
    } else if (response.statusCode === 200) {
      let data = JSON.parse(body);
      console.log('#############################################');
      // res.send(data);
      res.render('results', {data:data});
      console.log('Results data has been rendered in the body');
      console.log('#############################################');
    }
  });
})

app.get('*', (req, res) => {
  res.send('The page you\'re looking for is invalid! Go and do something else with your life!');
})

app.listen(3000, () => {
  console.log('===========================================');
  console.log('Movie app server has started on port 3000');
  console.log('===========================================');
})