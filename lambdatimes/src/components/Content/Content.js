import React, { Component } from 'react';
import Container from "./Container";
import Login from "../Login";
import hOC from "./hOC";
import { tabData, cardData } from '../../data';

const WhichSite = hOC(Login, Container)


export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: [],
      username: "",
      password: "",
      loggedIn: "no",
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData
    })
  }

  changeSelected = tab => {
    this.setState({
      selected: tab
    })
  };

  filterCards = () => {
    return (this.state.selected !== "all" ? this.state.cards.filter(card => card.tab === this.state.selected) : this.state.cards);
  };

  changePassword = (event) => {
    this.setState({ password: event.target.value })
  }

  changeUsername = (event) => {
    this.setState({ username: event.target.value })
  }

  goToPostPage = () => {
    if (this.state.username.length > 5 &&
       this.state.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/)) {
      this.setState({
        loggedIn: "yes"
      })
    }
  }

  render() {
    return (
      <div className="content-container">
        <WhichSite
         theTabs={this.state.tabs}
          theSelectedTab={this.changeSelected}
          theCards={this.filterCards()} 
          thePassword={event => this.changePassword(event)}
          theUsername={event => this.changeUsername(event)}
          toPostpage={this.goToPostPage}
          loggedIn={this.state.loggedIn}
          />
      </div>
    );
  }
}
