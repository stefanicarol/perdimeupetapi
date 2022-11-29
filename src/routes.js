const{Router} = require('express');
const TodoController = require('./Controllers/TodoListController');
 
const routes = Router();

routes.get('/', (req, res)=>{
    return res.status(200).json({message: "Server is on..."});
});
 
routes.post('/todo', TodoController.store);
routes.get('/todo', TodoController.index);
routes.get('/todo/:id', TodoController.show);
routes.put('/todo/:id', TodoController.update);
routes.delete('/todo/:id', TodoController.destroy);
routes.get('/my_todo/:owner', TodoController.mytodo);
routes.get('/filter_todo/:status', TodoController.filtertodo);
 

module.exports = routes;