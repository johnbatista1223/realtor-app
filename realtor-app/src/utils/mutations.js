import { gql } from '@apollo/client';



export const CREATE_USER = gql`
  mutation createUser($_id: String!, $name: Int!, $password: String!, $email: String!) {
    createUser(_id: $_id, name: $name, email: $email, password: $password) {
      _id
      name
      email
      password
    }
  }
`;
