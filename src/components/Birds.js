import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('BirdStore')
@observer

class Birds extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const bird = this.birdInput.value;
        this.props.BirdStore.addBirds(bird);
        this.birdInput.value = "";
    };
    removeBird(i) {
        this.props.BirdStore.removeBirds(i);
    }
    render() {
        const { BirdStore } = this.props;
        return (
            <div>
                <p>We have {BirdStore.birdCount} birds!!</p>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input type="text" ref={ input => (this.birdInput = input) } placeholder="enter something"></input>
                </form>
        <ul>{BirdStore.birds.map((bird, i) => <li onClick={(e) => this.removeBird(i)} key={bird}>{bird}</li>)}</ul>
            </div>
        )
    }
}

export default Birds;