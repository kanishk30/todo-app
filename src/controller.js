'use strict';
import Model from "./model.js";
import View from "./view.js";

export default class Controller {

    constructor() {
        this.model = new Model();
        this.view = new View();
    }

    submitTodo() {
        let submit = document.querySelector('#submit');
        submit.addEventListener('click', () => {
            let totaltodos = this.model.getAppState().length;
            let newTodo = document.querySelector('#newTodo');
            const todo = newTodo.value;
            const payload = {
                text: todo,
                completed: false,
                id: totaltodos
            }
            this.model.setAppState(payload, true).then((allTodos) => {
                console.log(allTodos);
                this.view.render(allTodos, true);
                this.clearText();
            });
        })
    }

    changeState() {
        const todos = this.model.getAppState();
        todos.forEach((todo, index) => {
            let checkedInput = document.getElementById(index);
            checkedInput.addEventListener('change', () => {
                todo.completed = !todo.completed;
                this.model.setAppState(todo).then(() => {});
                let label = document.querySelector(`#label_${index}`)
                label.style.textDecoration = todo.completed ? 'line-through' : 'none'
            }) 
            
        });
    }

    clearText() {
        const field = document.querySelector('#newTodo');
        field.value = '';
    }

}