import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core'

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      {error ? <input ref={inputRef} defaultValue={defaultValue} {...rest} style={{ borderColor: '#ff5863' }} /> :
        <input ref={inputRef} defaultValue={defaultValue} {...rest} />}

      {error && <span className="error" style={{ color: "#ff5863", fontSize: "1.5rem" }}>{error}</span>}
    </>
  );
}