
import React from 'react';
import CardView from "./cardview.jsx";

export default class CardList extends React.Component {
    constructor() {
        super();
        this.state = {cards: [
            {
                title: "Hello",
                content: "<see>\n\n\nhttps://github.com/dualface/zanbt",
                tags: ["work", "high"]
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
