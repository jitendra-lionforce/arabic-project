import React, { Component } from "react";
import './Banner2.css'
// https://codepen.io/AlexBalaushko/pen/mdepQzo

export class Banner2 extends Component {
    state = {
        carouselDeg: 17,
        itemDeg: -17,
        centerItem: 0,
        prevItem: 9,
        lastItem: 9,
        nextItem: 1,
        carousel: [
            { name: "Jone", id: 0, position: 1 },
            { name: "Wong", id: 1, position: 2 },
            { name: "Kaylem", id: 2, position: 3 }
        ]
    };

    getIdItems = side => {
        // true = next, false = prev
        const { nextItem, prevItem, lastItem } = this.state;

        if (side) {
            this.setState(
                {
                    centerItem: nextItem
                },
                () => prevNext(this.state.centerItem)
            );
        } else {
            this.setState(
                {
                    centerItem: prevItem
                },
                () => prevNext(this.state.centerItem)
            );
        }

        const prevNext = itemId => {
            if (itemId === lastItem) {
                this.setState({
                    nextItem: 0,
                    prevItem: lastItem - 1
                });
            } else if (itemId === 0) {
                this.setState({
                    prevItem: lastItem,
                    nextItem: 1
                });
            } else {
                this.setState(state => ({
                    nextItem: state.centerItem + 1,
                    prevItem: state.centerItem - 1
                }));
            }
        };
    };

    next = () => {
        this.getIdItems(true);
        this.setState(state => ({
            carouselDeg: state.carouselDeg - 36,
            itemDeg: state.itemDeg + 36
        }));
    };

    prev = () => {
        this.getIdItems(false);
        this.setState(state => ({
            carouselDeg: state.carouselDeg + 36,
            itemDeg: state.itemDeg - 36
        }));
    };

    getCssClass = id => {
        const { centerItem, nextItem, prevItem } = this.state;

        if (id === centerItem) {
            return "active";
        } else if (id === nextItem) {
            return "next";
        } else if (id === prevItem) {
            return "prev";
        }
    };

    // 36

    render() {
        return (
            <div className="Banner2">
                <button onClick={this.next}>Next</button>
                <button onClick={this.prev}>Prev</button>
                <div className="test" />
                <div
                    className="carousel"
                    style={{ transform: `rotate(${this.state.carouselDeg}deg)` }}
                >
                    {this.state.carousel.map((item, index) => (
                        <div
                            className={`item-carousel ${this.getCssClass(index)}`}
                            key={item.id}
                            id={item.id}
                            style={{ transform: `rotate(${this.state.itemDeg}deg)` }}
                        >
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Banner2;
