var express = require('express');
var router = express.Router();

var Todo = require('../models/Todo.js');

/* GET todos listing. */
router.get('/', function(req, res, next) {
  Todo.find((err,todos) => {
    if(err) {
      return res.json({error: err});
    }
    res.json({payload:todos});
  })});

router.post('/', function(req,res,next) {
  const todoItem = req.body.title;
  console.log(todoItem);
  var todo = new Todo({
    title: todoItem,
    complete: req.body.complete
  });
  todo.save((err,doc) => {
    console.log(doc);
    if(err){
      res.json({error: err});
    }
    res.json({message: 'todo saved', payload: {}})
  })

})

router.put('/',function(req,res,next) {
  console.log(req.body);
  Todo.findOneAndUpdate({title: req.body.title}, req.body ,(err,doc)=> {
    if(err) {
      return res.json({error:err});
    } else {
    res.json({message: 'todo updated'})
}})
  })

module.exports = router;
