import { GraphQLClient } from 'graphql-request';

if (!process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT) {
  throw new Error('NEXT_PUBLIC_GRAPHQL_ENDPOINT is not defined');
}

export const client = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
);
