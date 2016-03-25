import React from 'react';
import ReactDOM from 'react-dom';

export default class EditableText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: props.text};
    }

    onBlur(event) {
        this.textNode.style.display = "inherit";
        this.editNode.style.display = "none";
        this.setState({text: event.target.value});
        if (this.props.onChange) {
            this.props.onChange(this.state);
        }
    }

    onKeyUp(event) {
        if (event.keyCode == 27 /* esc */) {
            event.target.blur();
        }

        if (!this.props.multilines && event.keyCode == 13 /* return */) {
            event.target.blur();
        }
    }

    onClick() {
        this.textNode.style.display = "none";
        this.editNode.style.display = "block";
        this.editNode.focus();
    }

    componentDidMount() {
        console.log("EditableText.componentDidMount()");
        this.textNode = ReactDOM.findDOMNode(this.refs.text);
        this.editNode = ReactDOM.findDOMNode(this.refs.edit);
        this.editNode.style.display = "none";
    }

    render() {
        let text = this.state.text ? this.state.text : "";
        let HtmlEditTag = this.props.multilines ? "textarea" : "input";
        let HtmlTag = this.props.tag ? this.props.tag : "div";

        return (
            <div>
                <HtmlEditTag ref="edit"
                             onBlur={this.onBlur.bind(this)}
                             onKeyUp={this.onKeyUp.bind(this)}
                             defaultValue={text}/>

                <HtmlTag ref="text"
                         className={this.props.className}
                         onClick={this.onClick.bind(this)}>{text}</HtmlTag>
            </div>
        );
    }
}

