import React, {Component} from 'react'
import '../assets/Search.sass'

export default class Search extends Component {
    
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        const optionItem = this.handleSubmit
        return (
            <div className='container search'>
                <div className="input-group ">
                    <div className="input-group-prepend">
                        <label 
                            className="input-group-text" 
                            htmlFor="inputGroupSelect01"
                            onClick={optionItem}
                            > Sort by
                        </label>
                    </div>
                    <select 
                        className="custom-select" 
                        id="inputGroupSelect01" 
                        value={this.props.value} 
                        onChange={this.handleChange}>

                        <option value='Choose'>Choose...</option>
                        <option value="price">Price</option>
                        <option value="title">Title</option>
                        <option value="oldPrice">Old Price</option>
                    </select>
                </div>
                <form className="form-inline my-3">
                <input className="form-control mr-sm-2 col align-self-end" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        )
    }
    // sortBy = (key) => {
    //     return key
    // }

    //получит значение options
    handleChange(ev) {
        this.setState({
            value: ev.target.value
        });
    }
    
    handleSubmit(ev) {
        console.log(this.state.value);
        ev.preventDefault();
    }
    
}