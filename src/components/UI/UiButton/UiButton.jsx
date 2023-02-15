import React from 'react';
import './UiButton.scss';

export default function UiButton({ text, onClick, disabled = false, variant = 'contained', color, size }) {

  const isDisabled = disabled ? 'disabled' : ''

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`button ${variant} ${color} ${isDisabled}`}
    >
      {text}
    </button>
  );
}