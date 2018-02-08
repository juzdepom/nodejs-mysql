const express = require('express');
const mysql = require('mysql');

// Create connection

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'nodemysql'
});

// Connect

// db.connect()

db.connect((err) => {
    if(err){
        console.log('THERE WAS AN ERROR: ' + err)
        throw err;
    }
    console.log('MySql connected...')

});

// Create DB

const app = express();

// app.get('/createdb', (req, res) => {
//     db.query(sql, (err, result) => {
//         if(err){
//             throw err
//         } else {
//             res.send('Database created...');
//             console.log(result);
//         }
//     })
// })

app.listen('3000', () => {
    console.log("Server started on port 3000")
})



