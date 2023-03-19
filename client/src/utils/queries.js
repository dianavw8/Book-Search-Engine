import { gql } from '@apollo/client';

export const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      username
      email
    }
  }
`;

export const GET_BOOKS = gql`
  query getBooks {
    books {
      id
      title
      author
    }
  }
`;
