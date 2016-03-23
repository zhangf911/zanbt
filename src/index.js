
import React from 'react';
import ReactDOM from 'react-dom';
import Content from "./content.js";

class MyApp {
    run() {
        ReactDOM.render(<Content />, document.getElementById('app-content'));
    }
}

let myapp = new MyApp();
myapp.run();
