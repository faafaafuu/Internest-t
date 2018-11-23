import React from 'react'
import { Table, Image } from 'semantic-ui-react'

export default ({goods, price, data, id, base_url, oldPrice}) => (
	<Table.Row key={goods.id}>
		<Table.Cell>{id}</Table.Cell>
		<Table.Cell><Image src={data.base_url} alt=""/></Table.Cell>
		<Table.Cell>{data.title}</Table.Cell>
		<Table.Cell>{data.price}</Table.Cell>
		<Table.Cell>{data.oldPrice}</Table.Cell>
	</Table.Row>
)