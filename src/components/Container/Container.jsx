import React from 'react';

const Container = ({ children, className }) => {
  return (
    <section className={`container mx-auto lg:px-0 px-4 ${className}`}>
      {children}
    </section>
  );
};

export default Container;
