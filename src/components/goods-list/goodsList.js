import React from 'react'

//вывод обектов в таблицу
export default ({good}) => {
    const listItem = good.map((e) => {
        return(
            <tr key={e.id}>
                <td>{e.id}</td>
                <th scope="col-2">
                    <img className="rounded" src={e.data.base_url} alt=""/>
                </th>
                <td>{e.data.title}</td>
                <td>{e.data.price}</td>
                <td>{e.data.oldPrice}</td>
            </tr>
        )
    })

    return (
        <tbody>
            {listItem}    
        </tbody>
    )
}