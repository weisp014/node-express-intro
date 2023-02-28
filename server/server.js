const express = require('express');

//create an instance of express by calling the function returned above - gives an object
const app = express();
const port = 8000;

//express static file serving - public is the folder name
app.use(express.static('server/public'));

const quoteList = require('./modules/quoteList');

// When we visit http://localhost:8000/quotes
// in our browser, express will call this function
app.get('/quotes', function(req, res) {
    console.log('Request for /quotes was made');
    // Send back the list of quotes
    // so we can see it in our browser
    res.send(quoteList);

    //respond with status code and body message
    //res.status(400).send('This request is broken');
})

//start up our server
app.listen(port, () => {
    console.log('listening on port:', port);
});