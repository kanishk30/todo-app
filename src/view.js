'use strict';
import Controller from "./controller.js";


export default class View {

    constructor(container) {
        this.container = container;
        this.todoArray = [];
    }

    generateForm(todoArray) {
        // input field to enter todo and button
        let enterTodo = document.querySelector('.enter-todo');
        let frag = document.createDocumentFragment();
        
        let addInput = document.createElement('input');
        addInput.setAttribute('type', 'text');
        addInput.setAttribute('id', 'newTodo');
        
        let button = document.createElement('button'); 
        let btnText = document.createTextNode('Submit Todo');
        button.setAttribute('id', 'submit');
        button.appendChild(btnText);

        frag.appendChild(addInput);
        frag.appendChild(button);
        enterTodo.appendChild(frag);
        this.render(todoArray);
    }


    render(todoArray, addOneOnly=false) {
        let content = document.querySelector('.content');
        while (content.firstChild) {
            content.removeChild(content.firstChild);    
        }

        todoArray.forEach((todo, index) => {
            let div = document.createElement('div');
            let fragment = document.createDocumentFragment();
            let input = document.createElement('input');
            input.setAttribute('type', 'checkbox');
            input.setAttribute('id', index);
            let isChecked = todo.completed;
            input.checked = isChecked;

            let label = document.createElement('label');
            let labelText = document.createTextNode(todo.text);
            label.setAttribute('id', `label_${index}`);
            label.appendChild(labelText);
            label.style.textDecoration = todo.completed ? 'line-through' : 'none';
            
            fragment.appendChild(div);
            fragment.appendChild(input);
            fragment.appendChild(label);
            content.appendChild(fragment);
        });
        let controller = new Controller();
        controller.changeState();
        if(!addOneOnly) {
            controller.submitTodo();
        }
        
    }


}