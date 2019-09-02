"use strict";

import Model from "./src/model.js";
import View from "./src/view.js";
import Controller from "./src/controller.js";

let app = (() => {
    document.addEventListener('DOMContentLoaded', () => {
        let model = new Model();
        let data = model.getAppState();
        
        let container = document.querySelector('#app');
        let view = new View(container);
        view.generateForm(data);
        
    },true);
})();  