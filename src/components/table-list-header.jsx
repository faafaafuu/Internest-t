import React from 'react'
import { Table } from 'semantic-ui-react'

export default () => (
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>#</Table.HeaderCell>
      <Table.HeaderCell>Pic</Table.HeaderCell>
      <Table.HeaderCell>Title</Table.HeaderCell>
      <Table.HeaderCell>Price</Table.HeaderCell>
      <Table.HeaderCell>Old Price</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
)
