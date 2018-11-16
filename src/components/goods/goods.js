import React from 'react';
import GoodsList from '../goods-list/goodsList'

import './Goods.sass';

export default (props) => {
    //массив обьектов shope.json
    const goods = props.goods
    return (
        <div className="container">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Pic</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Old Price</th>
                    </tr>
                </thead>
                <GoodsList good={goods}/>
            </table>
        </div>
    )   
}