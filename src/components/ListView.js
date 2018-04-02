import PropTypes from 'prop-types';
import React from 'react';

function ListView (props) {
  return (
    <div className="list-view-container">
      <h4 className="title">{props.content.title}</h4>
      {props.content.rows.map((name, index) => {
        return (
          <p className="bullet-point clickable-text" key={index}>{name}</p>
        )
      })}
    </div>
  );
}

export default ListView;
