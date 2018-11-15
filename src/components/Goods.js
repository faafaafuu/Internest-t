import React /*,{Component}*/ from 'react';
import Search from './Search' 
import GoodsList from './GoodsList'

import '../assets/Goods.sass';

export default (props) => {

    //массив обьектов shope.json
    const goods = props.goods

    return (
        <div className="container">
        <Search 
            good={goods}
            /*sortBy={this.sortBy}*//>
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
/*
    sortBy = (key) => {
        const goods = this.props.goods
        this.setState({
            goods: goods.sort((a, b) => a < b)
        })
    }
    //onClick={()=>this.sortBy("price")}
*/
