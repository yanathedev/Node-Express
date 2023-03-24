const express = require('express');
const bodyParser =  require('body-parser');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
    console.log(req.header);
    res.send("getting root");
});

app.listen(3000);