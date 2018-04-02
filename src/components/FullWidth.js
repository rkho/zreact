import PropTypes from 'prop-types';
import React from 'react';
import image from '../images/real-estate-ad.jpg';

function FullWidth (props) {
  const imageClass = 'image block ' + props.content.image;
  const logoClass = 'logo block ' + props.content.logo;
  return (
    <div className="full-width-container">
      <div className={imageClass} />
      <div className="full-width-body">
        {props.content.rows.map((row, index) => {
          return (
            <p className="clickable-text" key={index}>
              {row}
            </p>
          )
        })}
        <div className={logoClass} />
      </div>
    </div>
  )
}

FullWidth.propTypes = {
  content: PropTypes.shape({
    image: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    rows: PropTypes.array.isRequired
  }).isRequired
}

export default FullWidth;
