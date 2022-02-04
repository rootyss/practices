import React from 'react';

const Button = ({ type, text, click }) => <input type={type} value={text} onClick={click} />;

export default Button;
