import React, { Component } from 'react';
import Container from "./Container";
import Login from "../Login";
import hOC from "./hOC";
import { tabData, cardData } from '../../data';
import styled from 'styled-components';

const Div = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center;
`;

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

  componentWillMount() {
    localStorage.getItem('username') && this.setState({
      username: JSON.parse(localStorage.getItem('username'))
    })

    localStorage.getItem('password') && this.setState({
      password: JSON.parse(localStorage.getItem('password'))
    })

    localStorage.getItem('loggedIn') && this.setState({
      loggedIn: JSON.parse(localStorage.getItem('loggedIn'))
    })
  };

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

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('username', JSON.stringify(nextState.username));

    localStorage.setItem('password', JSON.stringify(nextState.password));

    localStorage.setItem('loggedIn', JSON.stringify(nextState.loggedIn));
  }

  render() {
    return (
      <Div>
        <WhichSite
         theTabs={this.state.tabs}
          theSelectedTab={this.changeSelected}
          theCards={this.filterCards()} 
          thePassword={event => this.changePassword(event)}
          theUsername={event => this.changeUsername(event)}
          toPostpage={this.goToPostPage}
          loggedIn={this.state.loggedIn}
          />
      </Div>
    );
  }
}
