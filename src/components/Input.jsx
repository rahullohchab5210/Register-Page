import React from 'react'

function Input({ type, name, placeholder, value, onChange, className }) {
  return (
      <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full border py-[14px] pl-[28px] rounded-[102px] border-none bg-[#F4F8F7] ${className ? className : ''}`}
      />
  )
}

export default Input
 