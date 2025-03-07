import React from 'react';

function App() {
  return (
    <div>
      <h1>The Frame Guru</h1>
      <p>Custom Framing Redefined</p>
    </div>
  );
}

export default App;
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

function App({ title, subtitle }) {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </Container>
  );
}

App.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

App.defaultProps = {
  title: 'The Frame Guru',
  subtitle: 'Custom Framing Redefined',
};

export default App;
