import React, { Component } from 'react';
class AddOption extends Component {
	state = { error: undefined };
	onFormSubmit = (e) => {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);

		this.setState(() => ({ error }));
		if (!error) e.target.elements.option.value = '';
	};

	render() {
		return (
			<div>
				{this.state.error && (
					<p className="add-option__error">{this.state.error}</p>
				)}
				<form onSubmit={this.onFormSubmit} className="add-option">
					<input type="text" name="option" />
					<button className="button">Add Option</button>
				</form>
			</div>
		);
	}
}

export default AddOption;
