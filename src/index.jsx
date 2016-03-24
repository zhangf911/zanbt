
import React from 'react';
import ReactDOM from 'react-dom';
import Content from "./content.jsx";

class MyApp extends React.Component {
    constructor() {
        super();
        this.state = {text: "tony"};
    }

    onChange(e) {
        this.setState({text: e.target.value});
    }

    render() {
        return (
            <div>
                <Content text={this.state.text} />
                <form>
                    <input onChange={this.onChange.bind(this)} value={this.state.text} />
                </form>
            </div>
        );
    }
}

let mountNode = document.getElementById("app-content");
ReactDOM.render(<MyApp />, mountNode);
