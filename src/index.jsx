
import React from 'react';
import ReactDOM from 'react-dom';
import CardList from "./views/cardlist.jsx";

class MyApp extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <CardList />
            </div>
        );
    }
}

let mountNode = document.getElementById("app-content");
ReactDOM.render(<MyApp />, mountNode);
