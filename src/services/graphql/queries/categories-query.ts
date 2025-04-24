import { gql } from 'graphql-request';

export const categoriesQuery = gql`
  query categories {
    categories {
      id
      products {
        slug
      }
      slug
      title
    }
  }
`;
