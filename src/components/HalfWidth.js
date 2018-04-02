import PropTypes from 'prop-types';
import React from 'react';

function HalfWidth (props) {
  const imageClass = 'image block ' + props.content.image;
  return (
    <div className="half-width-container">
      <h4 className="title">{props.content.title}</h4>
      <h3 className="header">{props.content.header}</h3>
      <div className="half-width-body">
        <p className="body-text">{props.content.body}</p>
        <div className={imageClass}/>
      </div>
      <p className="bullet-point clickable-text"><i className="fas fa-camera"></i>Slide Show</p>
    </div>
  )
}

HalfWidth.propTypes = {
  content: PropTypes.shape({
    body: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
}

export default HalfWidth;
