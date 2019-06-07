import React, { Component } from 'react';
import { carouselData } from '../../data'
import styled from 'styled-components';

const Div = styled.div`
 width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  position: relative;
  overflow: hidden;
  margin-top: 16px;

@media (min-width: 1200px) {
    width: 1200px;  
}

span {
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;
  top: 50%;
  left: 25px;
  transform: translate(0, -50%);

  &:hover {
    color: #333;
  background-color: #fff;
  border: 2px solid #333;
  }
}

p {
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;
  top: 44%;
  right: 25px;
  transform: translate(0, -60%);

  &:hover {
    color: #333;
  background-color: #fff;
  border: 2px solid #333;
  }
}

img {
  width: 100%;
  display: none;
}
`;

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carousel: [],
      index: 0
    }
  }
  componentDidMount(){
this.setState({
  carousel: carouselData
})
  }

  leftClick = () => {
    this.setState( prevState => {
      return {
        index: prevState.index < 3 ? prevState.index + 1 : prevState.index = 0}
    })
  }

  rightClick = () => {
    this.setState( prevState => {
      return {
        index: prevState.index > 0 ? prevState.index - 1 : prevState.index = 3}
    })
  }

  selectedImage = () => {
    return <img src={this.state.carousel[this.state.index]} style={{display: 'block'}} alt="carousel"  />
  }
  
  render(){
    return (
      <Div>
        <span onClick={this.leftClick}>{"<"}</span>
        {this.selectedImage()}
        <p onClick={this.rightClick}>{">"}</p>
      </Div>
    )
  }
}