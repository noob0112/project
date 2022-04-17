const getTodos = require('./getUsers');
const getTodo = require('./getUser');
const updateTodo = require('./updateUser');
const deleteTodo = require('./deleteUser');

module.exports = {
    paths:{
        '/users':{
            ...getTodos,
        },
        '/users/{_id}':{
            ...getTodo,
            ...updateTodo,
            ...deleteTodo
        }
    }
}