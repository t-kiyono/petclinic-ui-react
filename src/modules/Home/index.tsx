import React from 'react';

import petsImg from 'assets/images/pets.png';

const Home: React.FC = () => {
  return (
    <>
      <h2>Welcome</h2>
      <img alt="welcome" src={petsImg} />
    </>
  );
};

export default Home;
