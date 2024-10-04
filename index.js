/*const express = require('express');
const app = express();
const DataStore = require('nedb');
const fs = require('fs');

const database = new DataStore('data/database.db');
database.loadDatabase();
const content = 'This is the string I want to append to the file.\n';

// Define the file path
const filePath = 'data/database.db';

function showMessage() {
    // Display a message when the button is pressed
    alert("Button has been pressed!");
    // Append the string to the file (this will add the string at the end of the file)
    fs.appendFile(filePath, content, (err) => {
        if (err) {
            console.error('Error appending to file:', err);
        } else {
            console.log('Content has been appended successfully!');
        }
    });
}
*/
