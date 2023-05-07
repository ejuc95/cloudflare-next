import Link from 'next/link'
import React from 'react'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

const Cards = ({ data }) => {
  return (
    <Card>
      <Card.Img variant='top' src={data.image} />
      <Card.Body>
        <Card.Title><Link href={`/character/${data.id}`}>{data.name}</Link></Card.Title>
        <Card.Text>
          {data.status}
        </Card.Text>
        <Button variant='success'>hola</Button>
      </Card.Body>
    </Card>
  )
}

export default Cards
