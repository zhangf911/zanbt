
import React from 'react';

export default class Content extends React.Component {
    render() {
        return (
            <h1>hello {this.props.text}</h1>
        );
    }
}
