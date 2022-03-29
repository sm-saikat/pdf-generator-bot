const express = require('express')
const bodyParser = require('body-parser')
const webhookControllers = require('./controllers/webhookControllers')

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
})

app.get('/', (req, res)=>{
    res.send('Homepage');
})

app.get('/webhook', webhookControllers.webhookGet)
app.post('/webhook', webhookControllers.webhookPost)