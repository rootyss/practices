import React, { useState, FC } from 'react';

export enum CardVariant {
  outline = 'outline',
  primary = 'primary'
}

interface CardProps {
  width: string;
  height: string;
  variant?: CardVariant;
  onClick: (num: number) => void;
}

const Card: FC<CardProps> = 
({
  width,
  height,
  children,
  onClick,
  variant,
}) => {
  const [state, setState] = useState(0)
  return (
    <div style={{width, height,
      border: variant === CardVariant.outline ? "1px solid gray" : 'none',
      background: variant === CardVariant.primary ? 'lightgray' : ''
    }} onClick={() => onClick(state)}>
      {children}
    </div>
    );
};

export default Card;