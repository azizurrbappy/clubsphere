import React from 'react';

const Conatiner2 = ({ children, className }) => {
  return (
    <section className={`max-w-7xl mx-auto px-4 ${className}`}>
      {children}
    </section>
  );
};

export default Conatiner2;
