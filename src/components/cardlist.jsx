
import React from 'react';
import CardView from "./cardview.jsx";

export default class CardList extends React.Component {
    constructor() {
        super();
        this.state = {cards: [
            {
                title: "Hello",
                content: "<see>\n\n\nhttps://github.com/dualface/zanbt",
                tags: ["fun", "private"]
            },
            {
                title: "quick-cocos2d-x",
                content: "<see>\n\n\nhttps://github.com/dualface/quick-cocos2d-x",
                tags: ["work", "public"]
            }
        ]};
    }

    render() {
        console.log("CardList.render()");
        let cards = [];
        let key = 1;
        this.state.cards.forEach(card => cards.push(<CardView card={card} key={key++} />));
        return (
            <div className="cardlist">
                {cards}
            </div>
        );
    }
}
