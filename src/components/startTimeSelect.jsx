import React, { useEffect, useState } from 'react'
import Select from 'react-select'

import axios from 'axios';

const customStylesBuilding = {
  control: (base, state) => ({
    ...base,
    fontFamily: 'Bariol Regular',
    boxShadow: 0,
    // left: "21.55rem",
    top: "0rem",
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
    // left: "22.5rem",
    top: "1.9rem",
    boxShadow: 'none',
    borderRadius: 5,
    fontSize: "0.8rem",
    width: "14rem"
    
  }),

  menuList: styles => ({
    ...styles,
    height: "9rem",
  }),

  singleValue: styles => ({
    ...styles,
    color: 'rgba(0, 0, 0)',
    fontSize: "0.8rem"
  })
}

function StartTimeSelect() {

  let options = [{ value: "09:00", label: "09:00" },
                { value: "09:00", label: "09:30" },
                { value: "10:00", label: "10:00" },
                { value: "10:30", label: "10:30" },
                { value: "11:00", label: "11:00" },
                { value: "11:30", label: "11:30" },
                { value: "12:00", label: "12:00" },
                { value: "12:30", label: "12:30" },
                { value: "13:00", label: "13:00" },
                { value: "13:30", label: "13:30" },
                { value: "14:00", label: "14:00" },
                { value: "14:30", label: "14:30" },
                { value: "15:00", label: "15:00" },
                { value: "15:30", label: "15:30" },
                { value: "16:00", label: "16:00" },
                { value: "16:30", label: "16:30" },
                { value: "17:00", label: "17:00" }]

  const onChange = (e) => {
    window.sessionStorage.setItem("startTime", e.value)
  }


  return (
    <Select
      options={options}
      placeholder="Not Specified"
      styles={customStylesBuilding}
      onChange={onChange}
    />
  );
}

export default StartTimeSelect ;

