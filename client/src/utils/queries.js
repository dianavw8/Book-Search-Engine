import { gql } from '@apollo/client';

export const GET_ME = gql`
  query {
    me {
      id
      username
      email
      savedBooks {
        id
        title
        authors
        description
        image
        link
      }
    }
  }
`;

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
