const express = require('express');
const app = express();
const DataStore = require('nedb');

app.use(express.static('public'));
app.use(express.json());

app.post('/api', (request, response) => {
    console.log(request.body);
});

const database = new DataStore('data/database.db');
database.loadDatabase();



const timestamp = Date.now();
