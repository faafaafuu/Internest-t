
// import React, {Component} from 'react'

// export default class Sort extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {value: ''};

// 		this.handleChange = this.handleChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}
// 	render() {
// 		return (
// 			<div className="input-group-prepend">
// 				<label 
// 						className="input-group-text" 
// 						htmlFor="inputGroupSelect01"
// 						> Sort by
// 				</label>
// 				<select 
// 						className="custom-select" 
// 						id="inputGroupSelect01">
// 						<option value='Choose'>Choose...</option>
// 						<option value="price">Price</option>
// 						<option value="title">Title</option>
// 						<option value="oldPrice">Old Price</option>
// 				</select>
// 		    </div>
// 		)
// 	}
// }








import React, {Component} from 'react'

export default class Sort extends Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	render() {
        const optionItem = this.handleSubmit
		return (
			<div className="input-group-prepend">
				<label 
						className="input-group-text" 
						htmlFor="inputGroupSelect01"
						onClick={optionItem}
						> Sort by
				</label>
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
				<style>
	
				</style>
		</div>
		
		)
	}
	//получит значение options
	handleChange(ev) {
		this.setState({
				value: ev.target.value
		});
	}

	handleSubmit(ev) {
			console.log(this.state.value)
			ev.preventDefault();
	}
}