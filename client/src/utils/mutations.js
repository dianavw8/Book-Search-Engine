import { gql } from '@apollo/client';

export const ADD_BOOK = gql`
  mutation addBook($title: String!, $author: String!) {
    addBook(title: $title, author: $author) {
      id
      title
      author
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $username: String!, $email: String!) {
    updateUser(id: $id, username: $username, email: $email) {
      id
      username
      email
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation deleteBook($id: ID!) {
    deleteBook(id: $id) {
      id
      title
      author
    }
  }
`;
