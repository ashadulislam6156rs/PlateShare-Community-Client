import React from 'react';
import { HashLoader } from 'react-spinners';
import Container from '../Componants/Container/Container';

const Loading = () => {
    return (
      <Container>
        <div className="flex justify-center items-center min-h-screen">
          <HashLoader color="#fd7d07" size={40} />
        </div>
      </Container>
    );
};

export default Loading;