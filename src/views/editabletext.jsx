import React from 'react';
import ReactDOM from 'react-dom';

export default class EditableText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: props.text};
        this.isArray = props.isArray;
    }

    onBlur(event) {
        this.textNode.style.display = "inherit";
        this.editNode.style.display = "none";

        let text = event.target.value;
        if (this.isArray) {
            let items = [];
            text.split(",").forEach(function(str) {
                str = str.trim();
                if (str != "") {
                    items.push(str);
                }
            });
            text = items;
        }
        
        this.setState({text: text});
        if (this.props.onChange) {
            this.props.onChange(this.state);
        }
    }

    onKeyUp(event) {
        if (event.keyCode == 27 /* esc */) {
            event.target.blur();
        }

        if (!this.props.isMultiLines && event.keyCode == 13 /* return */) {
            event.target.blur();
        }
    }

    onClick() {
        this.textNode.style.display = "none";
        this.editNode.style.display = "block";
        this.editNode.focus();
        if (this.isArray) {
            if (Array.isArray(this.state.text)) {
                this.editNode.value = this.state.text.join(", ");
            } else {
                this.editNode.value = new String(this.editNode.value);
            }
        } else {
            this.editNode.value = this.state.text;
        }
    }

    componentDidMount() {
        this.textNode = ReactDOM.findDOMNode(this.refs.text);
        this.editNode = ReactDOM.findDOMNode(this.refs.edit);
        this.editNode.style.display = "none";
    }

    render() {
        let text = this.state.text ? this.state.text : "";
        let HtmlEditTag = this.props.isMultiLines ? "textarea" : "input";
        let HtmlTextTag = this.props.textTag ? this.props.textTag : "div";
        let html;

        if (Array.isArray(text)) {
            this.isArray = true;
            let items = [];
            let HtmlWrapTag = this.props.wrapTag ? this.props.wrapTag : "div";
            text.forEach(item => items.push(<HtmlTextTag ref="text" key={item}>{item}</HtmlTextTag>));
            html = <HtmlWrapTag onClick={this.onClick.bind(this)}
                                   ref="text"
                                   className={this.props.className}>{items}</HtmlWrapTag>;
        } else {
            html = <HtmlTextTag onClick={this.onClick.bind(this)}
                            ref="text"
                            className={this.props.className}>{text}</HtmlTextTag>;
        }

        return (
            <div>
                <HtmlEditTag ref="edit"
                             onBlur={this.onBlur.bind(this)}
                             onKeyUp={this.onKeyUp.bind(this)}
                             defaultValue={text}/>

                {html}

            </div>
        );
    }
}

