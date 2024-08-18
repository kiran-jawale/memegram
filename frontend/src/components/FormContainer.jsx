import React from 'react';

const FormContainer = ({
  id,
  type,
  className,
  cardClassName,
  children,
}) => {
  return (
    <section
      id={id}
      className={`${className} flex justify-center items-center min-h-screen w-full`}
    >
      <div
      id={type}
        className={`bg-white rounded-lg shadow-lg w-1/4 h-auto my-12 ${cardClassName}`}
      >
        {children}
      </div>
    </section>
  );
};


export default FormContainer;