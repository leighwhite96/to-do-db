const mongoose = require('mongoose')

var todoSchema = {
  'title': String,
  'complete': Boolean
}

var Todos = mongoose.model('todos', todoSchema);

module.exports = Todos
