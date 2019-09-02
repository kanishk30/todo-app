'use strict';

export default class Model {

    constructor() {}

    getAppState() {
        let todoData = window.localStorage.getItem('todoData');
        if(!todoData){
            window.localStorage.setItem('todoData', JSON.stringify([])
            );
        }
        return JSON.parse(window.localStorage.getItem('todoData'));
    }

    setAppState(data, newTodoAdded=false){
        let promise = new Promise ((resolve, reject)  => {
            let todoData = JSON.parse(window.localStorage.getItem('todoData'));
            
            if(!newTodoAdded) {
                for(let todo of todoData) {
                    if(todo.id === data.id) {
                        todoData.splice(data.id, 1, data)
                        break;
                    }
                }
            } else {
                todoData.push(data);
            }
            

            window.localStorage.setItem('todoData', JSON.stringify([...todoData]));
            resolve(this.getAppState()); 
        })
        return promise;
    }

}