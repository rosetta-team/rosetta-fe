import { gql } from "apollo-boost";

export const getAllLanguages = 
  gql`
  {
    allLanguages {
      edges {
        node {
          name
          id
          methods {
            edges {
              node {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`