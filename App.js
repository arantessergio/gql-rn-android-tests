import React, {useEffect} from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import ScreenOne from './ScreenOne';

export const client = new ApolloClient({
  uri: 'your-url-goes-here',
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ScreenOne />
    </ApolloProvider>
  );
};

export default App;
