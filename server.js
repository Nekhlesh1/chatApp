const express = require('express');
const app = express();
const http = require('http').createServer(app);
const port = process.env.port ||8000;


// CREATING SERVER
http.listen(port, (err) => {
    if(err)
    {
        return console.log("Error connecting the server", port);
    }
    return console.log("Successsfully connected to the server at port :",port );
})

// SETTING STATIC FILES
app.use(express.static(__dirname + '/public'))

// SETTING ROUTES
app.get('/', (req, res)=>{
    res.sendFile(__dirname+ '/index.html')
})
