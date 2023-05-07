import React from 'react'
import Table from 'react-bootstrap/Table'

const CharacterEpisodes = ({ episodes }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
        {episodes.map(e =>
          <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.air_date}</td>
          </tr>
        )}
      </tbody>
    </Table>
  )
}

export default CharacterEpisodes
