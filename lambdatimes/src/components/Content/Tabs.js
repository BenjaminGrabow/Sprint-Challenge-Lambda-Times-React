import React from 'react';
import Tab from './Tab';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((tab, index) =>
          <Tab
            tab={tab}
            key={index}
            selectTabHandler={props.selectedTab}
          />)}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
// Added already in Tab.js
export default Tabs;
