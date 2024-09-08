const express = require('express');
const app = express();
const DataStore = require('nedb');

app.listen(3000, () => console.log('listening on port 3000'));
app.use(express.static('public'));
app.use(express.json());


const database = new DataStore('data/database.db');
database.loadDatabase();

app.post('/api', (request, response) => {
    console.log(request.body);
    response.json({
        status: "success"
    });
});

const timestamp = Date.now();
