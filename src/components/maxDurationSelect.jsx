import React, { useEffect, useState } from 'react'
import Select from 'react-select'

import axios from 'axios';

const customStylesFloor = {
  control: (base, state) => ({
    ...base,
    fontFamily: 'Bariol Regular',
    boxShadow: 0,
    left: "16rem",
    paddingBottom: "0rem",
    top: "-1.6rem",
    cursor: 'text',
    borderRadius: 5,
    fontSize: "0.8rem",
    width: "14rem",
    borderColor: "#EAEAEA"
  }),

  option: (styles, { isFocused }) => {
    return {
      ...styles,
      cursor: 'pointer',
      backgroundColor: isFocused ? 'white' : 'white',
      color: isFocused ? 'rgba(255, 80, 86)' : 'black',
      lineHeight: 2,
    
    }
  },

  input: styles => ({
    ...styles,
    color: 'black',
    fontFamily: 'Bariol Regular',
    
  }),

  menu: styles => ({
    ...styles,
    left: "16rem",
    top: "0.3rem",
    boxShadow: 'none',
    borderRadius: 5,
    fontSize: '0.8rem',
    width: "14rem"
  }),

  singleValue: styles => ({
    ...styles,
    color: 'rgba(0, 0, 0)',
    fontSize: '0.8rem'
  })
}

function MaxDurationSelect(oldValue) {

  let options = [{ value: 30 , label: "30 min." },
                { value: 60 , label: "1 hr." },
                { value: 90 , label: "1 hr. 30 min." },
                { value: 120 , label: "2 hrs." },
                { value: 150 , label: "2 hrs. 30 min." },
                { value: 180 , label: "3 hrs." }]

  const onChange = (e) => {
    window.sessionStorage.setItem("maxDuration", e.value)
  }

  let defaultValue = "Not Specified"
  if (oldValue !== null) {
    options.map( (e) => {
      if (e.value === oldValue.oldValue) {
        defaultValue = e.label
      }
    })
  }

  return (
    <Select
      className="positionFloorSelect"
      options={options}
      placeholder={defaultValue}
      styles={customStylesFloor}
      onChange={onChange}
    />
  );
}

export default MaxDurationSelect;

