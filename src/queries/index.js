import { gql } from "apollo-boost";

export const getAllLanguages = 
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

export const getTranslation = (targetId, methodId) => { 
  gql`
  {
    translations(targetLanguageId: ${targetId}, methodId: ${methodId}) {
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
}