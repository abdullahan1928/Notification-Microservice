const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/notifications', require('./routes/notification.route'));

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})
