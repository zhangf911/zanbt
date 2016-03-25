import React from 'react';
import ReactDOM from 'react-dom';

import EditableText from './editabletext.jsx';

export default class CardView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            content: props.content,
            tags: props.tags
        };
    }

    onTitleChange(state) {
        this.state.title = state.text;
    }

    onContentChange(state) {
        this.state.content = state.text;
    }

    render() {
        let card = this.props.card;
        let tags = card.tags;
        if (!Array.isArray(tags)) {
            tags = [];
        }
        tags = tags.join(", ");

        return (
            <div className="cardview">
                <div className="title">
                    <EditableText onChange={this.onTitleChange.bind(this)}
                                  tag="h2"
                                  text={card.title}/>
                </div>
                <div className="content">
                    <EditableText onChange={this.onContentChange.bind(this)}
                                  multilines={true}
                                  tag="pre"
                                  text={card.content}/>
                </div>
                <div className="meta">
                    <ul>
                        <EditableText tag="li" split="," text={tags}/>
                    </ul>
                </div>
            </div>
        );
    }
}
