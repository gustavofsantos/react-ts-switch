import React, { useState, useEffect, useCallback } from 'react';

interface Props {
  disabled?: boolean,
  onToggle?: (state: boolean) => void
}

/**
 * @param {object} props
 * @param {boolean} props.disabled
 */
const Switch = (props: Props) => {
  const [state, setState] = useState(false);

  const toggle = useCallback(() => {
    if (!props.disabled) {
      setState(!state);
    }
  }, [state, props.disabled]);

  useEffect((): void => {
    if (typeof props.onToggle === "function") {
      props.onToggle(state);
    }
  }, [state]);

  return (
    <div className={`switch ${props.disabled ? 'disabled' : ''} ${state ? 'on' : 'off'}`} onClick={toggle}>
      <div className={`switch-toggle ${state ? 'on' : 'off'}`}/>
    </div>
  )
};

export default Switch;