//create a server.js file in the root folder of your project and if required
// replace 'TestApp' with the name of your app paste in the below code 

//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/AFL'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname,'/dist/TestApp/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);