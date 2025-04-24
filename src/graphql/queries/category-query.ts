import { gql } from 'graphql-request';

export const categoryQuery = gql`
  query category($category: String!) {
    category(where: { slug: $category }) {
      description
      products {
        id
        image {
          url
        }
        price
        rating
        slug
        title
      }
      title
    }
  }
`;
