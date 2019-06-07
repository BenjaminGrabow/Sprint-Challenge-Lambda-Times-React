import React from 'react';

const Tab = props => {
  const whichClass = props.tab === props.selectTab ? 'tab active-tab' : 'tab';
  return (
    <div
      className={whichClass}
      onClick={() => { props.selectTabHandler(props.tab)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
