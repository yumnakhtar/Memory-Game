import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
import Navbar from "./components/Navbar";
var shuffleArr = require('shuffle-array')

class App extends Component {
    // Setting this.state.friends to the friends json array
    state = {
        friends,
        currScore: 0,
        highScore: 0
    };

    vshuffle = () => {
        let friends = this.state.friends;
        shuffleArr(friends);
        this.setState({ friends });
    }

    clicked = (id) => {
        this.vshuffle();
    }

    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
        return (
            <div>
                <Navbar />
                <Wrapper>
                    <Title>Friends List</Title>
                    {this.state.friends.map(friend => (
                        <FriendCard
                            id={friend.id}
                            key={friend.id}
                            image={friend.image}
                            clicked={this.clicked}
                        />
                    ))}
                </Wrapper>
            </div>
        );
    }
}

export default App;
