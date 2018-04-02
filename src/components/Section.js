import PropTypes from 'prop-types';
import React from 'react';

import FullWidth from './FullWidth';
import HalfWidth from './HalfWidth';
import ListView from './ListView';

function Section (props) {
  return (
    <div className="section-container">
      <div className="double-cell">
        <HalfWidth content={props.content.halfWidth} />
        <ListView content={props.content.listView} />
      </div>
      <hr className="horizontal-divider" />
      <div className="single-cell">
        <FullWidth content={props.content.fullWidth} />
      </div>
      <hr className="horizontal-divider" />
      <p className="centered clickable-text call-to-action">{"Place a Classified Ad"}</p>
    </div>
  )
}

Section.propTypes = {
  content: PropTypes.object.isRequired
}

export default Section;
