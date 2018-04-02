import PropTypes from 'prop-types';
import React from 'react';

function Tab (props) {
  let classes = props.isActiveTab ? "active-tab tab" : "inactive-tab tab";

  if (props.isEmptyTab) {
    return (
      <div className="tab empty-tab" />
    )
  }

  return (
    <div className={classes} onClick={props.onClick}>
      <p className="tab-text">{props.tabName}</p>
    </div>
  )
}

Tab.propTypes = {
  isActiveTab: PropTypes.bool.isRequired,
  isEmptyTab: PropTypes.bool,
  onClick: PropTypes.func,
  tabName: PropTypes.string
}

export default Tab;
