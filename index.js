const express = require('express');
const mysql = require('mysql');

const app = express();

app.listen('3000', () => {
    console.log("Server started on port 3000")
})

// Create connection

// const db = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'password',
// });

// Connect

// db.connect((err) => {
//     if(err){
//         console.log('THERE WAS AN ERROR: ' + err)
//         throw err;
//     }
//     console.log('MySql connected...')

// });

// Create DB

// app.get('/createdb', (req, res) => {
//     let sql = 'CREATE DATABASE nodejsmysql';
//     db.query(sql, (err, result) => {
//         if(err){
//             throw err
//         } else {
//             res.send('databased created...');
//             console.log(result);
//         }
//     })
// })

