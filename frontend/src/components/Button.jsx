import React from 'react';

export default function Button({
  children, //the Content to be wrapped
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props //rest props
}) {
  return (
    <button
    className={`px-4 py-2 rounded-lg ${textColor} ${bgColor} ${className}`}
    {...props} //spreding props
    >{children}</button>
  )
}