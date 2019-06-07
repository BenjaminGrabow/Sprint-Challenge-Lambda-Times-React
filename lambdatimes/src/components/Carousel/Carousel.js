import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
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
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}