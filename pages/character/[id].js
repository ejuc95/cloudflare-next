import React from 'react'
import CharacterEpisodes from '../../components/CharacterEpisodes'
import Details from '../../components/Details'
import { CHARACTER } from '../../graphql/queries'
import { client } from '../_app'

export default function Character ({ data }) {
  return (
    <div>
      <Details data={data} />
      <h2>Episodes</h2>
      <CharacterEpisodes episodes={data.episode} />
    </div>
  )
}

export async function getServerSideProps (context) {
  const id = context.params.id
  const { data } = await client.query({
    query: CHARACTER,
    variables: {
      id
    }
  })

  return {
    props: {
      data: data.character
    }
  }
}
