import React from 'react';
import pt from 'prop-types'

const Tab = props => {
  const whichClass = props.tab === props.selectTab ? 'tab active-tab' : 'tab';
  return (
    <div
      className={whichClass}
      onClick={() => {
        props.selectTabHandler(props.tab)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: pt.string
};

export default Tab;
