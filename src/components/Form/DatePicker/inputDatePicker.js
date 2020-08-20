import React, { useRef, useState, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
import { parseISO, subYears } from 'date-fns'

import { useField } from '@unform/core';


import './styles.css'
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = ({ name, ...rest }) => {
  const datepickerRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [date, setDate] = useState(defaultValue || null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'props.selected',
      clearValue: (ref) => {
        ref.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      {error ?

        <ReactDatePicker
          id="form-date"
          ref={datepickerRef}
          selected={date}
          onChange={setDate}
          placeholderText="01/01/1999"
          dateFormat="dd/MM/yyyy"
          maxDate={new (Date)}
          minDate={subYears(new Date(2020, 0, 1), 120)}
          {...rest}
        />
        :

        <ReactDatePicker
          ref={datepickerRef}
          selected={date}
          onChange={setDate}
          placeholderText="01/01/1999"
          dateFormat="dd/MM/yyyy"
          maxDate={new (Date)}
          minDate={subYears(new Date(2020, 0, 1), 120)}
          {...rest}
        />

      }
      {error && <span className="error" style={{ color: "#ff5863", fontSize: "1.5rem", lineHeight: "1.29" }}>{error}</span>}
    </>
  );
};

export default DatePicker;