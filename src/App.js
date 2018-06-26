import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
import Navbar from "./components/Navbar";
let shuffleArr = require('shuffle-array');

class App extends Component {
    state = {
        friends,
        currScore: 0,
        highScore: 0
    };

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

    render() {
      let highScore = this.state.highScore;
      let currScore = this.state.currScore;
        return (
            <div>
                <Navbar
                  current= {currScore}
                  high= {highScore}
                />
                <Wrapper>
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