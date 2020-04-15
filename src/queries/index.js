import { gql } from "apollo-boost";

export const GET_ALL_LANGUAGES =
  gql`
  {
    allLanguages {
      id
      name
      methods {
        id
        name
        description
        syntax
        snippet
        docsUrl
      }
    }
  }
`

export const GET_TRANSLATION =
   gql`
  query translations($targetLanguageId: Int!, $methodId: Int!) {
    translations(targetLanguageId: $targetLanguageId, methodId: $methodId) {
      id
      weightedRelevancyRating
      method {
        id
        name
        description
        syntax
        snippet
        docsUrl
      }
    }
  }
`

export const CREATE_VOTE =
  gql`
  mutation createVote($methodResultId: ID!, $type: String!) {
   createVote(methodResultId: $methodResultId, type: $type) {
     id
     weightedRelevancyRating
     method {
       id
       name
       description
       syntax
       snippet
       docsUrl
     }
   }
 }
`
