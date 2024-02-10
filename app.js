const express = require('express');
const path = require('path')
const app = express();
const router = require('./routes');
const log = require('./middlewares/logger')

app.use(log);
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.use(router);
app.use((req, res, next) => {
    res.status(404)
    res.send({
        status: 'failed',
        message: 'Resource ' + req.originalUrl + ' Not Found'
    })
})
app.listen(3000, () => console.log('server: http://localhost:3000'));