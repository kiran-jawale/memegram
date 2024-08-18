import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props }, //props
  ref //ref for dom node(input)
) {
  const uid = useId(); //generates unique id
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={uid}>
          {label}
        </label>
      )}
      <input
        className={`px-3 py-2 bg-gray-300 text-black border border-gray-400 w-full 
          outline-none rounded-lg ${className}`}
        type={type}
        id={uid}
        ref={ref} //ref here
        {...props} //spreading rest props
      />
    </div>
  );
});

export default Input;
