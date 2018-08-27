import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";
import LetsBegin from "./components/LetsBegin";
import WinningText from "./components/WinningText";
import LosingText from "./components/LosingText";
import "./App.css";

const Shuffle = (props) => {
  var input = props;
   
  for (var i = input.length-1; i >=0; i--) {
   
      var randomIndex = Math.floor(Math.random()*(i+1)); 
      var itemAtIndex = input[randomIndex]; 
       
      input[randomIndex] = input[i]; 
      input[i] = itemAtIndex;
  }
  return input;
}

function TextStatus(props) {
  const winText = props.winText;
  if(winText === 0) {
    return <LetsBegin />;
  }
  else if(winText === 1) {
    return <WinningText />;
  }
  else if(winText === -1) {
    return <LosingText />;
  }
}

class App extends Component {
  state = {
    images: images,
    totalCount: 0,
    highScore: 0,
    winText: 0
  };

  endGame = (props) => {
    console.log("goodbye");
    //change high score if it's lower than the current totalScore
    if(this.state.highScore < this.state.totalCount){
      this.setState({ highScore: this.state.totalCount})
    };
    //reset totalCount back to 0
    this.setState({totalCount: 0});
    const array = [...this.state.images];
    //change clicked value back to false on all images
    for(let i = 0; i < this.state.images.length; i++) {
      array[i].clicked = false;
    };
    this.setState ({ array });
    this.setState ({ winText: -1});
    console.log("All false now" + props);
  }

  handleIncrement = (props) => {
    this.setState({ totalCount: this.state.totalCount + 1 });
    const id = props.id;
    if(props.clicked === false) {
      for(let i = 0; i < this.state.images.length; i++) {
        if(this.state.images[i].id === id) {
          const array = [...this.state.images];
          array[i].clicked = true;
          this.setState ({ array });
          this.setState ({ winText: 1});
        }

      }
    }
    else {
      this.endGame(props);
    }

  };



  render() {
    return (
      <Wrapper>
        <div className="container p-5">
        <div className="row fixed-top">
          <div className="col-4">
            <button type="button" className="btn btn-info btn-lg ml-4 score">
              Score: <span className="badge badge-light">{this.state.totalCount}</span>
            </button>
          </div>
          <TextStatus winText={this.state.winText} />
          <div className="col-4 text-right">
            <button type="button" className="btn btn-info btn-lg ml-4 highScore">
              High Score: <span className="badge badge-light">{this.state.highScore}</span>
            </button>

          </div>
        </div>
          <Title>...do you remember?</Title>
          
              <div className="row">
                { Shuffle(images).map(image => (
                  <ImageCard
                    id={image.id}
                    key={image.id}
                    name={image.name}
                    image={image.image}
                    clicked={image.clicked}
                    handleIncrement= {this.handleIncrement}
                  />
                ))}
            </div>
       </div>
      </Wrapper>
    );
  }
}

export default App;