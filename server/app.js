const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const {sequelize} = require('./models')

const app = express();

const SessionController = require('./controllers/SessionController')
const QuestionController = require('./controllers/QuestionController')
const AnswerController = require('./controllers/AnswerController')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.use(express.static('html'));

app.get('/api/test', function(req,res){
    res.send(
        [{
          title: "Hello World!",
          description: "Hello World!"
        }]
    );
});

app.get('/api/session/:sessionId',SessionController.get);
app.get('/api/session',SessionController.list);
app.post('/api/session',SessionController.create);
app.put('/api/session/:sessionId',SessionController.update);

app.get('/api/question',QuestionController.list);
app.post('/api/question',QuestionController.create);
app.put('/api/question/:questionId',QuestionController.update);

app.get('/api/answer',AnswerController.list);
app.post('/api/answer',AnswerController.create);
app.put('/api/answer/:answerId',AnswerController.update);


sequelize.sync({force: false})
  .then(() => {
    const port = process.env.PORT || 8080
    app.listen(port)
    console.log('Server started on port : ' + port)
  })
