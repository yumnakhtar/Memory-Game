import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
import Navbar from "./components/Navbar";
let shuffleArr = require('shuffle-array');

class App extends Component {
    // Setting this.state.friends to the friends json array
    state = {
        friends,
        currScore: 0,
        highScore: 0
    };

    // shuffle = () => {
    //     let friends = this.state.friends;
    //     shuffleArr(friends);
    //     this.setState({ friends });
    // }

    clicked = (id) => {
        let friends = this.state.friends;
        let currScore = this.state.currScore;
        let targetFriend = {};
        friends.forEach((elem) => {
            if (elem.id === id) {
              targetFriend = elem;
            }
        });
        if (targetFriend.clicked === false) {
          targetFriend.clicked = true;
          currScore++;
          shuffleArr(friends);
          this.setState({ currScore, friends });
      }
      else {
          this.endGame();
      }
  }

    endGame = () => {
        let highScore = this.state.highScore;
        let currScore = this.state.currScore;
        let friends = this.state.friends;

        if (currScore > highScore) {
            highScore = currScore;
        }
        currScore = 0;
        friends.forEach((elem) => {
            elem.clicked = false;
        });
        shuffleArr(friends);
        this.setState({ friends, currScore, highScore });
    }

    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div>
                    Current Score: {this.state.currScore}
                    High Score: {this.state.highScore}
                </div>
                <Wrapper>
                    {/* <Title>Friends List</Title> */}
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
