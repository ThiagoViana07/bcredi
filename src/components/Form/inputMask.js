import React, { useRef, useEffect } from 'react';
import ReactInputMask, { Props as InputProps } from 'react-input-mask';

import { useField } from '@unform/core';

import Mask from '../../utils/mask/cpfMask'


const InputMask = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref, value) {
        ref.setInputValue(value);
      },
      clearValue(ref) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <ReactInputMask ref={inputRef} defaultValue={defaultValue} {...rest} />
      {error && <span className="error" style={{ color: "#ff5863", fontSize: "14px" }}>{error}</span>}
    </div>


  );
};

export default InputMask;