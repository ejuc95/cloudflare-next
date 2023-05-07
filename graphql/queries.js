import { gql } from '@apollo/client'

export const ALL_CHARACTERS = gql`
query Characters($page: Int!) {
  characters(page: $page) {
    info {
      count
    }
    results {
      name
      id
      image
      status
    }
  }
}
`
export const CHARACTER = gql`
query Character($id: ID!){
  character(id: $id) {
    id
    name
    status
    species
    type
    image
    gender
    location {
      name
      dimension
    }
    episode {
      id
      name
      air_date
    }
  }
}
`
