const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const {sequelize} = require('./models')

const app = express();

const SessionController = require('./controllers/SessionsController')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.use(express.static('html'));

app.get('/api/test', function(req,res){
    res.send(
        [{
          title: "Hello World!",
          description: "J'ai mangé"
        }]
    );
});

app.get('/api/session',SessionController.list);
app.post('/api/session',SessionController.create);

sequelize.sync({force: false})
  .then(() => {
    app.listen(process.env.PORT || 8080)
    console.log('Server started ')
  })
