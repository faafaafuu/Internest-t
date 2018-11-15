import React from 'react'
import '../assets/Search.sass'

export default (props) => 
    (
            <div className='container search'>
                <div className="input-group ">
                    <div className="input-group-prepend">
                        <label 
                            className="input-group-text" 
                            htmlFor="inputGroupSelect01" 
                            > Sort
                        </label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01">
                        <option value=''>Choose...</option>
                        <option defaultValue="1">Price</option>
                        <option defaultValue="2">Title</option>
                        <option defaultValue="3">Old Price</option>
                    </select>
                </div>
                <form className="form-inline my-3">
                <input className="form-control mr-sm-2 col align-self-end" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
    )
