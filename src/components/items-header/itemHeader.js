import React, {Component} from 'react'
import './Sort'

export default class Search extends Component {

    render() {
        const {optionItem} = this.handleSubmit
        return (
            <div className='container search'>
                    <Sort/>
                    <Search/>
            </div>
        )
    }
}