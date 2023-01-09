const express = require('express')
const morgan=  require('morgan')
const mongoose= require('mongoose')
const comments = require('./routes/comments')
const user = require('./routes/user')
const auth = require('./routes/auth')
const cors = require('cors')

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/comliy')
  .then( () => console.log('Connected to MongoDB'))
  .catch( err => console.log('coudnt connect to MogoDB') )
  mongoose.set('strictQuery', false);

app.use(cors())
app.use(express.json()); // conver json to javascript and javascript to json

app.use(express.static('public'))

if (app.get('env') === 'development')
  app.use(morgan('tiny'))
  
app.use('/api/comments',comments);
app.use('/api/users',user)
app.use('/api/auth',auth)


// PORT 
const port = process.env.PORT || 3002; 

app.listen(port, () => console.log(`active on ${port}`))