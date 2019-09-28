import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {useApolloClient} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

const QUERY = gql`
  query Banners {
    banners {
      items {
        id
        title
        action
        description
        imgUrl: link
      }
    }
  }
`;

const ScreenOne = () => {
  const client = useApolloClient();
  const [banners, setBanners] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const {data, errors} = await client.query({
        query: QUERY,
      });

      if (data && data.banners && data.banners.items) {
        setBanners(data.banners.items);
      }

      console.log(errors);
    };

    fetch();
  });

  return error ? (
    <Text>Erro ao carregar</Text>
  ) : banners && banners.length > 0 ? (
    banners.map(i => <Text>{i.description}</Text>)
  ) : (
    <Text>Nenhum nem outro</Text>
  );
};

export default ScreenOne;
