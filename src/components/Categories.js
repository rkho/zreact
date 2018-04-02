import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Tab from './Tab';

function Categories (props) {
  return (
    <div className="categories-container">
      {props.tabNames.map((name, index) => {
        return (
          <Tab
            isActiveTab={props.activeTabIndex === index}
            key={index}
            onClick={() => props.onClick(index)}
            tabName={name}
          />
        )
      })}
      <Tab
        isActiveTab={false}
        isEmptyTab={true}
      />
    </div>
  )
}

Categories.propTypes = {
  activeTabIndex: PropTypes.number.isRequired,
  tabNames: PropTypes.array.isRequired
}

export default Categories;
