import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData
    })  }

  changeSelected = tab => {
    this.setState({
      selected: tab
    })
  };

  filterCards = () => {
    return (this.state.selected !== "all" ? this.state.cards.filter(card => card.tab === this.state.selected) : this.state.cards);
  };

  render() {
    return (
      <div className="content-container">
        <Tabs tabs={this.state.tabs} selectedTab={this.changeSelected} />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
