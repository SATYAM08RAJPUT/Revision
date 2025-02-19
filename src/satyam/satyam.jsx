import React from 'react';
const Satyam = () => {
  return (
    <>
      <button
        onClick={() => {
          throw new Error('This is your first error!');
        }}
      >
        Break the world
      </button>
      <button>Hello </button>
    </>
  );
};
export default Satyam;
