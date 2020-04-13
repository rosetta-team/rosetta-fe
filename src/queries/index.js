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
      }
    }
  }
`

export const GET_TRANSLATION = 
   gql`
  query translations($targetLanguageId: Int!, $methodId: Int!) {
    translations(targetLanguageId: $targetLanguageId, methodId: $methodId) {
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
