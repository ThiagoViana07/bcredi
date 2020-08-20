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

  // var inputElement = document.getElementById('errorCheckbox')
  // console.log(inputElement)

  return (
    <>
      {error ?
        <div className="terms" style={{ borderColor: "#ff5863" }} >
          <div className="checkbox">
            <input ref={inputRef} defaultValue={defaultValue} {...rest} />
          </div>
          <span>Li e estou de acordo com a <a href="#">Política de Privacidade</a> e a <a href="#">Política de Uso de Informações</a></span>
        </div>
        :
        <div className="terms" >
          <div className="checkbox">

            <input ref={inputRef} defaultValue={defaultValue} {...rest} />
          </div>
          <span>Li e estou de acordo com a <a href="#">Política de Privacidade</a> e a <a href="#">Política de Uso de Informações</a></span>
        </div>}

      {error &&
        <span id="errorCheckbox"
          style={{ color: "#ff5863", fontSize: "1.5rem", marginTop: "1px" }}>
          {error}
        </span>
      }
    </>
  );
}