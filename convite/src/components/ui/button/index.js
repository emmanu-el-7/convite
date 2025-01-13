import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onClick, style }) => {
    return (
        <button className="custom-button" onClick={onClick} style={style}>
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    style: PropTypes.object,
};

Button.defaultProps = {
    style: {},
};

export default Button;