//install express server
const express = require('express');
const path = require('path');

const app = express();

//serve only the static files from the dist
app.use(express.static('./dist/AFL'));

app.get('/*', function(req,res){

    res.sendFile(path.join(__dirname,'/dist/AFL}/index.html'));

});

//start the app by listening to the default heroku port
app.listen(process.env.PORT || 8080);